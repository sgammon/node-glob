// regression test to make sure that slash-ended patterns
// don't match files when using a different cwd.
import t from 'tap'
import glob, { GlobOptions } from '../'

const pattern = '../{*.md,test}/'
const expect = ['../test/']
const cwd = __dirname
const opt: GlobOptions = { cwd }
process.chdir(__dirname + '/..')

t.test('slashes only match directories', async t => {
  t.same(glob.sync(pattern, opt), expect, 'sync test')
  t.same(await glob(pattern, opt), expect, 'async test')
})
