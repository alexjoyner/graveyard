"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phys_Object_1 = require("../Phys_Object");
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(info) {
        return _super.call(this, info) || this;
    }
    Ball.prototype.display = function () {
        this.p5.ellipse(this.position.x, this.position.y, this.height, this.width);
    };
    return Ball;
}(Phys_Object_1.Phys_Object));
exports.Ball = Ball;
