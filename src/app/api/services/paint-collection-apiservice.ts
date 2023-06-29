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

import { PaintCollectionResponse } from '../models/paint-collection-response';
import { PaintCollectionResponsePagedCollection } from '../models/paint-collection-response-paged-collection';

@Injectable({
  providedIn: 'root',
})
export class PaintCollectionApiservice extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation paintCollectionGet
   */
  static readonly PaintCollectionGetPath = '/PaintCollection';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paintCollectionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  paintCollectionGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PaintCollectionResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, PaintCollectionApiservice.PaintCollectionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaintCollectionResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paintCollectionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paintCollectionGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<PaintCollectionResponse>> {

    return this.paintCollectionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PaintCollectionResponse>>) => r.body as Array<PaintCollectionResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paintCollectionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  paintCollectionGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PaintCollectionResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, PaintCollectionApiservice.PaintCollectionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PaintCollectionResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paintCollectionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paintCollectionGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<PaintCollectionResponse>> {

    return this.paintCollectionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PaintCollectionResponse>>) => r.body as Array<PaintCollectionResponse>)
    );
  }

  /**
   * Path part for operation paintCollectionGetPagedGet
   */
  static readonly PaintCollectionGetPagedGetPath = '/PaintCollection/getPaged';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paintCollectionGetPagedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  paintCollectionGetPagedGet$Plain$Response(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PaintCollectionResponsePagedCollection>> {

    const rb = new RequestBuilder(this.rootUrl, PaintCollectionApiservice.PaintCollectionGetPagedGetPath, 'get');
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
        return r as StrictHttpResponse<PaintCollectionResponsePagedCollection>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paintCollectionGetPagedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paintCollectionGetPagedGet$Plain(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<PaintCollectionResponsePagedCollection> {

    return this.paintCollectionGetPagedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PaintCollectionResponsePagedCollection>) => r.body as PaintCollectionResponsePagedCollection)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paintCollectionGetPagedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  paintCollectionGetPagedGet$Json$Response(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PaintCollectionResponsePagedCollection>> {

    const rb = new RequestBuilder(this.rootUrl, PaintCollectionApiservice.PaintCollectionGetPagedGetPath, 'get');
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
        return r as StrictHttpResponse<PaintCollectionResponsePagedCollection>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paintCollectionGetPagedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paintCollectionGetPagedGet$Json(params?: {
    limit?: number;
    offset?: number;
  },
  context?: HttpContext

): Observable<PaintCollectionResponsePagedCollection> {

    return this.paintCollectionGetPagedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PaintCollectionResponsePagedCollection>) => r.body as PaintCollectionResponsePagedCollection)
    );
  }

}
