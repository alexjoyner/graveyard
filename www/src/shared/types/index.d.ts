import './modules/baseui';

declare module 'ro-component-library';

export type Action = (credentials: Credentials) => (dispatch: Dispatch<AnyAction>) => Promise<any>;