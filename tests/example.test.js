import * as example from "./example";

describe('비동기 모의함수 테스트', () => {
  
  test('async/await', async () => {
    jest.spyOn(example, 'asyncFn')
      .mockResolvedValue('done!')
    const res = await example.asyncFn()
    expect(res).toBe('done!')
  }, 7000)
})