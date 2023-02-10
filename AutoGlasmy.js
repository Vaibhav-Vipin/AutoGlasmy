// ==UserScript==
// @name        AutoGlasmy
// @namespace   Violentmonkey Scripts
// @match       https://www.glasmy.com/*
// @grant       none
// @version     1.0
// @author      Vaibhav
// @description 5/2/2023, 1:31:16 pm
// ==/UserScript==

//clear();
// window.onload = function(){
  A = document.getElementsByTagName("ol")[0].querySelectorAll('*')[5];
  B = A.href
  //B.click();
  //console.log(B);
  window.open(B,"_self");
// }