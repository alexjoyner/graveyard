import React from 'react';
import { AccountsInterface } from './types/accounts'

const Button = ({ children }:{ children: string }) => {
  return <button>{children}</button>
}

export class Accounts implements AccountsInterface {
  SignInButton(){
    return <Button>Sign In</Button>
  }
  SignOutButton(){
    return <Button>Sign Out</Button>
  }
}