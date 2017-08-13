import {I_Physical} from "./I_Physical";

export abstract class Phys_Object{
    protected physProps: I_Physical;
    constructor(physProps: I_Physical){
        this.physProps = physProps;
    }
    abstract draw(p5: any): void;
    abstract update(p5: any): void;

}
