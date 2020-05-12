import express from 'express';
let app = express.Router();
import {configRoutes} from './';

describe('Routes config', () => {
	it('Should initialize all te base routes', () => {
		configRoutes(express, app, '.');
	});
});
