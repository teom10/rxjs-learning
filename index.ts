import { of, Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject} from 'rxjs'; 
import { map, take } from 'rxjs/operators';


const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

source.subscribe(console.log);

const obs = new Observable(observer => {
  observer.next("custom message");

  setTimeout(()=> observer.next("messsage two"));
  setTimeout(()=> observer.next("messsage three"));
});

obs.subscribe(v => console.log(v));

const s = new Subject();
s.next('s message');
s.subscribe(m => console.log(m));

s.next('s 2nd message');
s.next('s 3nd message');


const bs = new BehaviorSubject('first message as initial value');

console.log('BehaviorSubject value: ' + bs.value);

bs.next('21111 message Behavior');

bs.next('2d1111 message Behavior');
bs.subscribe(m => console.log(m));

bs.next('2 message Behavior');
bs.next('3 message Behavior');


const replaySubject = new ReplaySubject(2);

replaySubject.next('1st message from the ReplaySubject!');

replaySubject.next('2nd message from the ReplaySubject!');

replaySubject.next('3rd message from the ReplaySubject!');

replaySubject.next('4th message from the ReplaySubject!');

replaySubject.subscribe(value => console.log(value));

replaySubject.next('5th message from the ReplaySubject!');

replaySubject.next('6th message from the ReplaySubject!');

const asyncSubject = new AsyncSubject();

asyncSubject.next('1st message from the AsyncSubject');

asyncSubject.subscribe(value => console.log(value));

asyncSubject.next('2nd message from the AsyncSubject'); //nothing logged

asyncSubject.subscribe(value => console.log(value));

asyncSubject.next('3rd message from the AsyncSubject'); //nothing logged

asyncSubject.complete();