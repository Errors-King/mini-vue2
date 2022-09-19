// function fn (...arg) {
//   console.log(typeof arguments, arguments, arg)
// }

// fn(2,3,4)


// function myPow (x, n) {
//   if (n === 0) {
//     return 1
//   } else {
//     return x * myPow(x, n - 1)
//   }
// }


// var name = 11
// function getName () {
//   let name = 12
//   console.log(this.name)
// }
// function fn () {
//   getName.call(this)
// }
// let obj = {
//   name: 14,
//   f: fn.bind(this)
// }
// obj.f()

// let a = {name: 'jj'}
// let b = {name: 'hh'}
// let obj = {}
// obj[a] = 123
// obj[b] = 456
// console.log(obj[a])

// function myPow (x, n) {
//   if (n === 0) {
//     return 1
//   } else {
//     if (n % 2) {
//       return x * myPow(x, (n - 1)/2) * myPow(x, (n - 1)/2)
//     } else {
//       return myPow(x, n/2) * myPow(x, n/2)
//     }
//   }
// }

// console.log(myPow(2, 3))


function Foo () {
  this.getName = function () {
    console.log(1)
  }
  return this
}
Foo.getName = function () {
  console.log(2)
}
Foo.prototype.getName = function () {
  console.log(5)
}
getName() //
function getName () {
  console.log(3)
}
var getName = function () {
  console.log(5)
}
getName() //
Foo.getName() //
getName() //
Foo().getName() //
getName() //
new Foo().getName() //
new new Foo().getName() //

