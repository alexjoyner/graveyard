import * as p5 from 'p5';
import {Phys_Object} from "./Object/Phys_Object";

export class World{
    private gravity;
    private engine;
    private height;
    private width;
    constructor(info: {gravity: p5.Vector, height: number, width: number, p5: p5}){
        this.gravity = info.gravity;
        this.engine = info.p5;
        this.height = info.height;
        this.width = info.width;
    }
    display(){
        this.engine.createCanvas(this.height, this.width);
    }
    public applyEnvironmentEffects(obj: Phys_Object){
        let gravityEffect = p5.Vector.mult(this.gravity, obj.get_mass());
        obj.applyForce(gravityEffect);
    }
    public checkBoundaryColision(obj: Phys_Object){
        if (obj.getX_pos() > this.width) {
            obj.setX_pos(this.width);
            obj.setX_vel(obj.getX_vel() * -0.5)
        } else if (obj.getX_pos() < 0) {
            obj.setX_vel(obj.getX_vel() * -0.5);
            obj.setX_pos(0)
        }

        if (obj.getY_pos() > this.height) {
            obj.setY_vel(obj.getY_vel() * -0.5);
            obj.setY_pos(this.height);
        }else if (obj.getY_pos() < 0) {
            obj.setY_vel(obj.getY_vel() * -0.5);
            obj.setY_pos(0);
        }
    }
}
