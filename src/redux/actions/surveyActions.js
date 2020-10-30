export const addSurvey=(response)=>{
    return(dispatch,getState,{getFirebase})=>{

        const firestore = getFirebase().firestore();
        firestore.collection('surveys').add({
            ...response,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'ADD_SURVEY',response})
        }).catch((err)=>{
            dispatch({type:'ADD_SURVEY_ERROR',err})
        })
    }
}