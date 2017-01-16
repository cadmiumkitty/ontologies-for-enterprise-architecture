import _ from 'lodash';
import { SELECT_TIMELINE_EVENT, IMPACT_DATA_RECEIVED, IMPACT_DATA_ERROR } from '../actions';

const reducer = (state = {
	timeline: [	
		{
			created: '14-Jan-2017',
			label: 'Data Protection Act 2008 - update to personal data definition', 
			abstract: 'In s. 1(1) in definition of "data" word repealed (1.1.2005) by 2000 c. 36, ss. 68(2)(a), 86, 87(3), Sch. 8 Pt. III (with ss. 56, 78); S.I. 2004/1909, art. 2; S.I. 2004/3122, art. 2',
			type: 'account_balance',
			sparql: 'PREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2008%2F05%2Fskos%23%3E%0APREFIX+gn%3A+%3Chttp%3A%2F%2Fwww.geonames.org%2Fontology%23%3E%0APREFIX+togaf%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fontologies%2F2010%2F0%2FOntologyTOGAFContentMetamodel.owl%23%3E%0A%0APREFIX+%3A+%3Chttp%3A%2F%2Fsemanticweblondon.com%2F%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0ASELECT+%3Foucomment+%3Ffunctioncomment+%3Fprocesscomment+%3Flaccomment+%3Fpaccomment+%3Fptccomment+%3Fdecomment%0AWHERE+%7B%0A++%3Fou+a+togaf%3AOrganizationUnit+%3B%0A++++rdfs%3Acomment+%3Foucomment+%3B%0A++++togaf%3AouOwns+%3Ffunction+.%0A++%3Ffunction+a+togaf%3AFunction+%3B%0A++++rdfs%3Acomment+%3Ffunctioncomment+%3B%0A++++togaf%3AsupportsOrIsRealizedByProcess+%3Fprocess+.%0A++%3Fprocess+a+togaf%3AProcess+%3B%0A++++rdfs%3Acomment+%3Fprocesscomment+%3B%0A++++togaf%3AorchestratesAndOrDecomposesBS+%3Fbs+.%0A++%3Fbs+a+togaf%3ABusinessService+%3B%0A++++rdfs%3Acomment+%3Fbscomment+.%0A++%3Fiss+a+togaf%3AInformationSystemService+%3B%0A++++rdfs%3Acomment+%3Fisscomment+%3B%0A++++togaf%3AISRealizesBS+%3Fbs+.%0A++%3Flac+a+togaf%3ALogicalApplicationComponent+%3B%0A++++togaf%3AisRealizedThroughISS+%3Fiss+%3B%0A++++togaf%3AisRealizedByPAC+%3Fpac+%3B%0A++++togaf%3AoperatesOnDE+%3Fde+%3B%0A++++rdfs%3Acomment+%3Flaccomment.%0A++%3Fiss+a+togaf%3AInformationSystemService+%3B%0A++++rdfs%3Acomment+%3Fisscomment+.%0A++%3Fpac+a+togaf%3APhysicalApplicationComponent+%3B%0A++++rdfs%3Acomment+%3Fpaccomment+%3B%0A++++togaf%3AisRealizedByPTC+%3Fptc+.%0A++%3Fptc+a+togaf%3APhysicalTechnologyComponent+%3B%0A++++rdfs%3Acomment+%3Fptccomment+.%0A++%3Fde+rdfs%3Acomment+%3Fdecomment+%3B%0A++++skos%3Arelated+%3Chttp%3A%2F%2Fwww.legislation.gov.uk%2Fukpga%2F1998%2F29%2Fsection%2F1%23term-personal-data%3E+.%0A%7D',
			open: false,
			impact: null,
			progress: false,
			error: false			
		},
		{
			created: '12-Jan-2017',
			label: 'Data Protection Act 2008 - update to sensitive personal data definition', 
			abstract: 'In s. 1(1) in definition of "data" paragraph (e) and preceding word inserted (1.1.2005) by 2000 c. 36, ss. 68(2)(a), 87(3) (with ss. 56, 78); S.I. 2004/1909, art. 2; S.I. 2004/3122, art. 2',
			type: 'account_balance',
			sparql: 'PREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2008%2F05%2Fskos%23%3E%0APREFIX+gn%3A+%3Chttp%3A%2F%2Fwww.geonames.org%2Fontology%23%3E%0APREFIX+togaf%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fontologies%2F2010%2F0%2FOntologyTOGAFContentMetamodel.owl%23%3E%0A%0APREFIX+%3A+%3Chttp%3A%2F%2Fsemanticweblondon.com%2F%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0ASELECT+%3Foucomment+%3Ffunctioncomment+%3Fprocesscomment+%3Flaccomment+%3Fpaccomment+%3Fptccomment+%3Fdecomment%0AWHERE+%7B%0A++%3Fou+a+togaf%3AOrganizationUnit+%3B%0A++++rdfs%3Acomment+%3Foucomment+%3B%0A++++togaf%3AouOwns+%3Ffunction+.%0A++%3Ffunction+a+togaf%3AFunction+%3B%0A++++rdfs%3Acomment+%3Ffunctioncomment+%3B%0A++++togaf%3AsupportsOrIsRealizedByProcess+%3Fprocess+.%0A++%3Fprocess+a+togaf%3AProcess+%3B%0A++++rdfs%3Acomment+%3Fprocesscomment+%3B%0A++++togaf%3AorchestratesAndOrDecomposesBS+%3Fbs+.%0A++%3Fbs+a+togaf%3ABusinessService+%3B%0A++++rdfs%3Acomment+%3Fbscomment+.%0A++%3Fiss+a+togaf%3AInformationSystemService+%3B%0A++++rdfs%3Acomment+%3Fisscomment+%3B%0A++++togaf%3AISRealizesBS+%3Fbs+.%0A++%3Flac+a+togaf%3ALogicalApplicationComponent+%3B%0A++++togaf%3AisRealizedThroughISS+%3Fiss+%3B%0A++++togaf%3AisRealizedByPAC+%3Fpac+%3B%0A++++togaf%3AoperatesOnDE+%3Fde+%3B%0A++++rdfs%3Acomment+%3Flaccomment.%0A++%3Fiss+a+togaf%3AInformationSystemService+%3B%0A++++rdfs%3Acomment+%3Fisscomment+.%0A++%3Fpac+a+togaf%3APhysicalApplicationComponent+%3B%0A++++rdfs%3Acomment+%3Fpaccomment+%3B%0A++++togaf%3AisRealizedByPTC+%3Fptc+.%0A++%3Fptc+a+togaf%3APhysicalTechnologyComponent+%3B%0A++++rdfs%3Acomment+%3Fptccomment+.%0A++%3Fde+rdfs%3Acomment+%3Fdecomment+%3B%0A++++skos%3Arelated+%3Chttp%3A%2F%2Fwww.legislation.gov.uk%2Fukpga%2F1998%2F29%2Fsection%2F2%23term-sensitive-personal-data%3E+.%0A%7D',
			open: false,
			impact: null,
			progress: false,
			error: false			
		},
		{
			created: '10-Jan-2017',
			label: 'Security advisory for Interviewer version 1.0.0', 
			abstract: 'Update 35 for Interviewer version 1.0.0 addresses SSH key-based authentication issue',
			type: 'warning',
			sparql: 'PREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2008%2F05%2Fskos%23%3E%0APREFIX+gn%3A+%3Chttp%3A%2F%2Fwww.geonames.org%2Fontology%23%3E%0APREFIX+togaf%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fontologies%2F2010%2F0%2FOntologyTOGAFContentMetamodel.owl%23%3E%0A%0APREFIX+%3A+%3Chttp%3A%2F%2Fsemanticweblondon.com%2F%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0ASELECT+%3Foucomment+%3Ffunctioncomment+%3Fprocesscomment+%3Flaccomment+%3Fpaccomment+%3Fptccomment+%3Fdecomment%0AWHERE+%7B%0A++%3Fou+a+togaf%3AOrganizationUnit+%3B%0A++++rdfs%3Acomment+%3Foucomment+%3B%0A++++togaf%3AouOwns+%3Ffunction+.%0A++%3Ffunction+a+togaf%3AFunction+%3B%0A++++rdfs%3Acomment+%3Ffunctioncomment+%3B%0A++++togaf%3AsupportsOrIsRealizedByProcess+%3Fprocess+.%0A++%3Fprocess+a+togaf%3AProcess+%3B%0A++++rdfs%3Acomment+%3Fprocesscomment+%3B%0A++++togaf%3AorchestratesAndOrDecomposesBS+%3Fbs+.%0A++%3Fbs+a+togaf%3ABusinessService+%3B%0A++++rdfs%3Acomment+%3Fbscomment+.%0A++%3Fiss+a+togaf%3AInformationSystemService+%3B%0A++++rdfs%3Acomment+%3Fisscomment+%3B%0A++++togaf%3AISRealizesBS+%3Fbs+.%0A++%3Flac+a+togaf%3ALogicalApplicationComponent+%3B%0A++++togaf%3AisRealizedThroughISS+%3Fiss+%3B%0A++++togaf%3AisRealizedByPAC+%3Fpac+%3B%0A++++togaf%3AoperatesOnDE+%3Fde+%3B%0A++++rdfs%3Acomment+%3Flaccomment.%0A++%3Fiss+a+togaf%3AInformationSystemService+%3B%0A++++rdfs%3Acomment+%3Fisscomment+.%0A++%3Fpac+a+togaf%3APhysicalApplicationComponent+%3B%0A++++rdfs%3Acomment+%3Fpaccomment+%3B%0A++++togaf%3AisRealizedByPTC+%3Fptc+.%0A++%3Fptc+a+togaf%3APhysicalTechnologyComponent+%3B%0A++++rdfs%3Acomment+%3Fptccomment+.%0A++%3Fde+rdfs%3Acomment+%3Fdecomment+.%0A++FILTER+(%3Fptc+%3D+%3Ainterviewer100)++%0A%7D',
			open: false,
			impact: null,
			progress: false,
			error: false			
		},
		{
			created: '02-Jan-2017',
			label: 'Change of treatment of personal data stored outside of the EEA', 
			abstract: 'Personal data shall not be transferred to a country or territory outside the EEA unless that country or territory ensures an adequate level of protection for the rights and freedoms of data subjects in relation to the processing of personal data.',
			type: 'account_balance',
			sparql: 'PREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2008%2F05%2Fskos%23%3E%0APREFIX+gn%3A+%3Chttp%3A%2F%2Fwww.geonames.org%2Fontology%23%3E%0APREFIX+togaf%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fontologies%2F2010%2F0%2FOntologyTOGAFContentMetamodel.owl%23%3E%0A%0APREFIX+%3A+%3Chttp%3A%2F%2Fsemanticweblondon.com%2F%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0ASELECT+%3Foucomment+%3Ffunctioncomment+%3Fprocesscomment+%3Flaccomment+%3Fpaccomment+%3Fptccomment+%3Fdecomment%0AWHERE+%7B%0A++%3Fou+a+togaf%3AOrganizationUnit+%3B%0A++++rdfs%3Acomment+%3Foucomment+%3B%0A++++togaf%3AouOwns+%3Ffunction+.%0A++%3Ffunction+a+togaf%3AFunction+%3B%0A++++rdfs%3Acomment+%3Ffunctioncomment+%3B%0A++++togaf%3AsupportsOrIsRealizedByProcess+%3Fprocess+.%0A++%3Fprocess+a+togaf%3AProcess+%3B%0A++++rdfs%3Acomment+%3Fprocesscomment+%3B%0A++++togaf%3AorchestratesAndOrDecomposesBS+%3Fbs+.%0A++%3Fbs+a+togaf%3ABusinessService+%3B%0A++++rdfs%3Acomment+%3Fbscomment+.%0A++%3Fiss+a+togaf%3AInformationSystemService+%3B%0A++++rdfs%3Acomment+%3Fisscomment+%3B%0A++++togaf%3AISRealizesBS+%3Fbs+.%0A++%3Flac+a+togaf%3ALogicalApplicationComponent+%3B%0A++++togaf%3AisRealizedThroughISS+%3Fiss+%3B%0A++++togaf%3AisRealizedByPAC+%3Fpac+%3B%0A++++togaf%3AoperatesOnDE+%3Fde+%3B%0A++++rdfs%3Acomment+%3Flaccomment.%0A++%3Fiss+a+togaf%3AInformationSystemService+%3B%0A++++rdfs%3Acomment+%3Fisscomment+.%0A++%3Fpac+a+togaf%3APhysicalApplicationComponent+%3B%0A++++rdfs%3Acomment+%3Fpaccomment+%3B%0A++++togaf%3AisRealizedByPTC+%3Fptc+.%0A++%3Fptc+a+togaf%3APhysicalTechnologyComponent+%3B%0A++++rdfs%3Acomment+%3Fptccomment+.%0A++%3Fde+rdfs%3Acomment+%3Fdecomment+%3B%0A++++++togaf%3AresidesWithinLDC%2Ftogaf%3AisRealizedByPDC%2Ftogaf%3ApDCIsHostedIn+%3Flocation+.%0A++FILTER+(+%3Flocation+!%3D+%3Chttp%3A%2F%2Fsws.geonames.org%2F2643743%2F%3E+)+.%0A%7D',
			open: false,
			impact: null,
			progress: false,
			error: false			
		}		
   	]
}, action) => {
	
	console.log("Got the action.", action);

	const { timeline } = state;

	switch (action.type) {
		case SELECT_TIMELINE_EVENT:
			return {
				...state,
				timeline: _.map(timeline, 
						(event, index) => { 
							return index === action.index ? 
									Object.assign({}, event, {open: true, impact: null, progress: true, error: false}) : 
									Object.assign({}, event, {open: false, impact: null, progress:false, error:false}) })
			};
		case IMPACT_DATA_RECEIVED:
			return {
				...state,
				timeline: _.map(timeline, 
						(event, index) => { 
							return index === action.index ? 
									Object.assign({}, event, {open: true, impact: action.impact, progress: false, error: false}) : 
									Object.assign({}, event, {open: false, impact: null, progress:false, error:false}) })
			};
		case IMPACT_DATA_ERROR:
			return {
				...state,
				timeline: _.map(timeline, 
						(event, index) => { 
							return index === action.index ? 
									Object.assign({}, event, {open: true, impact: null, progress: false, error: true}) : 
									Object.assign({}, event, {open: false, impact: null, progress:false, error:false}) })
			};
		default:
			return state;
	}
}

export default reducer;