// import {Injectable} from '@angular/core';
// import {WINDOW} from "./window.service";
//
//
// @Injectable()
//
// /* Injectable service to allow the user to smoothly scroll to an id programmatically*/
// export class SmoothScroll{
//   win: Window;
//   constructor(
//      private _win: WINDOW) {
//     this.win = _win.nativeWindow;
//   };
//   scrollTo(yPoint: number, duration: number) {
//     setTimeout(() => {
//       this.win.window.scrollTo(0, yPoint)
//     }, duration);
//     return;
//   }
//
//   /* Call this function with an element ID to initiate a smooth scroll*/
//   smoothScroll(eID, offset: number) {
//     var startY = currentYPosition();
//     var stopY = (elmYPosition(eID) - offset);
//     var distance = stopY > startY ? stopY - startY : startY - stopY;
//     if (distance < 100) {
//       this.win.window.scrollTo(0, stopY); return;
//     }
//     let timesFactor = 2;
//     var speed = Math.round(distance / (100 * timesFactor));
//     if (speed >= 20) speed = 20;
//     var step = Math.round(distance / 100);
//     var leapY = stopY > startY ? startY + step : startY - step;
//     var timer = 0;
//     console.log('startY: ', startY);
//     console.log('stopY: ', stopY);
//     console.log('distance: ', distance);
//     console.log('speed: ', speed);
//     if (stopY > startY) {
//       for (var i = startY; i < stopY; i += step) {
//         this.scrollTo(leapY, timer * speed);
//         leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//       } return;
//     }
//     for (var i = startY; i > stopY; i -= step) {
//       this.scrollTo(leapY, timer * speed);
//       leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//     }
//   }
// }
//
// /*
//   External functions
// */
// function currentYPosition() {
//   // Firefox, Chrome, Opera, Safari
//   if (self.pageYOffset) return self.pageYOffset;
//   // Internet Explorer 6 - standards mode
//   if (document.documentElement && document.documentElement.scrollTop)
//     return document.documentElement.scrollTop;
//   // Internet Explorer 6, 7 and 8
//   if (document.body.scrollTop) return document.body.scrollTop;
//   return 0;
// }
// function elmYPosition(eID) {
//   var elm:any = document.getElementById(eID);
//   var y = elm.offsetTop;
//   var node:any = elm;
//   while (node.offsetParent && node.offsetParent != document.body) {
//     node = elm.offsetParent;
//     y += node.offsetTop;
//   } return y;
// }