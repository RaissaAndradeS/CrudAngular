import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platform } from 'node:os';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
