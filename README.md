# Testing NgRx Effects

This repo shows a few things of what to do and not to do when testing NgRx effects.

1. Don't use `TestBed` unless you have to. Prefer instantiating effects directly.
2. Don't use `beforeEach` unless you have to. Prefer helper functions, so you can use "const" everywhere.
3. Don't use `.then` or `.subscribe` in your tests. It makes them fragile. Observables are reified. Take advantage of this! Use TestScheduler when you can. Use async/await or fakeAsync zone everywhere else. 

<br>

##  <a href="http://nrwl.io">Nrwl — Enterprise Angular Consulting.
<img src="https://cdn-images-1.medium.com/max/422/1*vrdzsX6fCG7bxnqF0qku0A@2x.png">
</a>
