const { performance } = require('perf_hooks');
const isPromise = require('is-promise');
const colors = require('colors');

module.exports = function (target, ...arg) {
    let p;

    const id = Math.random().toString(32);
    performance.mark(id + '##start');

    if (typeof target === 'function') {
        p = target(...arg);
        if (isPromise(p)) {
            return p.then(res => {
                print();
                return res;
            });
        }
        else {
            print();
            return p;
        }
    }

    function print() {
        performance.mark(id + '##end');
        performance.measure(id + '##', id + '##start', id + '##end');
        const entry = performance.getEntriesByName(id + '##')[0];
        console.log(`${target.name}(${arg.join(', ')})`.green, 'run time:', entry.duration + ' ms');
    }
}

