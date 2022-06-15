// print utility
const print = (value) => console.log(value)

// user scores
const scores = [99 ,80, 77, 86, 76, 50, 33, 76, 90, 54, 66, 76]

// TODO: IDENTIFY THE TIME COMPLEXITY OF THE FOLLOWING ARRAY METHODS
// 1: PUSH
scores.push(25)

// 2: POP
scores.pop()

// 3: UNSHIFT
scores.unshift(88)

// 4: forEach
// scores.forEach((element) => {print(element)})


// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LINEAR TIME COMPLEXITY
const findValueLinear = (value) => {
    let index = -1
    let indices = []
    for(let i = 0; i < scores.length; i++){
       // print(`index: ${i}`)
        const currValue = scores[i]
        if(currValue === value){
            indices.push(i)
            index = indices
        }
    }
    return index
    // return the index of the value if present, return -1 if absent
}



const findValueLinearWhile = (value) => {

    let i = 0
    while(i < scores.length){
        if(scores[i] === value){
            return i
        }
        i++
    }
    return -1    
    // return the index of the value if present, return -1 if absent
}


 print(`190 is at index: ${findValueLinearWhile(190)}`)
 print(`766 is at index: ${findValueLinear(766)}`)


// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LOGARITHMIC TIME COMPLEXITY
const findValueLog = (value) => {
    // return the index of the value if present, return -1 if absent
}

// print(`90 is at index: ${findValueLog(90)}`)
// print(`88 is at index: ${findValueLog(88)}`)