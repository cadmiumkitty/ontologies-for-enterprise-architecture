import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { selectTimelineEvent } from '../actions';
import { Layout, Content, Header, DataTable, TableHeader, Icon, Spinner } from 'react-mdl';
import { Timeline, TimelineEvent } from 'react-event-timeline';

class Application extends Component {
		
	onSelect = (element, index, e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(selectTimelineEvent(element, index))
    };
    
    renderProgress = () => {
    	return (<Spinner />);
    }
     
    renderError = () => {
    	return (<Icon style = {{fontSize: '18px'}} name = "error"/>);
    }
	
    renderImpactTableHeaders = (column) => {
    	return (<TableHeader name = { column.name } tooltip = { column.title }>{ column.title }</TableHeader>);
    }
    
    renderImpactTable = (impact) => {
    	return (
		     	<DataTable 
		     			style = {{ width: '100%' }} 
		     			shadow = {0} 
		     			rows = { impact.rows }>
		     		{ _.map(impact.columns, this.renderImpactTableHeaders) }
		        </DataTable>    			
    	);
    }
    
	renderTimelineEvent = (element, index) => {
        return (
            <TimelineEvent 
            		createdAt = { element.created }
            		title = { element.label }
                	icon = { <Icon style = {{fontSize: '18px'}} name = {element.type}/> }
                	onClick = { this.onSelect.bind(this, element, index) }>
            	<div>
            		<p>{ element.abstract }</p>
            		{ element.open && !element.progress && !element.error ? this.renderImpactTable(element.impact) : null }
            		{ element.progress ? this.renderProgress() : null }
            		{ element.error ? this.renderError() : null }
            	</div>
		     </TimelineEvent>
        );
    }
	
    render() {
    	const { timeline } = this.props;
        return (
            <div>
	            <Layout fixedHeader>
		            <Header title="Semantic Web London Jan 2017"/>
		            <Content>
			            <Timeline>
			            	{ _.map(timeline, this.renderTimelineEvent) }
		            	</Timeline>
		            </Content>
            	</Layout>            
            </div>
        );
    }
}

Application.propTypes = {
    timeline: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    const { timeline } = state;
    return {
        timeline
    };
}

export default connect(mapStateToProps)(Application)