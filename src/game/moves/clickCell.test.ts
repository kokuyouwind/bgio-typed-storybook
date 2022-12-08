import { describe, test, expect } from 'vitest'
import clickCell from './clickCell';

describe('suite', () => {
    test('should place the correct value in the cell', () => {
        // original state.
        const G = {
            cells: [null, null, null, null, null, null, null, null, null],
        };

        // make move.
        clickCell({ G, playerID: '1' }, 3);

        // verify new state.
        expect(G).toEqual({
            cells: [null, null, null, '1', null, null, null, null, null],
        });
    });
})
