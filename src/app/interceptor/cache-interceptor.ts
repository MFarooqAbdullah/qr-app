import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class RequestCachingService implements HttpInterceptor {
 private cacheMap = new Map<string, HttpResponse<any>>();

 constructor() { }

 intercept(req: HttpRequest, next: HttpHandler): Observable<HttpEvent<any>> {
   const cachedResponse = this.cacheMap.get(req.urlWithParams);

   if (cachedResponse) {
     return of(cachedResponse);
   }

   return next.handle(req).pipe(tap(event => {
     if (event instanceof HttpResponse) {
       this.cacheMap.set(req.urlWithParams, event);
     }
   }))

 }
}