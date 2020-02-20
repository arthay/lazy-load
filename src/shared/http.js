import axios from 'axios';

export default axios.create({
    baseURL: `http://developers14.ucraft.net`,
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    }
});
