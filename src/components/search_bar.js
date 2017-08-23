import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props);		
		this.state = { term: '' };
	}
	//the component renders with an empty string as the inital value of the state.term//'starting value'
	//if value of the input is provided by this.state.term
	//it becomes a controlled component
	//a controlled component has its value set by state
	render() {
		return (
			<div className="search-bar">				
				<input 
				//this.setState() causes the component to rerender
				//when it rerenders, the value of the input is set to the state
				value = { this.state.term }
				//when the user enters some text, state.term is set equal to the changed text value
				//the value of the input has not changed at this point in time (when the event handler runs)
				//whenever setState() is called, the component rerenders
				//when the component finishes rerendering, the new value of the input is visible on the screen
				//whenever the user types smth, they do not change the input value
				//they only trigger an event (!) onChange
				//state.term is equal to the input, setState() rerenders the component, value equal to state.term
				//Value of the input: { this.state.term }
				onChange={event => this.onInputChange(event.target.value)} />
				
			</div>	
		);		
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}	
}