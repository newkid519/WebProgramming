import moment from "moment"
import sha1 from "js-sha1"

// does it work? https://stackoverflow.com/a/50427028
import $ from 'jquery'; 
window.jQuery = $;
window.$ = $;

export function getSha1(s) { return `${new Date().toString()}  ${sha1(s)};`}