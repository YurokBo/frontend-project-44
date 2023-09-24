#!/usr/bin/env node
import getUserName from '../src/cli.js';

const userName = getUserName();
console.log(`Hello, ${userName}!`);
