package com.emorozov.semanticweblondon.ea;

import javax.servlet.http.HttpServletResponse;

import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.ResultSet;
import org.apache.jena.query.ResultSetFormatter;
import org.apache.jena.rdf.model.InfModel;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.reasoner.Reasoner;
import org.apache.jena.reasoner.ReasonerRegistry;
import org.apache.jena.riot.Lang;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class SparqlController {

	private InfModel infModel;

	public SparqlController() throws Exception {
		
		loadModel();
	}

	private void loadModel() throws Exception {

		log.info("Loading model...");

		Model model = ModelFactory.createDefaultModel();
		model.read("data/ea.ttl", Lang.TURTLE.getName());
		model.read("https://sites.google.com/site/ontologyprojects/home/togaf-core-content-metamodel/file-cabinet/OntologyTOGAFContentMetamodelV1.xml?attredirects=0&d=1", Lang.RDFXML.getName());

		log.info("Applying inference...");

		// Applying inference so that TOGAF Content Metamodel Ontology properties
		// work correctly in any direction
		Reasoner owlMicroReasoner = ReasonerRegistry.getOWLMicroReasoner();
		this.infModel = ModelFactory.createInfModel(owlMicroReasoner, model);

		log.info("Done.");
	}

	@RequestMapping(value = "/sparql", produces = "application/json")
	public void sparql(
			HttpServletResponse response,
			@RequestParam(value = "query", required = false) String queryString,
			@RequestParam(value = "output", required = false) String outputString) throws Exception {

		log.info("Got query: {}", queryString);
		
		// FIXME This is very basic implementation just to get the demo going, 
		// so this is not a fully compliant SPARQL endpoint.
		Query query = QueryFactory.create(queryString);
		try (QueryExecution qexec = QueryExecutionFactory.create(query, infModel)) {
			ResultSet results = qexec.execSelect();
			ResultSetFormatter.outputAsJSON(response.getOutputStream(), results);
		}
	}

}
