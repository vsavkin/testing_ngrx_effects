import {hot} from 'jasmine-marbles';
import {AppEffects} from './app.effects';
import {Actions} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {toArray} from 'rxjs/operator/toArray';
import {toPromise} from 'rxjs/operator/toPromise';
import {Observable} from 'rxjs/Observable';

describe('app effects', () => {
  it('should work with effects that only use observables', () => {
    const actions = new Actions(hot('-a-|', {a: {type: 'START'}}));
    const service = stubService('expected');
    const effects = new AppEffects(actions, service);

    expect(effects.someEffect$).toBeObservable(hot('-a-|', {a: {type: 'END', payload: 'expected'}}));
  });

  // async await rocks!
  it('should work with any effects', async () => {
    const actions = new Actions(hot('-a-|', {a: {type: 'START'}}));
    const service = stubService('expected');
    const effects = new AppEffects(actions, service);

    expect(await readAll(effects.someOtherEffect$)).toEqual([
      {type: 'END', payload: 'expected'}
    ]);
  });

  function stubService(response: any): any {
    const service = jasmine.createSpyObj('service', ['returnObservable', 'returnPromise']);
    service.returnObservable.and.returnValue(of(response));
    service.returnPromise.and.returnValue(Promise.resolve(response));
    return service;
  }
});

// extract into utils file
export function readAll<T>(o: Observable<T>): Promise<T[]> {
  return toPromise.call(toArray.call(o));
}
