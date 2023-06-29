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

import { WeaponFinishStyleResponse } from '../models/weapon-finish-style-response';
import { WeaponFinishStyleResponsePagedCollection } from '../models/weapon-finish-style-response-paged-collection';

@Injectable({
  providedIn: 'root',
})
export class WeaponFinishStyleApiservice extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation weaponFinishStyleGet
   */
  static readonly WeaponFinishStyleGetPath = '/WeaponFinishStyle';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponFinishStyleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponFinishStyleGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WeaponFinishStyleResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponFinishStyleApiservice.WeaponFinishStyleGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WeaponFinishStyleResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponFinishStyleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponFinishStyleGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<WeaponFinishStyleResponse>> {

    return this.weaponFinishStyleGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WeaponFinishStyleResponse>>) => r.body as Array<WeaponFinishStyleResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponFinishStyleGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponFinishStyleGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WeaponFinishStyleResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponFinishStyleApiservice.WeaponFinishStyleGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WeaponFinishStyleResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponFinishStyleGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponFinishStyleGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<WeaponFinishStyleResponse>> {

    return this.weaponFinishStyleGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WeaponFinishStyleResponse>>) => r.body as Array<WeaponFinishStyleResponse>)
    );
  }

  /**
   * Path part for operation weaponFinishStyleGetPagedGet
   */
  static readonly WeaponFinishStyleGetPagedGetPath = '/WeaponFinishStyle/getPaged';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponFinishStyleGetPagedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponFinishStyleGetPagedGet$Plain$Response(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponFinishStyleResponsePagedCollection>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponFinishStyleApiservice.WeaponFinishStyleGetPagedGetPath, 'get');
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
        return r as StrictHttpResponse<WeaponFinishStyleResponsePagedCollection>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponFinishStyleGetPagedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponFinishStyleGetPagedGet$Plain(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<WeaponFinishStyleResponsePagedCollection> {

    return this.weaponFinishStyleGetPagedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponFinishStyleResponsePagedCollection>) => r.body as WeaponFinishStyleResponsePagedCollection)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `weaponFinishStyleGetPagedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponFinishStyleGetPagedGet$Json$Response(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<WeaponFinishStyleResponsePagedCollection>> {

    const rb = new RequestBuilder(this.rootUrl, WeaponFinishStyleApiservice.WeaponFinishStyleGetPagedGetPath, 'get');
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
        return r as StrictHttpResponse<WeaponFinishStyleResponsePagedCollection>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `weaponFinishStyleGetPagedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  weaponFinishStyleGetPagedGet$Json(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<WeaponFinishStyleResponsePagedCollection> {

    return this.weaponFinishStyleGetPagedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<WeaponFinishStyleResponsePagedCollection>) => r.body as WeaponFinishStyleResponsePagedCollection)
    );
  }

}
