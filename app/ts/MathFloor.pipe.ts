/**
 * Created by ronald8192 on 8/12/16.
 *
 * not used. for angular 2.0.0-rc.5
 */
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Call `Math.floor()` by pipe
 * Usage:
 *   value | floor
 * Example:
 *   {{ 2.56 |  floor}}
 *   output: 2
 */
@Pipe({name: 'floor'})
export class FloorPipe implements PipeTransform {
    transform(value: number): number {
        return Math.floor(value);
    }
}