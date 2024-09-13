import axios from 'axios';

const cookieApi = '/sanctum/csrf-cookie';
const domainBaseUrl = process.env.REACT_APP_API_DOMAIN_PATH || 'http://localhost';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: `${domainBaseUrl}/api/`,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

// Request interceptor to fetch CSRF token and attach the auth token
axiosInstance.interceptors.request.use(
    async (config) => {
        // Fetch CSRF token if not already fetching from /sanctum/csrf-cookie
        if (config.url && ![cookieApi, '/login'].includes(config.url)) {
            try {
                // Fetch CSRF token
                await axios.get(`${domainBaseUrl}${cookieApi}`, { withCredentials: true });
            } catch (error) {
                console.error('Failed to fetch CSRF token:', error);
                // Handle error or redirect user if needed
            }
        }

        // Attach auth token to headers if it exists
        const token = document.cookie
            .split('; ')
            .find((row) => row.startsWith('auth_token='))
            ?.split('=')[1];

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        console.error('Request Error => ', error);
        return Promise.reject(error);
    }
);

// Response interceptor to store the auth token in cookies
axiosInstance.interceptors.response.use(
    (response) => {
        const token = response.data.access_token;
        if (token) {
            document.cookie = `auth_token=${token}; path=/; SameSite=Lax; Secure`;
        }
        return response;
    },
    (error) => {
        console.error('API ERROR => ', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
