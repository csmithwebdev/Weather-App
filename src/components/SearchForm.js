import React from 'react';


class SearchForm extends React.Component {

	state = {term: '' };

	userInput = (event) => { /*Step 4.*/
		this.setState({term: event.target.value});
	};

	userSubmit = (event) => {
		event.preventDefault();
		this.props.zipCode(this.state.term);

	};



	render() {

		return (
			<div className="container">
				<form onSubmit={this.userSubmit}>
					<label className="form-label" style={{marginTop: '20px'}} >Zip Code:</label>
					<input 
					className="form-control" 
					type="text" 
					value={this.state.term}
					onChange={this.userInput}
					/>

				</form>
			</div>
		);		
	}
}

export default SearchForm;