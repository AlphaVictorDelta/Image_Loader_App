import React from "react";

class SearchBar extends React.Component {
  // This is a callback function that is called when the user types in the search bar.
  // Making use of state so this function is no longer needed.
  // onInputChange(event) {
  //     console.log(event.target.value);
  // }

    // This is a callback function that is called when the user submits the form.
    // We want to prevent this default behaviour. we dont want the form to submit when the user presses enter.
    onFormSubmit = (event) => {
        event.preventDefault();
        // Sending search term from child to parent 'App.js'!!
        // Explanation: Whenever the user submits the form,
        // the SearchBar component is going to call the callback inside the App component with whatever search term the user entered.
        this.props.onSubmit(this.state.term);
    }

    state = { term: "" };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Images</label>
                        {/* When we pass a method to a prop like this,
                        We do not put a set of parentheses to an event handler like onChange. 
                        If you put it, then the method will be called every time the component is rendered.
                        By leaving of the parentheses, we are passing a reference to this event function.*/}
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
