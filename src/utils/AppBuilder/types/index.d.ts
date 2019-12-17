import { Reducer } from 'redux';

export interface ReducersObject {
    [key: string]: Reducer
}
export interface GenericFeatures {
    [key: string]: any;
}