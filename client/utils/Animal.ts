interface AnimalInterface {
    type: string,
    speed: number
}
class Animal {
    private speed: number;
    private type: string;
    constructor(info: AnimalInterface){
        this.speed = info.speed || 1;
        this.type = info.type || 'animal of unknown type'
    }
    public run(){
        return 'Your ' + this.type + ' ran at a speed of ' + this.speed;
    }
}
export {Animal};