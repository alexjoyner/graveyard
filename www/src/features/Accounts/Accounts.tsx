import { AccountsFeatureInterface } from './types/accounts';
import { DashBoard } from '../../pages/DashBoard/DashBoard';
import { AuthButton } from './public/AuthButton/AuthButton';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { reducer } from './ducks/accounts.duck';

export class AccountsFeature extends AppFeature<DashFeatures> {
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
