#!/usr/bin/env node
import { getUserName, greeting } from '../src/cli.js';

const userName = getUserName();
greeting(userName);
