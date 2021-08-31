import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

// const App = () => {
//     return (
//         <div className="ui container" style={{ marginTop: '10px' }}>
//             <SearchBar />
//         </div>
//     );
// };

// Convert above function to a class component.
class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        // term is reference that is passed from the child 'SearchBar' to the parent 'App'
        // Documentation for unsplash = https://unsplash.com/documentation
        const response = await axios
            .get("https://api.unsplash.com/search/photos", {
                params: { query: term },
                headers: {
                    Authorization:
                        "Client-ID Xs4TcuNybMjNVs4DYXyL9wQt31-0peO0UbxtLJPGo6c",
                },
            });
        // This is the older and much complicated version. We can use async keyword to do the same thing.
        // .then((response) => {
        //     console.log(response.data.results);
        // });
        console.log(this);
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images.
            </div>
        );
    }
}

export default App;
