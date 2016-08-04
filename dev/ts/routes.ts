import {HomeContainerComponent} from "../components/containers/home-container/home-container.component";
import {QuestionContainerComponent} from "../components/containers/question-container/question-container.component";
import {AuthContainerComponent} from "../components/containers/auth-container/auth-container.component";
import {provideRouter} from "@angular/router";
const APP_ROUTES = [
    {path: '', component: HomeContainerComponent},
    {path: 'question/:id', component: QuestionContainerComponent},
    {path: 'auth', component: AuthContainerComponent}
];

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
]


/*
*
*
*
*
* /*
 Configuring the routes for our application
 ------------------------------------------
@RouteConfig([
    { path: '/', name: 'Home', component: HomeContainerComponent, useAsDefault: true },
    { path: '/Question/:id', name: 'Question', component: QuestionContainerComponent },
    { path: '/Auth', name: 'Auth', component: AuthContainerComponent }
])*/