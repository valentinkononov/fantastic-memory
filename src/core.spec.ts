import { numShort } from './core';

describe('numShort', () => {
    it('should return raw value for small number', () => {
        expect(numShort(999)).toBe('999');
        expect(numShort(0)).toBe('0');
        expect(numShort(-999)).toBe('-999');
    });

    it('should return K for thousands', () => {
        expect(numShort(1_000)).toBe('1K');
        expect(numShort(999_000)).toBe('999K');
        expect(numShort(-999_000)).toBe('-999K');
        expect(numShort(999_999)).toBe('1M');
        expect(numShort(-999_999)).toBe('-1M');
    });

    it('should return M for millions', () => {
        expect(numShort(1_000_000)).toBe('1M');
        expect(numShort(999_000_000)).toBe('999M');
        expect(numShort(-999_000_000)).toBe('-999M');
        expect(numShort(999_999_999)).toBe('1B');
        expect(numShort(-999_999_999)).toBe('-1B');
    });

    it('should return B for billions', () => {
        expect(numShort(1_000_000_000)).toBe('1B');
        expect(numShort(999_000_000_000)).toBe('999B');
        expect(numShort(-999_000_000_000)).toBe('-999B');
        expect(numShort(999_999_999_999)).toBe('1T');
        expect(numShort(-999_999_999_999)).toBe('-1T');
    });

    it('should return T for trillions', () => {
        expect(numShort(1_000_000_000_000)).toBe('1T');
        expect(numShort(999_000_000_000_000)).toBe('999T');
        expect(numShort(-999_000_000_000_000)).toBe('-999T');
        expect(numShort(999_999_999_999_999)).toBe('1000T');
        expect(numShort(-999_999_999_999_999)).toBe('-1000T');
    });
});
