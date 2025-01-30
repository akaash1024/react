import { useEffect, useState } from "react";
import { postPost, updatePost } from "../api/PostApi";


export const Form = (props) => {
    const { posts, setPosts, selectedPost, setSelectedPost } = props;
    
    const initialState = {title: ``, body: ``}

    const [formData, setFormData] = useState(initialState)

    const isEditMode = Object.keys(selectedPost).length > 0;

    useEffect(() => {
        if (selectedPost) {
            setFormData({
                title: selectedPost.title || ``,
                body: selectedPost.body || ``
            })
        }
    }, [selectedPost])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleUpdate = async () => {
        try {
            const res = await updatePost(selectedPost.id, formData);

            if (res.status === 200) {
                setPosts(prevPosts => prevPosts.map(post =>
                    post.id === res.data.id ? res.data : post
                ))
            }

            setFormData(initialState)
            setSelectedPost({})

        } catch (error) {
            console.error(error)
        }
    }
    

    const handlePost = async () => {
        try {
            const res = await postPost(formData);
            if (res.status === 201) {
                setPosts([res.data, ...posts]);
                setFormData(initialState);
            }

        } catch (error) {
            console.error(error)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        isEditMode ? handleUpdate() : handlePost();
    }

    return (

        <form onSubmit={handleFormSubmit}>

            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="body"
                value={formData.body}
                onChange={handleInputChange}
            />

            <button>
                {isEditMode ? `Edit` : `Add`}
            </button>
        </form>
    )
}