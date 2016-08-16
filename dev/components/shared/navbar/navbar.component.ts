import {PostsService} from "../../../ts/shared/net-services/posts.service";
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {AuthService} from '../../../ts/shared/net-services/auth.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';
import {DropdownComponent} from "../../misc/dropdown/dropdown.directive";
import {CreateQuestionFormComponent} from "../../forms/create-question-form/create-question-form.component";
import {NotificationsService} from "../../../ts/shared/net-services/notifications.service";
@Component({
    selector: 'ro-navbar',
    template: require('./navbar.tpl.html'),
    directives: [ROUTER_DIRECTIVES, DropdownComponent, CreateQuestionFormComponent, ROUTER_DIRECTIVES],
    providers: [AuthService, PostsService, NotificationsService],
    styles: [require('./_navbar.sass')]
})
export class NavbarComponent {
    private email:string;
    private dataSearched:any = null;
    private notifications:any = [];
    private showNotifs:boolean = false;
    private header: string = 'MetaTruth Alpha.11.7';

    constructor(private _authService:AuthService,
                private _usersService:UsersService,
                private _postsService:PostsService,
                private _notifService:NotificationsService,
                private _router:Router) {
        this.getNotifs();
    }

    getNotifs() {
        if (this._authService.checkTokenExists(true)) {
            this._notifService.getAllMyNotifs().subscribe(
                data => {
                    this.notifications = data;
                    console.log('notifications.length > 0: ', this.notifications.length > 0)
                }
            );
        }
    }
    goTo(route: string){
        let link = ['/'+route];
        this._router.navigate(link);
    }
    auth():boolean {
        if (this._usersService.profile) {
            this.email = this._usersService.profile.email;
        }
        return (localStorage.getItem('token') !== null) || null;
    }

    logout() {
        this._authService.logout();
    }

    /* Search filter function to filter out questions*/
    searchStuff(searchValue:string) {
        let searchString = (searchValue) ? searchValue : '';
        //					(type: number, searchtext: string)
        this._postsService.searchPosts(1, searchString)
            .subscribe(data => {
                    console.log(data);
                    this.dataSearched = (data.length > 0) ? data : null;
                },
                err => console.log('ERROR: ', err));
    }

    routeToPost(question_id:number) {
        console.log('Routing away');
        let link = ['/question', question_id];
        this._router.navigate(link);
        this.dataSearched = null;
    }

    readNotif(notif_id:number) {
        for (var i = 0; i < this.notifications.length; i++) {
            console.log(this.notifications[i].notif_id +' '+ notif_id)
            if (this.notifications[i].notif_id === notif_id) {
                this.notifications.splice(i, 1);
            }
        }
        this._notifService.readNotif(notif_id).subscribe(
            data => {

            },
            err => {
                console.log('Err: ', err);
            }
        );
    }

    toggleShowNotifs() {
        if (this.notifications.length > 0) {
            this.showNotifs = !this.showNotifs;
        } else {
            this.showNotifs = false;
        }
    }
}