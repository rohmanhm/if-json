import test from 'ava'
import ifJSON from '../index'

const good_json_with_quote = '{"test": "abc", "anu": 3}'
const good_json_without_quote = {"test": "abc", "anu": 3}
const good_json5_with_quote = '{test: "abc", anu: 3}'
const good_json5_without_quote = {test: "abc", anu: 3}

const bad_json_with_quote = '{"test" "abc", "anu" 3}'
const bad_json5_with_quote = '{test "abc", anu 3}'

test('return true json with quote', t => {
  t.truthy(ifJSON(good_json_with_quote))
})
test('return true json without quote', t => {
  t.truthy(ifJSON(good_json_without_quote))
})
test('return true json5 with quote', t => {
  t.truthy(ifJSON(good_json5_with_quote))
})
test('return true json5 without quote', t => {
  t.truthy(ifJSON(good_json5_without_quote))
})
test('return false json with quote', t => {
  t.falsy(ifJSON(bad_json_with_quote))
})
test('return false json5 with quote', t => {
  t.falsy(ifJSON(bad_json5_with_quote))
})