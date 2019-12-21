import { FC, ReactNode } from 'react';

export interface AccountsInterface {
	SignInButton: FC;
	SignOutButton: FC;
}

export interface Credentials {
	username: string;
	password: string;
}

export type AccountsFeatureInterface = {
	AuthButton: FC<any> | FC;
};
