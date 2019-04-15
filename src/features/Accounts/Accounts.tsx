import { AccountsFeatureInterface } from './types/accounts';
import { DashBoard } from '../../pages/DashBoard/DashBoard';
import { AuthButton } from './public/AuthButton';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { reducer } from './ducks/accounts.duck';

export class AccountsFeature extends AppFeature {
	constructor(App: DashBoard) {
		super(App);
		const Feature: AccountsFeatureInterface = {
			AuthButton: AuthButton
		};
		this.setFeatureSettings('Accounts', Feature);
		this.setReducerSettings({
			Accounts: reducer
		});
	}
}
