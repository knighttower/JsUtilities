import { test } from 'vitest';
import assert from 'assert';
import { eventBus } from '../src/eventBus'; // Replace with your actual path

test('should register an event and trigger it', () => {
    const _eventBus = eventBus();
    let flag = false;

    _eventBus.on('myEvent', () => {
        flag = true;
    });

    _eventBus.emit('myEvent');

    if (!flag) {
        throw new Error('Event not triggered');
    }
});

test('should trigger an event only once', () => {
    const _eventBus = eventBus();
    let counter = 0;

    _eventBus.once('myEvent', () => {
        counter++;
    });

    _eventBus.emit('myEvent');
    _eventBus.emit('myEvent');

    if (counter !== 1) {
        throw new Error('Event triggered more than once');
    }
});

test('should trigger an event exactly N times', () => {
    const _eventBus = eventBus();
    let counter = 0;
    const N = 3;

    _eventBus.exactly(
        'myEvent',
        () => {
            counter++;
        },
        N
    );

    for (let i = 0; i < N + 1; i++) {
        _eventBus.emit('myEvent');
    }

    if (counter !== N) {
        throw new Error(`Event should be triggered exactly ${N} times`);
    }
});

test('should kill an event with all its callbacks', () => {
    const _eventBus = eventBus();
    let flag = false;

    _eventBus.on('myEvent', () => {
        flag = true;
    });

    _eventBus.off('myEvent');
    _eventBus.emit('myEvent');

    if (flag) {
        throw new Error('Event should not be triggered after off()');
    }
});

test('should detach a specific callback for an event', () => {
    const _eventBus = eventBus();
    let counter1 = 0;
    let counter2 = 0;

    const callback1 = () => {
        counter1++;
    };
    const callback2 = () => {
        counter2++;
    };

    _eventBus.on('myEvent', callback1);
    _eventBus.on('myEvent', callback2);

    _eventBus.detach('myEvent', callback1);
    _eventBus.emit('myEvent');

    if (counter1 !== 0 || counter2 !== 1) {
        throw new Error('Callback not detached correctly');
    }
});

test('off', async () => {
    const _eventBus = eventBus();
    let triggered = false;
    _eventBus.on('my-event', () => {
        triggered = true;
    });
    _eventBus.off('my-event');
    _eventBus.emit('my-event');
    assert(triggered === false);
});

test('detach', async () => {
    const _eventBus = eventBus();
    let triggered = 0;
    const callback = () => {
        triggered++;
    };
    _eventBus.on('my-event', callback);
    _eventBus.emit('my-event');
    _eventBus.detach('my-event', callback);
    _eventBus.emit('my-event');
    assert(triggered === 1);
});

test('once', async () => {
    const _eventBus = eventBus();
    let triggered = 0;
    _eventBus.once('my-event', () => {
        triggered++;
    });
    _eventBus.emit('my-event');
    _eventBus.emit('my-event');
    assert(triggered === 1);
});

test('exactly', async () => {
    const _eventBus = eventBus();
    let triggered = 0;
    _eventBus.exactly(
        'my-event',
        () => {
            triggered++;
        },
        3
    );
    _eventBus.emit('my-event');
    _eventBus.emit('my-event');
    _eventBus.emit('my-event');
    _eventBus.emit('my-event');
    assert(triggered === 3);
});

test('greedy wildcard emit', async () => {
    const _eventBus = eventBus();
    let triggered = 0;
    _eventBus.on('my-event.a', () => {
        triggered++;
    });
    _eventBus.emit('my-event.**');
    _eventBus.emit('my-event.a.name.b');
    _eventBus.emit('my-event.name.b');
    assert(triggered === 1);
});

test('nested wildcard and emit', async () => {
    const _eventBus = eventBus();
    let triggered = 0;
    _eventBus.on('my-event.a.name', () => {
        triggered++;
    });
    _eventBus.emit('my-event.*.name');
    _eventBus.emit('my-event.a.name.b');
    _eventBus.emit('my-event.name.b');
    assert(triggered === 1);
});

test('nested wildcard multi and emit', async () => {
    const _eventBus = eventBus();
    let triggered = 0;
    _eventBus.on('my-event.a.name-hello', () => {
        triggered++;
    });
    _eventBus.emit('my-event.*.**');
    _eventBus.emit('my-event.a.name.b');
    _eventBus.emit('my-event.name.b');
    assert(triggered === 1);
});

test('nested wildcard and emit double wild', async () => {
    const _eventBus = eventBus();
    let triggered = 0;
    _eventBus.on('my-event.x.name.b', () => {
        triggered++;
    });
    _eventBus.emit('my-event.x*name.**');
    _eventBus.emit('my-event.x.name.b');
    _eventBus.emit('my-event.x.other-name.b');
    assert(triggered === 2);
});

test('nested wildcard and emit with "on"', async () => {
    const _eventBus = eventBus();
    let triggered = 0;
    _eventBus.on('my-event.x.**', () => {
        triggered++;
    });
    _eventBus.emit('my-event.x.name');
    _eventBus.emit('my-event.x.name.b');
    _eventBus.emit('my-event.name.b');
    assert(triggered === 2);
});

test('nested wildcard and emit with "on" multi card', async () => {
    const _eventBus = eventBus();
    let triggered = 0;
    _eventBus.on('my-event.y*b', () => {
        triggered++;
    });
    _eventBus.emit('my-event.y');
    _eventBus.emit('my-event.yz');
    _eventBus.emit('my-event.y.z');
    _eventBus.emit('my-event.y.name');
    _eventBus.emit('my-event.y.name.b'); // this should be the match
    _eventBus.emit('my-event.y.other-name.c');
    assert(triggered === 1);
});

test('passing data', async () => {
    const _eventBus = eventBus();
    let content = null;
    _eventBus.on('my-event', (data) => {
        content = data;
    });
    _eventBus.emit('my-event', 'hello', 'world');
    assert.equal(content, 'hello');
});
test('passing data multi args', async () => {
    const _eventBus = eventBus();
    let content = null;
    _eventBus.on('my-event', (data, other) => {
        content = other;
    });
    _eventBus.emit('my-event', 'hello', 'world', 'other');
    assert.equal(content, 'world');
});

test('passing data object', async () => {
    const _eventBus = eventBus();
    let content = null;
    _eventBus.on('my-event', (data) => {
        content = data;
    });
    _eventBus.emit('my-event', { key: 'value' });
    assert.deepEqual(content, { key: 'value' });
});

test('global', async () => {
    const _eventBus = eventBus();
    _eventBus.global();
    console.log(global);
});
