const surveyReducer =(state={},action)=>{
    switch(action.type){
        case 'ADD_SURVEY':
            console.log('Product added');
            return state
        case 'ADD_SURVEY_ERROR':
            console.log('Error adding product',action)
            break
        default:
            return state
    }
};

export default surveyReducer;