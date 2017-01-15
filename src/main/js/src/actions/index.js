export const SELECT_TIMELINE_EVENT = 'SELECT_TIMELINE_EVENT';
export const IMPACT_DATA_RECEIVED = 'IMPACT_DATA_RECEIVED';
export const IMPACT_DATA_ERROR = 'IMPACT_DATA_ERROR';

export const selectTimelineEvent = (element, index) => ({
	type: SELECT_TIMELINE_EVENT,
	element,
	index
	});

export const impactDataReceived = (element, index, impact) => ({
	type: IMPACT_DATA_RECEIVED,
	element,
	index,
	impact
	});

export const impactDataError = (element, index, error) => ({
	type: IMPACT_DATA_ERROR,
	element,
	index,
	error
	});
