import { KeyValues } from './interfaces';

const THOUSANDS_EXP = 6;
const MILLIONS_EXP = 9;
const BILLIONS_EXP = 12;
const TRILLIONS_EXP = 15;

const ONE_THOUSAND = 1e3;
const MAX_VALUE = 1e19;
const MIN_VALUE = -1e19;

const suffixes: KeyValues = {
    ['K']: THOUSANDS_EXP,
    ['M']: MILLIONS_EXP,
    ['B']: BILLIONS_EXP,
    ['T']: TRILLIONS_EXP,
};

export const numShort = (value: number): string => {
    if (!value) return value?.toString();
    if (value > MAX_VALUE) {
        throw new RangeError('Input expected to be < 1e19');
    }

    if (value < MIN_VALUE) {
        throw new RangeError('Input expected to be > -1e19');
    }

    const sign = value < 0 ? '-' : '';
    let shortenedAbs = Math.abs(value);

    if (shortenedAbs < ONE_THOUSAND) {
        return value.toString();
    }

    let finalExponent = 0;
    while (shortenedAbs >= ONE_THOUSAND && finalExponent < BILLIONS_EXP) {
        const size = Math.floor(shortenedAbs).toString().length;
        const exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
        shortenedAbs = Math.round(10 * (shortenedAbs / Math.pow(10, exponent))) / 10;
        finalExponent += exponent;
    }

    let shortNumber = shortenedAbs.toString();
    for (const suffix in suffixes) {
        if (finalExponent < suffixes[suffix]) {
            shortNumber += suffix;
            break;
        }
    }

    return sign + shortNumber;
};
