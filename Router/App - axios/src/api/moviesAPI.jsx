import axios from "axios";


const api = axios.create({
    baseURL:`https://www.omdbapi.com`,
})

export const getMoviesAPIcall = () => {
    return api.get(`/?i=tt3896198&apikey=61c584d6&s=titanic&page=1`)
}

export const getMovieAPIcall = (movieID) => {
    return api.get(`/?i=${movieID}&apikey=61c584d6`)
}

