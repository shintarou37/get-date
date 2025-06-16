# offset-hours

A tiny utility that returns a JavaScript `Date` object offset by a given number of hours from "now".

## Installation

```bash
npm install offset-hours
```

## Usage

```
import { offsetHoursSimple } from 'offset-hours';

// 1 hour ago
const past = offsetHoursSimple(-1);
console.log(past);

// 3 hours later
const future = offsetHoursSimple(3);
console.log(future);
```
