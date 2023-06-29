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

import { CreateWeaponPaintRequest } from '../models/create-weapon-paint-request';
import { WeaponPaintResponse } from '../models/weapon-paint-response';
import { WeaponPaintResponsePagedCollection } from '../models/weapon-paint-response-paged-collection';

@Injectable({
  providedIn: 'root',
})
export class WeaponPaintApiservice extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation weaponPaintGet
   */
  static readonly WeaponPaintGetPath = '/WeaponPaint';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponPaintGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponPaintGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WeaponPaintResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponPaintApiservice.WeaponPaintGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WeaponPaintResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponPaintGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponPaintGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<WeaponPaintResponse>> {

    return this.weaponPaintGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WeaponPaintResponse>>) => r.body as Array<WeaponPaintResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponPaintGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponPaintGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WeaponPaintResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponPaintApiservice.WeaponPaintGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WeaponPaintResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponPaintGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponPaintGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<WeaponPaintResponse>> {

    return this.weaponPaintGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WeaponPaintResponse>>) => r.body as Array<WeaponPaintResponse>)
    );
  }

  /**
   * Path part for operation weaponPaintGetPagedGet
   */
  static readonly WeaponPaintGetPagedGetPath = '/WeaponPaint/getPaged';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponPaintGetPagedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponPaintGetPagedGet$Plain$Response(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponPaintResponsePagedCollection>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponPaintApiservice.WeaponPaintGetPagedGetPath, 'get');
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
        return r as StrictHttpResponse<WeaponPaintResponsePagedCollection>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponPaintGetPagedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponPaintGetPagedGet$Plain(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<WeaponPaintResponsePagedCollection> {

    return this.weaponPaintGetPagedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponPaintResponsePagedCollection>) => r.body as WeaponPaintResponsePagedCollection)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponPaintGetPagedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponPaintGetPagedGet$Json$Response(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponPaintResponsePagedCollection>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponPaintApiservice.WeaponPaintGetPagedGetPath, 'get');
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
        return r as StrictHttpResponse<WeaponPaintResponsePagedCollection>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponPaintGetPagedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponPaintGetPagedGet$Json(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<WeaponPaintResponsePagedCollection> {

    return this.weaponPaintGetPagedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponPaintResponsePagedCollection>) => r.body as WeaponPaintResponsePagedCollection)
    );
  }

  /**
   * Path part for operation weaponPaintCreatePost
   */
  static readonly WeaponPaintCreatePostPath = '/WeaponPaint/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponPaintCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  weaponPaintCreatePost$Plain$Response(params?: {
    body?: CreateWeaponPaintRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponPaintResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponPaintApiservice.WeaponPaintCreatePostPath, 'post');
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
        return r as StrictHttpResponse<WeaponPaintResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponPaintCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  weaponPaintCreatePost$Plain(params?: {
    body?: CreateWeaponPaintRequest
  },
  context?: HttpContext

): Observable<WeaponPaintResponse> {

    return this.weaponPaintCreatePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponPaintResponse>) => r.body as WeaponPaintResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponPaintCreatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  weaponPaintCreatePost$Json$Response(params?: {
    body?: CreateWeaponPaintRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponPaintResponse>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponPaintApiservice.WeaponPaintCreatePostPath, 'post');
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
        return r as StrictHttpResponse<WeaponPaintResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponPaintCreatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  weaponPaintCreatePost$Json(params?: {
    body?: CreateWeaponPaintRequest
  },
  context?: HttpContext

): Observable<WeaponPaintResponse> {

    return this.weaponPaintCreatePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponPaintResponse>) => r.body as WeaponPaintResponse)
    );
  }

}
