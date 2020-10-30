import React from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from "redux";

function ResultsPage(props) {
    const surveys= props.surveys
    var youngest=120
    var oldest= 0
  
    const nummberOfSurveys=()=>{
       
        const count=surveys.length
        console.log(count)
        return count
    }
    const countAge=()=>{
        var age=0
        var sum=0
        const numberOfParticipants=surveys.length
        var ageAverage=0
            surveys.forEach(survey=>{
                age =survey.age
                sum=sum+Number(age)
                if(age<youngest){
                    youngest=age
                }
                if(age>oldest){
                    oldest=age
                }
            })

            ageAverage=sum/numberOfParticipants
            return ageAverage
    }
    return (
        <div className="results-div">
            <div className="row ">
                <div className="col-8 m-auto">
                    <ul class="list-group">
                        <li class="list-group-item">Total number of surveys: <b className="ml-4">{surveys?nummberOfSurveys():null}  </b></li>
                        <li class="list-group-item">Average age: <b className="ml-4">{surveys?countAge():null}</b> </li>
                        <li class="list-group-item">Oldest person who participated in survey <b className="ml-4">{oldest}</b></li>
                        <li class="list-group-item">Youngest person who participated in survey <b className="ml-4">{youngest}</b></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
        surveys:state.firestore.ordered.surveys,
    } 
}
export default compose(
    connect(mapStateToProps,null),
    firestoreConnect([
        {collection:'surveys'}
    ])
)( ResultsPage);
