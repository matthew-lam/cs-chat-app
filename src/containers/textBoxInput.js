import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionsCreators';
import textBoxInput from '../components/textBoxInput';

function mapStateToProps(state) {
    console.log(state)
    return {
		messages: state.messages
	}
} 

function mapDispatchProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(textBoxInput)