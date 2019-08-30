import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addValue, subtractValue } from './actions/index';
import './styles/style.css';

import Navigator from './components/Navigator';
import Displayer from './components/Displayer';
import Button from './components/Button';

class App extends React.Component {
	constructor(props) {
		super(props);
	
		// Set the state directly. Use props if necessary.
		this.state = {
			value: 0,
		}
	}

	handleAdd = () => {
		this.props.addAValue();
	}

	handleSubtract = () => {
		this.props.subtractAValue();
	}

	render() {
		console.log(this.props.value);
		return (
			<div>
				<Navigator />
				<main role="main" className="container">
					<div className="row"> 
						<Displayer value={this.props.value}/>
						<Button buttonName="+ Add Value"  handler={this.handleAdd}/>
						<Button buttonName="- Subtract Value" handler={this.handleSubtract} />
					</div>
				</main>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const returnValue = {
		value : state.value
	};
	return returnValue;
}

function mapDispatchToProps(dispatch) {
	console.log(dispatch);
	return {
		addAValue: bindActionCreators(addValue, dispatch),
		subtractAValue : bindActionCreators(subtractValue, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);