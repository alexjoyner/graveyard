import * as p5 from 'p5';
export interface I_Physical{
    height: number,
    width: number,
    position: p5.PVector,
    velocity?: p5.PVector | 0,
    acceleration?: p5.PVector | 0
}
