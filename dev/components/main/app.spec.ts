import {
    beforeEachProviders,
    inject,
    it
} from '@angular/core/testing';
import {AppComponent} from "./app.component";

// Load the implementations that should be tested

describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        AppComponent
    ]);

    it('should have a url', inject([ App ], (app) => {
        expect(app.url).toEqual('https://twitter.com/AngularClass');
    }));

});
