import test from 'ava'
import add from '../src/index'

test('add', (t) => {
  t.is(add(1, 1), 2)
})
