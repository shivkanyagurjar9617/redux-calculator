import { ADDITION, CLOSE, DIVISION, MULTIPLICATION, NUMBER, RESULT, SUBTRACTION } from "./constent";

export const rootReducer = (initialState,action)=>{
    let newState = initialState
    switch(action.type){
        case ADDITION:
          
            newState.operator = ADDITION
            
           console.log(action.type)
              return{
                ...newState,
                result:action.type
              }   
                


                
               
             
           
           
         //break;
        case SUBTRACTION:
            console.log(newState)
            newState.operator = SUBTRACTION
            return{
                ...newState,
                result:action.type
              }   
            
        // break;
        case DIVISION:
            console.log(newState)
            newState.operator = DIVISION
            return{
                ...newState,
                result:action.type
              }   
            
         //break;
        case MULTIPLICATION:
            newState.operator = MULTIPLICATION
            return{
                ...newState,
                result:action.type
              }   
         //break;
        case CLOSE:
            console.log(newState)
            return {
                ...newState,
                result:0,
                leftValue:'',
                operator:'',
                rightValue:'',
                
                
            }
            
         break;
        case RESULT:
         switch(newState.operator){
            case ADDITION:
           // newState.result = newState.leftValue + newState.rightValue
                return{
                    ...newState,
                    result: newState.leftValue + newState.rightValue
                }
              //break;
            case SUBTRACTION:
                //newState.result = newState.leftValue - newState.rightValue
                return{
                    ...newState,
                    result : newState.leftValue - newState.rightValue
                }
             //// break;
            case DIVISION:
                //newState.result = newState.leftValue / newState.rightValue
                return {
                    ...newState,
                    result: newState.leftValue / newState.rightValue
                }
              break;
            case MULTIPLICATION:
                //newState.result = newState.leftValue * newState.rightValue
                return {
                    ...newState,
                    result: newState.leftValue * newState.rightValue
                }
                
                
              //break;     


            }
         //break;
        case NUMBER:
            console.log(action.num)
            
           if(newState.operator===''){
            if(newState.leftValue ===''){
               newState.leftValue = parseInt(action.num)

            }else{
                newState.leftValue = parseInt(newState.leftValue+action.num)
               
            }


            }else{
             if(newState.rightValue===''){
                newState.rightValue = parseInt(action.num)


            }else{
                newState.rightValue = parseInt(newState.rightValue+action.num)
            }
            }
            return {
                ...newState,
                
                 result : action.num
            }
            
         break;


    }
    return newState
  }