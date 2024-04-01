import 'react-native-get-random-values';
import { Buffer } from "buffer";
import { TextEncoder } from "text-encoding"
global.Buffer = Buffer;
global.TextEncoder = TextEncoder;

import "expo-router/entry";