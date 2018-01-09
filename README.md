

### running-time
'running-time' is a function used to calculate the running time.

> runTime(target, ...arg)

```js
const runTime = require('running-time')

function sum(n) {
    let sum = 0.0;
    for(let i = 0; i < n; i++) {
        sum += 0.1;
    }
    return sum;
}

runTime(sum, 1e9);
```
