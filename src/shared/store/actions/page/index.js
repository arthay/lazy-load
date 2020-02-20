import http from '../../../http';
import { ADD_PAGE } from "./types";


export async function getPage(alias) {
    try {
        return  await http.get(`/page/${alias}`);
    } catch (e) {

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