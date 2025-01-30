import axios from "axios"


const api = axios.create({
    baseURL:`https://jsonplaceholder.typicode.com`
})

export const getPost = (pageNumber) => {
    return api.get(`/posts?_start=${pageNumber}&_limit=3`)
    // return api.get(`/posts`)
}

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

export const postPost = (post) => {
    return api.post(`/posts`, post)
}
export const updatePost = (id, post) => {
    return api.put(`/posts/${id}`, post)
}
