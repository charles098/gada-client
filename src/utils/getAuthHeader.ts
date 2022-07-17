import { useCookies } from 'react-cookie';

const getAuthHeader = () => {
    const [cookies] = useCookies(['accessToken']);
    const { accessToken } = cookies;
    
    const headers = {
        Authorization: `Bearer ${cookies.accessToken}`,
    }

    return headers;
}

export default getAuthHeader;