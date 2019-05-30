import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionsCreators';
import ChatWindow from '../components/chatWindow';

function mapStateToProps(state) {	
	return {
			chats: state.chats,
			selectedChatId: state.chats.selectedChatId,
			messages: state.chats.messages
	}
} 

function mapDispatchProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(ChatWindow)