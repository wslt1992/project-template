import './style/index.scss'
// function greeter (person) {
//   return 'Hello, ' + person
// }

// const user = 'Jane User'

const a = () => {
  console.log('Jane function')
}

a()

const arr = [1, 2, 3, 4]
console.log(arr.includes(3))
function http () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          name: 'lt'
        }
      })
    }, 1000)
  })
}

http().then(data => {
  console.log('http:', data)
})
