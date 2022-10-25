//same
function add(num1, num2){
    return num1+num2
  }
  
  const result = add(5,9)
  console.log('Named function result: ', result)
  
  //same
  const addNum = function(num1, num2){
    return num1+num2
  }
  const value = addNum(5,9)
  console.log('Anonymous function result: ', value)
  
  //same
  const addNumber = (num1,num2) =>{
    return num1 + num2
  }
  const addResult = addNumber(5,9)
  console.log ('Arrow function result: ', addResult)
  
  //same
  const addValue = (num1,num2) => num1+num2
  const addValueResult = addValue(5,9)
  console.log ('Arrow function result: ', addValueResult)
  
  //same
  const addTwo = (num1,num2) => num1 + num2
  console.log('AddTwo Arrow function result: ',addTwo(5,9))
  
  const noParams = ()=> 'Hello!'
  console.log(noParams('potato chips'))
  
  const oneParamV1 = (name) => 'Hihi!' + name
  console.log(oneParamV1(' d'))
  
  const oneParamV2 = name => "Heya!" + name
  console.log(oneParamV2('potato chips'))
  