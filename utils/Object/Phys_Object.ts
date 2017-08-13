import {I_Physical} from "./I_Physical";

export abstract class Phys_Object{
    protected physProps: I_Physical;
    constructor(physProps: I_Physical){
        this.physProps = physProps;
    }
    abstract display(p5: any): void;
    abstract move(p5: any): void;
    public setX_pos(newX: number): void{
        this.physProps.position.x = newX;
    }
    public setY_pos(newY: number): void{
        this.physProps.position.y = newY;
    }
}
