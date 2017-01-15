# Documenting Enterprise Architectures Using Ontologies

## Semantic Web London January 2016

This code is from the fifth [Semantic Web London](https://www.meetup.com/semantic-web-london/events/236244738/) meetup in January 2017.

## Intro

[TOGAF](http://pubs.opengroup.org/architecture/togaf9-doc/arch/) is an established framework for enterprise architecture that includes [Content Metamodel](http://pubs.opengroup.org/architecture/togaf9-doc/arch/chap34.html#tagfcjh_64).

This talk explores the possibilities of linking enterprise architectures to legislative data to improve architectural impact assessment.

## Prerequisites

We looked at the paper by Aurona Gerber, Paula Kotze and Alta van der Merwe [Towards the Formalisation of the TOGAF Content Metamodel using Ontologies](https://www.researchgate.net/publication/220708864_Towards_the_Formalisation_of_the_TOGAF_Content_Metamodel_using_Ontologies) and used the ontology to describe enterprise architecture of a fictitious consulting company Guru Associates. Consulting firm example is borrowed from David Maister's [Managing the Professional Service Firm](https://www.amazon.co.uk/Managing-Professional-Service-David-Maister/dp/0743231562).

We have then amended the description using [SKOS](https://www.w3.org/2004/02/skos/) and URIs from [www.legislation.gov.uk](http://www.legislation.gov.uk/) linking Guru Associates enterprise architecture to terms of Data Protection Act 1998.

## Guru Associates example

 1. [data/ea/ea.ttl](data/ea/ea.ttl) contains description of the enterprise architecture of a fictitious consulting company Guru Associates.
 1. [data/ea/ea.ttl](data/ea/ea.ttl) contains links from Guru Associates enterprise architecture data elements to [UK Data Protection Act 1998](http://www.legislation.gov.uk/ukpga/1998/29/section/1). Specifically in this example we are using [http://www.legislation.gov.uk/ukpga/1998/29](http://www.legislation.gov.uk/ukpga/1998/29) referring to overall data Protection Act 1998 and   [http://www.legislation.gov.uk/ukpga/1998/29/section/1#term-personal-data](http://www.legislation.gov.uk/ukpga/1998/29/section/1#term-personal-data) referring to the definition of personal data. [http://www.legislation.gov.uk/ukpga/1998/29/section/7](http://www.legislation.gov.uk/ukpga/1998/29/section/7) referring to the right of access to personal data.
 1. [data/ea/ea.ttl](data/ea/ea.ttl) contains links from Guru Associates enterprise architecture data elements to geonames identifiers of locations where data is physically stored.
 1. [date/updates/20170113.sparql](date/updates/20170113.sparql) and [date/updates/20170114.sparql](date/updates/20170114.sparql) contain simple queries to drive the prototype - they pick elements of the enterprise architecture described in [data/ea/ea.ttl](data/ea/ea.ttl) that are affected by law changes.

## Interesting queries

Once [guru-ea.ttl](guru-ea.ttl) is loaded into a triple store of your choice, you can start issuing queries or applying reasoning on top of it.

### What data entities are affected by a change in legislation and where are they hosted

```
PREFIX skos: <http://www.w3.org/2008/05/skos#>
PREFIX gn: <http://www.geonames.org/ontology#>
PREFIX togaf: <http://www.semanticweb.org/ontologies/2010/0/OntologyTOGAFContentMetamodel.owl#>

PREFIX : <http://semanticweblondon.com/>

SELECT ?de ?pdc ?location ?pc
WHERE {
  ?de a togaf:DataEntity ;
      skos:related <http://www.legislation.gov.uk/ukpga/1998/29/section/1#term-personal-data> ;
      togaf:residesWithinLDC ?ldc .
  ?ldc togaf:isRealizedByPDC ?pdc .
  ?pdc togaf:pDCIsHostedIn ?location .
}
```

### What does TOGAF Function to System matrix look like

This query picks all elements of the matrix affected by the [http://www.legislation.gov.uk/ukpga/1998/29/section/1#term-personal-data](http://www.legislation.gov.uk/ukpga/1998/29/section/1#term-personal-data) change.

```
PREFIX skos: <http://www.w3.org/2008/05/skos#>
PREFIX gn: <http://www.geonames.org/ontology#>
PREFIX togaf: <http://www.semanticweb.org/ontologies/2010/0/OntologyTOGAFContentMetamodel.owl#>

PREFIX : <http://semanticweblondon.com/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT ?oucomment ?functioncomment ?processcomment ?laccomment ?paccomment ?ptccomment
WHERE {
  ?ou a togaf:OrganizationUnit ;
    rdfs:comment ?oucomment ;
    togaf:ouOwns ?function .
  ?function a togaf:Function ;
    rdfs:comment ?functioncomment ;
    togaf:supportsOrIsRealizedByProcess ?process .
  ?process a togaf:Process ;
    rdfs:comment ?processcomment ;
    togaf:orchestratesAndOrDecomposesBS ?bs .
  ?bs a togaf:BusinessService ;
    rdfs:comment ?bscomment .
  ?iss a togaf:InformationSystemService ;
    rdfs:comment ?isscomment ;
    togaf:ISRealizesBS ?bs .
  ?lac a togaf:LogicalApplicationComponent ;
    togaf:isRealizedThroughISS ?iss ;
    togaf:isRealizedByPAC ?pac ;
    togaf:operatesOnDE ?de ;
    rdfs:comment ?laccomment.
  ?iss a togaf:InformationSystemService ;
    rdfs:comment ?isscomment .
  ?pac a togaf:PhysicalApplicationComponent ;
    rdfs:comment ?paccomment ;
    togaf:isRealizedByPTC ?ptc .
  ?ptc a togaf:PhysicalTechnologyComponent ;
    rdfs:comment ?ptccomment .
  ?de rdfs:comment ?decomment ;
    skos:related <http://www.legislation.gov.uk/ukpga/1998/29/section/1#term-personal-data> .
}
```

## Known gaps in the data

 1. Architecture in this example is not fully fleshed, missing Platform Services, Logical Technology Components, Objectives, Measures, Events, Service Quality, Contract, Control and Product from Business Architecture.
 2. Text of the updates on the screen is mocked up to show what the updates might look like, even though actual RDF data is linking to the existing text of the UK Data Protection Act 1998.

## Running the prototype

### Dependencies

You'll need [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and [Apache Maven 3.3.x](https://maven.apache.org/).
Node and NPM are downloaded as part of the build using [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin).

### Building

```
mvn clean package
```

### Running

```
java -jar target/ontologies-for-enterprise-architecture-1.0.0-SNAPSHOT.jar
```

### Demo sequence for the talk

 1. Start the app.
 1. Go to (http://localhost:8080).
 1. Toggle one of the events and talk through what is happening in the background.
