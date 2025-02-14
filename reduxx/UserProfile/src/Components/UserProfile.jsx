import { useDispatch, useSelector } from 'react-redux'

import { reset, update } from '../store';
import { useState } from 'react';




export const UserProfile = () => {
    const user = useSelector((state) => state)
    console.log('is loagging from here',user);

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        age: user.age
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(update(formData.name, formData.email, formData.age))
    }

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <>
            <h1>User Prolile Management</h1>

            <p>Curret User Info:</p>

            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="age"></label>
                <input
                    type="number"
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                />


                <button type='submit'>Update User</button>
                <button
                    type='button'
                    onClick={handleReset}
                >Reset</button>
            </form>
        </>
    )
}