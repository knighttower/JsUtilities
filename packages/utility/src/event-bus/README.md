

# EVENT BUS

### Simple Event Bus library built for any JavaScript application.


**Refactoring and Updates:**

---- 2024 ----
-   Consolidated functions into a single class. No need to initialize the class anymore.
-   Distribution files are now in the root of the project
-   Distribution builds to support node / browser / module and other environments
-   Available via NPM (@knighttower/event-bus) && JsDelivr (https://cdn.jsdelivr.net/npm/@knighttower/event-bus@latest/dist/browser/EventBus.min.js)

---- 2023 ----
-   Remove some unnecessary methods to make it SOLID
-   Remove different file language versions to unify the code into one and ease maintenance
-   Fixed and made the code JsDocs and Ts compliant
-   Fixed minor code issues
-   Added correct distribution files to modules and browser
-   Added Vitest unit test (passed)
-   Added terser, webpack (for browser window export) and ts (for module export)
-   Removed examples folder, the examples are now in the JsDocs comments for Docs creation
-   Bump the version to Major since there was a lot of refactoring and changes in the Class API
-   "emit" method now receives the 'context' as part of the 'args' only if set since it is not frequently used and allows to pass the data without the need to set "null" as the context, ex:

    -   EventBus.emit('event.name', arg1, arg2, arg3)
    -   EventBus.emit('event.name', arg1, arg2, {\_\_context: YourInstance}, ...otherArgs) //order is not important

-   Fixes to the wild card event match. It now accepts correct wild card in the "on" or "emit" method:
    -   EventBus.emit('event.name.\*') // matches on('event.name.hello') or on('event.name.hello.world')
    -   EventBus.emit('event.\*.string') // matches on('event.name.string') but not on('event.name.hello.world')
    -   EventBus.on('event.\*.string.\*') // matches emit('event.name.string.emitter') or emit('event.name.string.hello.world')

(this is an updated and improved fork of [js-event-bus](https://github.com/bcerati/js-event-bus/tree/main) by [bcerati])

## Installation

### Using npm

```
npm i @knighttower/utility
```


## Usage

This library was built so you can use it in any JS application like Node.js apps, browser apps etc. The API is always the same.

### Importing in Build or Node.js application

If you want to use it in your Node.js apps you can import the library like this:

```js
import { EventBus } from '@knighttower/utility/EventBus'; // gets the class
const EventBus = new EventBus(); // creates a new instance
//Tip: in node JS you can use the global instance=> EventBus().global();
```

### Importing in browser application

If you want to use it in your Browser apps you can import the library (browser or iife) like this:

```html
    <script src=" https://cdn.jsdelivr.net/npm/@knighttower/utility/dist/browser/EventBus.min.js "></script>
    <script>
        // global instance
        EventBus.default().global();
        // then you can use it
        window.EventBus.on('my-event', function () {
            console.log('Inside `my-event`');
        });

        // or if you want to use it with scope as 
        const ev = EventBus.default();
        // then you can use it
        ev.on('my-event', function () {
            console.log('Inside `my-event`');
        });
    </script>
```

### Api of the library

#### Register to an event

```js
EventBus.on('my-event', function () {
    console.log('Inside `my-event`');
});
```

With this code, each time `my-event` is emitted this function will be executed.

#### Register only one time to an event

```js
EventBus.once('my-event', function () {
    console.log("Inside `my-event`. It'll be executed only one time!");
});
```

With this code, when `my-event` is emitted this function will be executed. The next triggers of this event won't execute the callback because it is a one time event.

#### Register several time to an event

```js
EventBus.exactly(3, 'my-event', function () {
    console.log("Inside `my-event`. It'll be executed only 3 times!");
});
```

With this code, when `my-event` is emitted this function will be executed with a maximum of triggers of 3.

#### Register using wildcards

You can use wildcards to register listeners using a specific pattern.

```js
EventBus.on('my-event.*', function () {
    console.log('Inside `my-event.*`');
});
```

The callback will be executed with the events like `my-event.x`.

-   `my-event.x` **will** trigger the callback ;
-   `my-event.y` **will** trigger the callback ;
-   `my-event` **will not** trigger the callback ;
-   `my-event.x.y` **will not** trigger the callback ;

You can also use multiple wildcards to register listeners using a specific pattern.

```js
EventBus.on('my-event.*.name.**', function () {
    console.log('my-event.*.name.**`');
});
```

The callback will be executed with the events like `my-event.a.name.b.c`.

-   `my-event.a.name.b.c` **will** trigger the callback ;
-   `my-event.a.name.b` **will** trigger the callback ;
-   `my-event.name.b` **will not** trigger the callback ;

#### Emit an event

You can emit an event by calling the `emit` function. The arguments are the following:

-   the name of the event ;
-   ... all the arguments.
Note: In order to pass the "context" (ex: 'this', or ex: ObjectInstance) to the event, it can be easily added within an object containing the property "__context" as part of the arguments. This will be automatically injected into the event and removed from the Arguments, so no need of sanitation.

Here are some examples:

```js
EventBus.emit('my-event');
EventBus.emit('my-event', 'a', 'b', {__context: someInstance}); // your callback sould be function (a, b) { ... }
EventBus.emit('my-event', 'a', 'b', 'c', {__context: new SomeObject()}); // your callback sould be function (a, b) { ... } and `this` will be set to the context of `SomeObject`. Order is not important.
```

#### Detach an event

```js
var callbackForMyEvent = function () {
    console.log('Inside `my-event`.');
};

EventBus.on('my-event', callbackForMyEvent);

EventBus.emit('my-event');

EventBus.detach('my-event', callbackForMyEvent);
```

This code will emit the event `my-event` and then detach the given callback for this event. So it'll not be executed anymore.

#### Detach an event for all the callbacks that have been set before

```js
EventBus.detach('my-event');
```

This code will remove the event `my-event` from the event bus.

#### Remove an event

```js
EventBus.on('my-event', function () {
    console.log('Inside `my-event`.');
});

EventBus.emit('my-event');

EventBus.off('my-event');
```

This code will emit the event `my-event` and then detach all the callbacks for this event. So any of them won't be executed anymore.

# License

MIT
