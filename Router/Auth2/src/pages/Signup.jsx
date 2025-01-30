import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }



        

        // Store user data (in a real app, this would be handled by your backend)
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = existingUsers.some(user => user.email === email);

        if (userExists) {
            setError('User already exists');
            return;
        }

        existingUsers.push({ email, password });
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Log the user in after successful signup
        login({ email });
        navigate('/product');
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                {error && <div className="error">{error}</div>}
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        autoComplete='new-password'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                        autoComplete='new-password'
                    />
                </div>
                <button type="submit">Sign Up</button>
                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
};