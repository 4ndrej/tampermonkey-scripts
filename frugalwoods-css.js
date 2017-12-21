// ==UserScript==
// @name         frugalwoods css
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.frugalwoods.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle (".entry .wp-caption-text { color: #000; font-size: 15px; font-style: normal;}");
    GM_addStyle ("body { color: #000;}");
    // Your code here...
})();
