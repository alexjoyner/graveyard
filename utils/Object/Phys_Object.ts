import * as p5 from 'p5';
export interface I_Physical{
    p5: p5,
    height: number,
    width: number,
    mass: number,
    position: p5.PVector,
    velocity?: p5.PVector | 0,
    acceleration?: p5.PVector | 0
}
export abstract class Phys_Object{
    protected p5: any;
    protected height: number;
    protected width: number;
    protected mass = 10;
    protected position: p5.Vector;
    protected velocity: p5.Vector;
    protected acceleration: p5.Vector;

    constructor(info: I_Physical){
        this.p5 = info.p5;
        this.height = info.height;
        this.width = info.width;
        this.mass = info.mass;
        this.position = info.position || info.p5.createVector(0,0);
        this.velocity = info.velocity || info.p5.createVector(0,0);
        this.acceleration = info.acceleration || info.p5.createVector(0,0);
    }
    abstract display(): void;
    public x_pos(): number{return this.position.x};
    public y_pos(): number{return this.position.y};
    public x_vel(): number{return this.velocity.x};
    public y_vel(): number{return this.velocity.y};
    public x_accel(): number{return this.acceleration.x};
    public y_accel(): number{return this.acceleration.y};
    public setX_pos(newX: number): void{
        this.position.x = newX;
    }
    public setY_pos(newY: number): void{
        this.position.y = newY;
    }
    public setX_vel(newX_vel: number): void{
        this.velocity.x = newX_vel;
    }
    public setY_vel(newY_vel: number): void{
        this.velocity.y = newY_vel;
    }

    public move(): void {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.acceleration.mult(0);
        this.display();
    }
    public applyForce(forceV: p5.Vector){
        let addedAcceleration = p5.Vector.div(forceV, this.mass);
        this.acceleration.add(addedAcceleration);
    }
}
