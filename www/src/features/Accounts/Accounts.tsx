import { AccountsFeatureInterface } from './types/accounts';

// Exported From Feedback Feature Folder
class AccountsFeature extends DashFeature {
	constructor(App: Dash) {
		super(App);
		const Feature: AccountsFeatureInterface = {
			AuthButton: AuthButton
		};
		this.setFeature('Accounts', Feature);
	}
}
