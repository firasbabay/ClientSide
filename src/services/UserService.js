import axios from 'axios';

class UserService {
    static BASE_URL = "http://localhost:9100";

    static async signin(username, password) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/api/v1/auth/signin`, { username, password });
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error("Server responded with error status:", error.response.status);
                console.error("Response data:", error.response.data);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
               
                console.error("No response received from server:", error.request);
            } else {

                console.error("Error setting up request:", error.message);
            }
            throw new Error("Failed to login. Please try again later.");
        }
    }
}
export default UserService;