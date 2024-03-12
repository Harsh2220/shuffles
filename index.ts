import 'react-native-get-random-values';
import { Buffer } from "buffer";
global.Buffer = Buffer;
global.TextEncoder = require('text-encoding').TextEncoder;

import "expo-router/entry";