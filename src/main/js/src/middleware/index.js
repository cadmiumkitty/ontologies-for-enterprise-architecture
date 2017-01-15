import request from 'superagent';
import { SELECT_TIMELINE_EVENT, IMPACT_DATA_RECEIVED, IMPACT_DATA_ERROR } from '../actions';
import { selectTimelineEvent, impactDataReceived, impactDataError } from '../actions';

const createSparqlMiddleware = () => {

	return store => next => action => {
		switch (action.type) {
			case SELECT_TIMELINE_EVENT:
			    request
			        .get('/sparql?query=' + action.element.sparql)
			        .end((error, result) => {
			            if (error) {
			        	    console.log("Got error.", error)
			        	    next(impactDataError(action.element, action.index, error))
				        } else {
				        	console.log("Got result.", result)
					        const data = JSON.parse(result.text)
					        const columns = [{ name: "oucomment", title: "Organization Unit" },
					                   { name: "functioncomment", title: "Function" },
					                   { name: "processcomment", title: "Process" },
					                   { name: "laccomment", title: "Logical Application Component" },
					                   { name: "paccomment", title: "Physical Application Component" },
					                   { name: "ptccomment", title: "Physical Technology Component" },
					                   { name: "decomment", title: "Data Element" }];					        
					        const rows = _.map(data.results.bindings, 
					        		(binding) => { return _.mapValues(binding, 'value') })
					        next(impactDataReceived(action.element, action.index, {rows: rows, columns: columns}))
				      	}
			        });
				return next(action);
			default:
				console.log("Some other action got called.", action);
				return next(action);
		}
	}	
}

export default createSparqlMiddleware;