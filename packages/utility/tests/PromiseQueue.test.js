import { test, vi, expect } from 'vitest';
import assert from 'assert';
import { promisePool, doPoll, promiseQueue, doTimeout } from '../src/PromiseQueue';

vi.setConfig({
    testTimeout: 50000,
});

test('doTimeout', async () => {
    let done = false;
    // Example usage with an ID
    doTimeout('exampleTimeout', 1000, () => {
        console.log('Timeout executed with ID');
        return false; // Return true to repeat
    });

    // Example usage without an ID
    doTimeout(1000, () => {
        console.log('Timeout executed without ID');
        done = true;
        return false; // Return true to repeat
    });

    // Example usage for polling
    doTimeout(100, function () {
        if (done) {
            console.log('Condition met, stopping the polling.');
            return false; // Stop polling when some condition is true
        }
        console.log('Condition not met, continue polling.');
        return true; // Continue polling by returning true
    });
});

test('promisePool add promise', async () => {
    const pool = promisePool();
    pool.add(fetch('https://jsonplaceholder.typicode.com/todos/1'));

    expect(
        doPoll(() => {
            return pool.isDone();
        }).promise
    ).resolves.toBe(true);
    // assert.equal(typeof result, 'string');
});

test('promisePool add bad promise', async () => {
    const pool = promisePool();
    let result = false;
    pool.add(() => {
        //iterate
        for (let i = 0; i < 5000; i++) {}
    });
    pool.add(['hello']);

    pool.on('fail', (error) => {
        console.log('----> fail:', error);
        result = true;
    });

    // expect(
    //     doPoll(
    //         () => {
    //             if (result === true) {
    //                 return true;
    //             }
    //         },
    //         { timeout: 6000 }
    //     ).promise
    // ).resolves.toBe(true);
    // assert.equal(typeof result, 'string');
});

test('promisePool add function', async () => {
    const pool = promisePool();

    pool.add(() => {
        //iterate
        for (let i = 0; i < 5000; i++) {}
    });

    expect(
        doPoll(() => {
            return pool.isDone();
        }).promise
    ).resolves.toBe(true);
});

test('promisePool', async () => {
    const pool = promisePool();
    pool.add(fetch('https://jsonplaceholder.typicode.com/todos/1'));
    pool.add(fetch('https://jsonplaceholder.typicode.com/todos/2'));
    pool.add(() => {
        // iterate 5000 times
        for (let i = 0; i < 5000; i++) {}
        console.log('done');
    });
    pool.status(); // 'in-progress'
    pool.on('completed', () => {
        console.log('completed');
    });
    pool.on('rejected', (rejectedPromises) => {
        console.log('rejected:', rejectedPromises);
    });
    pool.on('stats', ({ completed, rejected, pending, total }) => {
        console.table({ completed, rejected, pending, total });
    });

    expect(
        doPoll(() => {
            return pool.isDone();
        }).promise
    ).resolves.toBe(true);
    // assert.equal(typeof result, 'string');
});

test('promise pool', async () => {
    assert.equal(false, false);

    const promPool = promisePool();

    // Adding a single promise
    promPool.add(new Promise((resolve) => setTimeout(resolve, 1000)));

    // Adding multiple promises
    promPool.add([
        new Promise((resolve) => setTimeout(resolve, 500)),
        new Promise((resolve, reject) => setTimeout(reject, 1500)),
    ]);
    promPool.on('completed', () => {
        console.log('All promises resolved or rejected.');
    });
    const done = await vi.waitUntil(
        () => {
            console.log('----', promPool.status());
            if (promPool.status() === 'done') {
                console.log('______log______');
                console.log(promPool.status());

                return true;
            }

            return false;
        },
        {
            timeout: 3000, // default is 1000
            interval: 500, // default is 50
        }
    );
    expect(done).toBe(true);
});

test('promise queue', async () => {
    assert.equal(false, false);

    const queue = promiseQueue();

    queue.add(
        new Promise((resolve) => setTimeout(resolve, 1000)).then(() => console.log('resolved'))
    );

    queue.add(() => {
        return new Promise((resolve, reject) => setTimeout(reject, 500))
            .finally(() => {
                console.log('----> rejected');
            })
            .catch((error) => {
                console.log('----> error:', error);
            });
    });
    queue.on('completed', () => {
        console.log('All promises resolved or rejected.');
    });

    const done = await vi.waitUntil(
        () => {
            console.log('----', queue.status());
            if (queue.status() === 'done') {
                console.log('______promise done  ______');
                console.log(queue.status());

                return true;
            }
        },
        {
            timeout: 4000, // default is 1000
            interval: 500, // default is 50
        }
    );
    expect(done).toBe(true);
});

test('polling', async () => {
    assert.equal(false, false);
    let response = false;
    const done = await vi.waitUntil(
        () => {
            doPoll(
                () => {
                    setTimeout(() => {
                        response = true;
                    }, 1500);
                    console.log('1500');
                },
                { timeout: 2500, interval: 500 }
            );
            console.log('waitUntil');
            if (response) {
                return true;
            }
        },
        {
            timeout: 3000, // default is 1000
            interval: 2000, // default is 50
        }
    );
    expect(done).toBe(true);
    // response = false;
    // const done2 = await vi.waitUntil(
    //     () => {
    //         const poll = doPoll(
    //             () => {
    //                 console.log('44');
    //             },
    //             { timeout: 100, interval: 50 },
    //         );

    //         poll.promise.catch((result) => {
    //             console.log('======result', result);
    //             return result;
    //         });
    //     },
    //     {
    //         timeout: 3000, // default is 1000
    //         interval: 200, // default is 50
    //     },
    // );
    // expect(done).toBe(true);
});
