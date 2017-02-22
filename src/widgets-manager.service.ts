import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';

@Injectable()
export class WidgetsManagerService {
  static widgetsModule: NgModule | ModuleWithProviders | any;

  static provideWidgetsModule(widgetsModule: NgModule | ModuleWithProviders) {
    WidgetsManagerService.widgetsModule = widgetsModule;
  }
}
