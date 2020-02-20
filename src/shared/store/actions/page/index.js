import http from '../../../http';
import { ADD_PAGE } from "./types";


export async function getPage(alias) {
    try {
        const response = await http.get(`/rest/page/page?path=${alias}`);

        return response.data.page;
    } catch (e) {
        window.location = `http://my-accounts.ucraft.net/#/login?redirectTo=${window.location}`;
    }
}


export function addPage(page) {
    return {
        type: ADD_PAGE,
        payload: {
            page
        }
    }
}