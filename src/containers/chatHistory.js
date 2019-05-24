import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionsCreators';
import chatHistory from '../components/chatHistory';

function mapStateToProps(state) {
    return {
		messages: state.messages
	}
} 

function mapDispatchProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(chatHistory)