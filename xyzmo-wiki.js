// ==UserScript==
// @name         xyzmo wiki TOC font size
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://partner.xyzmo.com/projects/*
// @grant        GM_addStyle

// ==/UserScript==

(
    function() {
        'use strict';
        GM_addStyle ("div.wiki ul.toc { font-size: 15px;}");
        GM_addStyle ("div.wiki ul.toc li { font-size: 15px;}");
        GM_addStyle ("div.wiki ul.toc li li { font-size: 15px;}");
        GM_addStyle ("div.wiki ul.toc a { font-size: 15px;}");
    })();
