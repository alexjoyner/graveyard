import {Component, Input, Output, EventEmitter} from 'angular2/core';
declare function require(name: string);

@Component({
    selector: 'mt-post',
    template: require('dev/components/shared/post/post.tpl.html'),
    directives: []
})
export class PostComponent {}