import Utils from '../dist/utils';
import test from 'tape';

test('defaults sets default fields in object', (t) => {
  const foo = {foo: 'bar'};
  const defObject = {foo: 'bar', bar: 'foo'};

  const result = Utils.defaults(foo, defObject);
  t.deepEqual(result, {foo: 'bar', bar: 'foo'});
  t.end();
});
