import React, { FormEvent } from 'react';
import { Input } from 'ro-component-library/Input';
import { Button } from 'ro-component-library/Button';
import { Block } from 'ro-component-library/Block';
import { Credentials } from '../types/accounts';

const SignInForm = ({ onSubmit }: { onSubmit: ({ }: Credentials) => void }) => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // @ts-ignore : because elements is hidden on e.target
        const { username, password } = e.target.elements;
        onSubmit({
            username: username.value,
            password: password.value,
        });
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                data-testid="code-form"
            >
                <Block margin="scale200">
                    <Input
                        id="username"
                        model="basic"
                        placeholder="Username"
                        overrides={{ Input: { props: { 'data-testid': 'username' } } }}
                        autoFocus
                    />
                </Block>
                <Block margin="scale200">
                    <Input
                        id="password"
                        type="password"
                        model="basic"
                        placeholder="Password"
                        overrides={{ Input: { props: { 'data-testid': 'password' } } }}
                    />
                </Block>
                <Block margin="scale200">
                    <Button
                        model="baseUI"
                        type="submit"
                        value="Submit"
                        data-testid="submit"
                    >
                        Submit
                    </Button>
                </Block>
            </form>
        </>
    );
};

export { SignInForm };
