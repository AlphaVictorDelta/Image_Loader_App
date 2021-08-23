import React from 'react';
import SearchBar from './SearchBar';

// const App = () => {
//     return (
//         <div className="ui container" style={{ marginTop: '10px' }}>
//             <SearchBar />
//         </div>
//     );
// };

// Convert above function to a class component.
class App extends React.Component {

    onSearchSubmit(term) {
        // term is reference that is passed from the child 'SearchBar' to the parent 'App'.
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;