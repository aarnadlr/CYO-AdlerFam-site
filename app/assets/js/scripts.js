/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
// (function ($, window, document, undefined) {

//   'use strict';

//   $(function () {
//     // FastShell

//   });

// })(jQuery, window, document);

// console.log('hee');




//Pull in RADIO BUTTONS
var checkBeach = document.querySelector('#checkBeach');
var checkStreet = document.querySelector('#checkStreet');

//Pull in CHECKBOXES
var checkTomCruiseOld = document.querySelector('#checkTomCruiseOld');
var checkTomCruiseYoung = document.querySelector('#checkTomCruiseYoung');


//Pull in IMAGES
var beach = document.querySelector('#beach');
var street = document.querySelector('#street');
var tomCruiseOld = document.querySelector('#tomCruiseOld');
var tomCruiseYoung = document.querySelector('#tomCruiseYoung');

beach.style.opacity = 0;
street.style.opacity = 0;
tomCruiseOld.style.opacity = 0;
tomCruiseYoung.style.opacity = 0;


function beachFn(){
  // BEACH checkbox
  if(checkBeach.checked){
    beach.style.opacity = 1;
    street.style.opacity = 0;
    checkStreet.checked = false;
  }else{
    beach.style.opacity = 0;
  }

}

function streetFn(){
  //STREET checkbox
  if(checkStreet.checked){
    street.style.opacity = 1;
    beach.style.opacity = 0;
    checkBeach.checked = false;
  }else{
    street.style.opacity = 0;
  }
}


function tomCruiseOldFn(){
  //TOMCRUISEOLD checkbox
  if(checkTomCruiseOld.checked){
    tomCruiseOld.style.opacity = 1;
    tomCruiseYoung.style.opacity = 0;
    checkTomCruiseYoung.checked = false;
  }else{
    tomCruiseOld.style.opacity = 0;
  }
}

function tomCruiseYoungFn(){
  if(checkTomCruiseYoung.checked){
    tomCruiseYoung.style.opacity = 1;
    tomCruiseOld.style.opacity = 0;
    checkTomCruiseOld.checked = false;
    // window.checkTomCruiseYoung = null;
  }
  else{
    tomCruiseYoung.style.opacity = 0;
  }

}