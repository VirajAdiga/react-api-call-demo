import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const URL_PATH = "search/photos";
const API_KEY = process.env.REACT_APP_API_KEY;

async function searchImages(searchTerm){
    const response = await axios.get(BASE_URL + URL_PATH, {
        headers: {
            Authorization: "Client-ID " + API_KEY
        },
        params: {
            query: searchTerm
        }
    });
    return response.data.results;
}

export default searchImages;