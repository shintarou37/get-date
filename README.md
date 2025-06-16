# offset-hours

A tiny utility library providing simple functions to offset the current time by hours or minutes.

## Installation

```bash
npm install offset-hours
```

## Usage

```js
import { offsetHoursSimple, offsetMinutesSimple } from 'offset-hours';

// 1 hour ago
const pastHour = offsetHoursSimple(-1);
console.log(pastHour); // Date object

// 3 hours later
const futureHour = offsetHoursSimple(3);
console.log(futureHour);

// 30 minutes ago
const past30Min = offsetMinutesSimple(-30);
console.log(past30Min);

// 45 minutes later
const future45Min = offsetMinutesSimple(45);
console.log(future45Min);
```
