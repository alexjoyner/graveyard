import { FC, ReactNode } from 'react';
import { ConnectedComponentClass } from 'react-redux';

export interface AccountsInterface {
	SignInButton: FC;
	SignOutButton: FC;
}

export interface Credentials {
	username: string;
	password: string;
}

export type AccountsFeatureInterface = {
	AuthButton: ConnectedComponentClass<any, {}> | FC;
};
