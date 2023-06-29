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

import { ItemClassResponse } from '../models/item-class-response';

@Injectable({
  providedIn: 'root',
})
export class ItemClassApiservice extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation itemClassGet
   */
  static readonly ItemClassGetPath = '/ItemClass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemClassGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemClassGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ItemClassResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemClassApiservice.ItemClassGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemClassResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `itemClassGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemClassGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<ItemClassResponse>> {

    return this.itemClassGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ItemClassResponse>>) => r.body as Array<ItemClassResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemClassGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemClassGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ItemClassResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemClassApiservice.ItemClassGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemClassResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `itemClassGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemClassGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<ItemClassResponse>> {

    return this.itemClassGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ItemClassResponse>>) => r.body as Array<ItemClassResponse>)
    );
  }

}
