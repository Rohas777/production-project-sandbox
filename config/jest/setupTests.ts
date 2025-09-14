import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { TextEncoder } from 'util';

// @ts-ignore
global.TextEncoder = TextEncoder;
