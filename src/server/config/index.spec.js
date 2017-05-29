import express from 'express';
import {init} from './';

describe('App Config', () => {
	it('Should create all initialize all middleware', () => {
		init(express);
	});
});
