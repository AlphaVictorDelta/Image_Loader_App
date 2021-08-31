import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Xs4TcuNybMjNVs4DYXyL9wQt31-0peO0UbxtLJPGo6c",
    },
});
