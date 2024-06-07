// const myArray = ["Aman","manny","kizie",67,true]

//             //    0      1        2      3   4
// console.log(myArray)



// const myArray = new Array("Manny","Kizie",78,67,true)

// console.log(myArray)


// const myArray = ["Aman","manny","kizie",67,true]

// // const arrayOflength = myArray.length

// // console.log(arrayOflength)

// const strOfArray = myArray.toString()

// console.log(strOfArray + " Type :- "+typeof(strOfArray))


// const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

// const removevalue = myArray.pop()

// console.log(myArray)
// console.log("Remove value :- "+removevalue)

// myArray.push("Aman")
// console.log(myArray)

//  const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

//  const RemoveValue = myArray.shift()

//  console.log(myArray)
//  console.log("Remove Value :- "+RemoveValue)

// myArray.unshift("Swastik")


// const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

// const secondArray = [63,3,3,3,3,3,4,4]

// const JoinOfArray = myArray.join("+")

// console.log(JoinOfArray + " TYpe :- "+typeof(JoinOfArray))

// const allType = myArray.concat(secondArray)

// console.log(allType)


// const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

// myArray.splice(2,4,"6",98,67,56)


// console.log(myArray)

// myArray.splice(1,1,"aman")

// console.log(myArray)


// const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

// const newArray = myArray.slice(1,4)


// console.log(myArray)
// console.log(newArray)

// const myArray = [7,6,4,5,3,8,9,1]

// const ArrangeOfArray = myArray.sort()

// console.log(ArrangeOfArray)


//  const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

// myArray[1] = "Aman"
// myArray[4] = "Hello"



// //  console.log(VAlue)

//  console.log(myArray)

// const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

//  delete myArray[2]

//  console.log(myArray)


// const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

// myArray.forEach((value,index)=>{
//     console.log(value + " Index :- "+index)
// })

// function add(value,index){
//     console.log(value)
// }

// myArray.forEach(add)

// const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

// myArray.map((value,index)=>{
//     console.log(value + " Key :- "+ index)
// })

//  const myArray = ["Manny","Kizie","Daisy","Devanshu",76,56,45]

//  const valueOfArray = myArray.forEach((value,index)=>{
//     return value
//  })

//  console.log(valueOfArray)

// const myValue = myArray.map((value,index)=>{
//     return value
// })

// console.log(myValue)


const myArray = [3,4,55,4,3,356,54,3,22,44,56,54]

const filterOfArray = myArray.filter((value,index)=>{
    return value>50
})

console.log(filterOfArray)






