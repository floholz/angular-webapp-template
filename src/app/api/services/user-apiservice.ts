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

import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root',
})
export class UserApiservice extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userGetUserGet
   */
  static readonly UserGetUserGetPath = '/User/getUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userGetUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetUserGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserApiservice.UserGetUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userGetUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetUserGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<UserResponse> {

    return this.userGetUserGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<UserResponse>) => r.body as UserResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userGetUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetUserGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserApiservice.UserGetUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userGetUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetUserGet$Json(params?: {
  },
  context?: HttpContext

): Observable<UserResponse> {

    return this.userGetUserGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<UserResponse>) => r.body as UserResponse)
    );
  }

}
