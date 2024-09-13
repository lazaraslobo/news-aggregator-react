import type {LoginPayload} from "../redux/auth/dataTypes"
import axiosInstance from "../helpers/axiosSetup";

export const handleApiRequest = async <T>(apiFunction: () => Promise<T>): Promise<T | null> => {
    try {
        const response = await apiFunction();
        return response;
    } catch (error) {
        console.error("API request error:", error);
        return null;
    }
};

export const post_logUserIn = async ({ userEmail, userPassword }: LoginPayload) => {
    return handleApiRequest(() =>
        axiosInstance.post('/login', { email: userEmail, password: userPassword })
    );
};

export const get_userInfo = async () => {
    return handleApiRequest(() => axiosInstance.get('/user'));
};
