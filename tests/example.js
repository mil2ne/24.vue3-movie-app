export function asyncFn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('done!')
    }, 6000)
  })
}