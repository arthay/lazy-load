import axios from 'axios';

export default axios.create({
    baseURL: `http://developers14.net/api/v2`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    }
});
