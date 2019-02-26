export class ISocketIO {
  constructor() {
    if (this.subscribe === undefined) { throw new TypeError('Must override method'); }
    if (this.unsubscribe === undefined) { throw new TypeError('Must override method'); }
    if (this.join === undefined) { throw new TypeError('Must override method'); }
  }
}
