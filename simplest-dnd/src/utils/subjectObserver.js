// Observer Pattern
export class Subject {
    constructor(){
        this.observers = [];
    }
    subscribeObserver = (observer) => {
        this.observers.push(observer);
    };
    unsubscribeObserver = (observer) => {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    notifyObserver = (observer) => {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers[index].notify(index);
        }
    };
    notifyAllObservers = () => {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].notify();
        }
    }
}