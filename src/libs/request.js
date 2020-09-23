import { serialize } from './util'
/**
 * 
 * @param {*} url 形如https://www.shi.com/api
 * @param {*} queryParam 形如{a:1,b:2}
 */
export function get(apiUrl, queryParam) {
    let url = apiUrl + serialize(queryParam)
    return fetch(url);
}

export function post() {

}