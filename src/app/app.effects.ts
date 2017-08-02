import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {of} from 'rxjs/observable/of';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

class Service {
  returnObservable() {
    return of('someValue');
  }

  returnPromise() {
    return Promise.resolve('someValue');
  }
}

@Injectable()
export class AppEffects {
  @Effect()
  someEffect$: Observable<any> = this
    .actions$
    .ofType('START')
    .switchMap((action: any) => this.service.returnObservable())
    .map(r => ({type: 'END', payload: r}));

  @Effect()
  someOtherEffect$: Observable<any> = this
    .actions$
    .ofType('START')
    .switchMap((action: any) => fromPromise(this.service.returnPromise()))
    .map(r => ({type: 'END', payload: r}));

  constructor(private actions$: Actions, private service: Service) {}
}
