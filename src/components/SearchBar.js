import React from 'react';

class SearchBar extends React.Component {
    render() {
        return <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Search Images</label>
                    <input type="text" placeholder="Search..." />
                </div>
            </form>
        </div>
    };
}

export default SearchBar;