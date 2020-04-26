import {ClientFunction} from 'testcafe'
export const BASE_URL = 'http://ip-5236.sunline.net.ua:38015/'

export default class Base {
    createUrl(path){
        return BASE_URL+path
    }
    getCurrentUrl = ClientFunction(() => window.location.href);
}