import axios from 'axios';

const loginUser = async (username, password) => {
    try
    {
        // Make a request to the login endpoint
        const response = await axios.post('http://localhost:8080/authenticate', {
            username,
            password,
        });

        // Extract the token from the response
        const { token } = response.data;

        // Save the token in local storage
        localStorage.setItem('token', token);

        return response;
    }
    catch (error)
    {
        console.error("Error during login", error);
        throw error;
    }
};

export default loginUser();
