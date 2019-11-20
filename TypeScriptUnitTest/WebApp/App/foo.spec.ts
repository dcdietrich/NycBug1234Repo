import { Foo } from '../../../Application/WebApp/App';

import { describe } from 'mocha';
import { expect } from 'chai';

describe('Foo', () =>
{
    describe('sum(number, number)', () =>
    {
        it('should return the sum of two numbers', () =>
        {
            expect(Foo.sum(23, 42)).to.equal(65);
        });
    });
});