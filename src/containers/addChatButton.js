import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionsCreators';
import addChatButton from '../components/addChatButton';

function mapStateToProps(state) {
	console.log(state);
	return {
		selectedChatId: state.chats.selectedChatId,
		messages: state.messages
	}
}

function mapDispatchProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(addChatButton)