import React from 'react';
1;
import { AccountsFeatureInterface } from './types/accounts';
import { DashFeature, DashBoard } from '../../pages/DashBoard/DashBoard';
import { AuthButton } from './public/AuthButton/AuthButton';
import { UserName } from './public/AccountInfo/UserName';

// Exported From Feedback Feature Folder
export class AccountsFeature extends DashFeature {
	constructor(App: DashBoard) {
		super(App);
		const Feature: AccountsFeatureInterface = {
			AuthButton: AuthButton,
			AccountInfo: {
				UserName
			}
		};
		this.setFeature('Accounts', Feature);
	}
}
