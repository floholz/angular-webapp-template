/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateWeaponRequest } from '../models/create-weapon-request';
import { WeaponResponse } from '../models/weapon-response';
import { WeaponResponsePagedCollection } from '../models/weapon-response-paged-collection';

@Injectable({
  providedIn: 'root',
})
export class WeaponApiservice extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation weaponGet
   */
  static readonly WeaponGetPath = '/Weapon';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WeaponResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponApiservice.WeaponGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WeaponResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<WeaponResponse>> {

    return this.weaponGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WeaponResponse>>) => r.body as Array<WeaponResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WeaponResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponApiservice.WeaponGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WeaponResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<WeaponResponse>> {

    return this.weaponGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WeaponResponse>>) => r.body as Array<WeaponResponse>)
    );
  }

  /**
   * Path part for operation weaponGetPagedGet
   */
  static readonly WeaponGetPagedGetPath = '/Weapon/getPaged';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponGetPagedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponGetPagedGet$Plain$Response(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponResponsePagedCollection>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponApiservice.WeaponGetPagedGetPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {"style":"form"});
      rb.query('offset', params.offset, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WeaponResponsePagedCollection>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponGetPagedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponGetPagedGet$Plain(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<WeaponResponsePagedCollection> {

    return this.weaponGetPagedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponResponsePagedCollection>) => r.body as WeaponResponsePagedCollection)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponGetPagedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponGetPagedGet$Json$Response(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponResponsePagedCollection>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponApiservice.WeaponGetPagedGetPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {"style":"form"});
      rb.query('offset', params.offset, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WeaponResponsePagedCollection>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponGetPagedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponGetPagedGet$Json(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<WeaponResponsePagedCollection> {

    return this.weaponGetPagedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponResponsePagedCollection>) => r.body as WeaponResponsePagedCollection)
    );
  }

  /**
   * Path part for operation weaponCreatePost
   */
  static readonly WeaponCreatePostPath = '/Weapon/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  weaponCreatePost$Plain$Response(params?: {
    body?: CreateWeaponRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponApiservice.WeaponCreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WeaponResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  weaponCreatePost$Plain(params?: {
    body?: CreateWeaponRequest
  },
  context?: HttpContext

): Observable<WeaponResponse> {

    return this.weaponCreatePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponResponse>) => r.body as WeaponResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponCreatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  weaponCreatePost$Json$Response(params?: {
    body?: CreateWeaponRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponApiservice.WeaponCreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WeaponResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponCreatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  weaponCreatePost$Json(params?: {
    body?: CreateWeaponRequest
  },
  context?: HttpContext

): Observable<WeaponResponse> {

    return this.weaponCreatePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponResponse>) => r.body as WeaponResponse)
    );
  }

}
