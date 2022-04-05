import { asyncFn } from "./example";

describe('비동기 테스트', () => {
  
  test('async/await', async () => {
    const res = await asyncFn()
    expect(res).toBe('done!')
  }, 7000)
})