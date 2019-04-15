import React from 'react';
import { Button } from 'ro-component-library/Button';

export const SignInButton = ({ onClick }: { onClick: () => void }) => (
    <Button
        size="compact"
        onClick={onClick}
    >
        <span>Sign In</span>
    </Button>
);