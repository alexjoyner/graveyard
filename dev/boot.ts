import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {LoggingService} from './services/logging.service';

bootstrap(AppComponent, [LoggingService]);