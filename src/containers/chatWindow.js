import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actionsCreators";
import ChatWindow from "../components/chatWindow";

function mapStateToProps(state) {
  return {
    chats: state.chats
  };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchProps
)(ChatWindow);
