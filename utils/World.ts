import * as p5 from 'p5';
import {I_Physical, Phys_Object} from "./Object/Phys_Object";

export class World{
    private engine;
    private height;
    private width;
    constructor(info: I_Physical){
        this.engine = info.p5;
        this.height = info.height;
        this.width = info.width;
    }
    display(){
        this.engine.createCanvas(this.height, this.width);
    }
    public checkBoundaryColision(obj: Phys_Object){
        if (obj.x_pos() > this.width) {
            obj.setX_pos(this.width);
            obj.setX_vel(obj.x_vel() * -1)
        } else if (obj.x_pos() < 0) {
            obj.setX_vel(obj.x_vel() * -1);
            obj.setX_pos(0)
        }

        if (obj.y_pos() > this.height) {
            obj.setY_vel(obj.y_vel() * -1);
            obj.setY_pos(this.height);
        }else if (obj.y_pos() < 0) {
            obj.setY_vel(obj.y_vel() * -1);
            obj.setY_pos(0);
        }
    }
}
