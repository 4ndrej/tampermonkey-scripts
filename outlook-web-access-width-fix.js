// ==UserScript==
// @name         owa visual fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://[full.target.hostname.here]/owa/*
// @grant        GM_addStyle

// ==/UserScript==

(
    function() {
        'use strict';
        console.debug('start: _lvv_c');
        GM_addStyle ("div._lvv_c { width: 800px;}");
        console.debug('stop: _lvv_c');
    })();
