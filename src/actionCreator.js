import { ADDITION, CLOSE, DIVISION, MULTIPLICATION, NUMBER, RESULT, SUBTRACTION } from "./constent"

export const numberCreator = (num)=>{
    return{
        type:NUMBER,
        num:num
    }
}
export const additionCreator = ()=>{
    return{
        type:ADDITION
    }
}
export const subtractionCreator = ()=>{
    return{
        type:SUBTRACTION
    }
}
export const multiplicationtionCreator = ()=>{
    return{
        type:MULTIPLICATION
    }
}
export const divisionCreator = ()=>{
    return{
        type:DIVISION
    }
}
export const closeCreator = ()=>{
    return{
        type:CLOSE
    }
}
export const resultCreator = ()=>{
    return{
        type:RESULT
    }
}