import {Component} from "angular2/core";
declare function require(name: string);

@Component({
    'selector': 'follow-button',
    'template': require('dev/components/shared/follow-button/follow-button.tpl.html')
})

export class FollowButtonComponent{




    follow() {
        console.log('trying to follow a post ...');
    }
}