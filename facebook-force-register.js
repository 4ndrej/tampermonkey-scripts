// ==UserScript==
// @name           Facebook: Disable Facebook force register box
// @namespace      https://loremipsum.org/facebook
// @description    This script removes the annoying force regicter box for non-facebook users

// @include        *.facebook.*/*
// @run-at         document-end

// @author         https://pastebin.com/6YBe7CUv
// @version        1.0
// @lastupdated    2017.12.21
// @grant          GM_addStyle
//
// ==/UserScript==
//-------------------------------------------------------------------------------------------------------------------

(function() {
    'use strict';
    GM_addStyle ("#pagelet_growth_expanding_cta { display: none !important; }");
    GM_addStyle ("#headerArea { display: none !important; }");
    GM_addStyle (".generic_dialog.pop_dialog.generic_dialog_modal { display: none !important; }");
})();
