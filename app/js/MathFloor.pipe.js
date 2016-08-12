"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by ronald8192 on 8/12/16.
 *
 * not used. for angular 2.0.0-rc.5
 */
var core_1 = require('@angular/core');
/*
 * Call `Math.floor()` by pipe
 * Usage:
 *   value | floor
 * Example:
 *   {{ 2.56 |  floor}}
 *   output: 2
 */
var FloorPipe = (function () {
    function FloorPipe() {
    }
    FloorPipe.prototype.transform = function (value) {
        return Math.floor(value);
    };
    FloorPipe = __decorate([
        core_1.Pipe({ name: 'floor' }), 
        __metadata('design:paramtypes', [])
    ], FloorPipe);
    return FloorPipe;
}());
exports.FloorPipe = FloorPipe;

//# sourceMappingURL=MathFloor.pipe.js.map
