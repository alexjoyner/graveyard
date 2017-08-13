import {I_Physical, Phys_Object} from "../Phys_Object";


export class Ball extends Phys_Object {
    constructor(info: I_Physical) {
        super(info);
    }

    public display(): void {
        this.p5.ellipse(
            this.position.x,
            this.position.y,
            this.height,
            this.width
        )
    }

}
