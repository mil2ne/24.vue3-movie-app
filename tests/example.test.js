import { asyncFn } from "./example";

describe('비동기 테스트', () => {
  test('done', (done) => {
    asyncFn().then(res => {
      expect(res).toBe('done!')
      done()
    })
  })

  test('then', () => {
    return asyncFn().then(res => {
      expect(res).toBe('done!')
    })
  })

  test('resolves_1', () => {
    return expect(asyncFn()).resolves.toBe('done!')
  })

  test('resolves_2', () => expect(asyncFn()).resolves.toBe('done!'))

  test('async/await', async () => {
    const res = await asyncFn()
    expect(res).toBe('done!')
  })
})