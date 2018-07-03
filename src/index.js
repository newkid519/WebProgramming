import moment from "moment"
import sha1 from "js-sha1"

// does it work? https://stackoverflow.com/a/50427028
import $ from 'jquery'; 
window.jQuery = $;
window.$ = $;
console.log(sha1(""));