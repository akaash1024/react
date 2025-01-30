import { useEffect } from "react";
import { useState } from "react"
import { deletePost, getPost } from "../api/PostApi";
import { Form } from "./Form";


export const Post = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState({});

    useEffect(() => {
        fetchPost()
    }, [pageNumber])

    const fetchPost = async () => {
        try {
            const res = await getPost(pageNumber);
            setPosts(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await deletePost(id);

            if (res.status === 200) {
                setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleEdit = (post) => setSelectedPost(post)

    const PostItem = ({ post }) => {
        const { id, title, body } = post;
        return (
            <>  
                <p>{id}</p>
                <h2>{title}</h2>
                <p>{body}</p>

                <button
                    onClick={() => handleDelete(id)}
                >Delete</button>

                <button
                    onClick={() => handleEdit(post)}
                >Edit</button>
            </>
        )
    }

    return (
        <>
            <div>
                <button
                    disabled={pageNumber === 0}
                    onClick={() => setPageNumber(prevNum => prevNum - 3)}
                >
                    Prev
                </button>
                {(pageNumber / 3) + 1}
                <button
                    onClick={() => setPageNumber(prevNum => prevNum + 3)}
                >
                    Next
                </button>
            </div>

            <Form
                posts={posts}
                setPosts={setPosts}
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
            />
            <ol>
                {
                    posts.map((post, index) => <PostItem key={`${post.id}-${index}`} post={post} />)
                }
            </ol>
        </>
    )





}