import { Component } from '@angular/core';
import { AppTopbar } from './layout/app.topbar';
import { AppFooter } from './layout/app.footer';
import { RouterModule } from '@angular/router';
import { Logger, LoggerService } from './core/services/logger.service';

@Component({
  selector: 'app-root',
  imports: [AppTopbar, AppFooter, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private logger;
  constructor(private loggerService: LoggerService) {
    this.logger = loggerService.getLogger(AppComponent.name);
    this.logger.debug('constructor called');
  }

  ngOnInit() {
    this.logger.info('ngOnInit called');
  }
}
