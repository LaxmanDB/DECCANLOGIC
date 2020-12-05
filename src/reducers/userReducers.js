const initialState ={
    data:{},
    loading:true
}

 export const reducer =(state = initialState,action)=>{
    if(action.type === "EVENT_REGISTER_REQUEST"){
        return{
            ...state,  
            data:action.payload, 
        }

    }

 }