import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

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
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
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
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
