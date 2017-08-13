import {Phys_Object} from "../Phys_Object";
import {I_Physical} from "../I_Physical";


export class Ball extends Phys_Object{
    constructor(info: I_Physical){
        super(info);
    }
    public draw(p5: any): void{
        p5.ellipse(
            this.physProps.position.x,
            this.physProps.position.y,
            this.physProps.height,
            this.physProps.width
        )
    }
    public update(p5: any): void {
        this.physProps.position.add(
            this.physProps.velocity
        );
        this.physProps.velocity.add(
            this.physProps.acceleration
        );
        this.physProps.position.x = p5.constrain(
            this.physProps.position.x,
            0, 400
        );
        this.physProps.position.y = p5.constrain(
            this.physProps.position.y,
            0, 400
        );
    }

}
