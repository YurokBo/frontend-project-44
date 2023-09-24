#!/usr/bin/env node
import { getUserName, greeting } from '../src/utils/cli.js';

const userName = getUserName();
greeting(userName);
