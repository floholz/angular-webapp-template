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

import { CreatePatternRequest } from '../models/create-pattern-request';
import { PatternResponse } from '../models/pattern-response';

@Injectable({
  providedIn: 'root',
})
export class PatternApiservice extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation patternGet
   */
  static readonly PatternGetPath = '/Pattern';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patternGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  patternGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PatternResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, PatternApiservice.PatternGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PatternResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patternGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  patternGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<PatternResponse>> {

    return this.patternGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PatternResponse>>) => r.body as Array<PatternResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patternGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  patternGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PatternResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, PatternApiservice.PatternGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PatternResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patternGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  patternGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<PatternResponse>> {

    return this.patternGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PatternResponse>>) => r.body as Array<PatternResponse>)
    );
  }

  /**
   * Path part for operation patternCreatePost
   */
  static readonly PatternCreatePostPath = '/Pattern/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patternCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  patternCreatePost$Plain$Response(params?: {
    body?: CreatePatternRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PatternResponse>> {

    const rb = new RequestBuilder(this.rootUrl, PatternApiservice.PatternCreatePostPath, 'post');
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
        return r as StrictHttpResponse<PatternResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patternCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  patternCreatePost$Plain(params?: {
    body?: CreatePatternRequest
  },
  context?: HttpContext

): Observable<PatternResponse> {

    return this.patternCreatePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PatternResponse>) => r.body as PatternResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patternCreatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  patternCreatePost$Json$Response(params?: {
    body?: CreatePatternRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PatternResponse>> {

    const rb = new RequestBuilder(this.rootUrl, PatternApiservice.PatternCreatePostPath, 'post');
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
        return r as StrictHttpResponse<PatternResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patternCreatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  patternCreatePost$Json(params?: {
    body?: CreatePatternRequest
  },
  context?: HttpContext

): Observable<PatternResponse> {

    return this.patternCreatePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PatternResponse>) => r.body as PatternResponse)
    );
  }

  /**
   * Path part for operation patternTestPost
   */
  static readonly PatternTestPostPath = '/Pattern/test';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patternTestPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  patternTestPost$Response(params?: {
    body?: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PatternApiservice.PatternTestPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patternTestPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  patternTestPost(params?: {
    body?: string
  },
  context?: HttpContext

): Observable<void> {

    return this.patternTestPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
