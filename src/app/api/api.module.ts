/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ItemClassApiservice } from './services/item-class-apiservice';
import { PaintCollectionApiservice } from './services/paint-collection-apiservice';
import { PatternApiservice } from './services/pattern-apiservice';
import { UserApiservice } from './services/user-apiservice';
import { WeaponApiservice } from './services/weapon-apiservice';
import { WeaponFinishStyleApiservice } from './services/weapon-finish-style-apiservice';
import { WeaponPaintApiservice } from './services/weapon-paint-apiservice';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ItemClassApiservice,
    PaintCollectionApiservice,
    PatternApiservice,
    UserApiservice,
    WeaponApiservice,
    WeaponFinishStyleApiservice,
    WeaponPaintApiservice,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
