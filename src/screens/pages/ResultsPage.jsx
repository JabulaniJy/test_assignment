import React from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from "redux";
import {NavLink} from 'react-router-dom';

function ResultsPage(props) {
    const surveys= props.surveys
    var countSurveys=0
    var youngest=120
    var oldest= 0
    var pizzaPercentage=0
    var pastaPercentage=0
    var papAndWorsPercentage=0
    var eatOutAvg=0
    var watchMoviesAvg=0
    var watchTvAvg=0
    var radioListenersAvg=0

    if (surveys){
    countSurveys=surveys.length

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
    const preferenceCount=()=>{
        var pizzaNumber=0
        var pastaNumber=0
        var papAndWorsNumber=0
       surveys.forEach(survey=>{
           const food= survey.favourite_food
           console.log(food)
            food.forEach(foodtype=>{
                if(foodtype==='pizza'){
                pizzaNumber++
            }else if(foodtype==='pasta'){
                pastaNumber++
            }else if(foodtype==='Pap and Wors'){
                papAndWorsNumber++
            }
            })
            
        })

        pizzaPercentage=pizzaNumber/countSurveys
        pastaPercentage=pastaNumber/countSurveys
        papAndWorsPercentage= papAndWorsNumber/countSurveys
    }

    const activitiesAvg=()=>{
        var eatOutSum=0
        var watchMoviesSum=0
        var watchTvSum=0
        var radioListenersSum=0
        surveys.forEach(survey=>{
            eatOutSum=eatOutSum+Number(survey.eat_out)
            watchMoviesSum=watchMoviesSum+Number(survey.watch_movies)
            watchTvSum=watchTvSum+Number(survey.watch_tv)
            radioListenersSum=radioListenersSum+Number(survey.radio)
        })

        eatOutAvg= eatOutSum/countSurveys
        watchMoviesAvg= watchMoviesSum/countSurveys
        watchTvAvg= watchTvSum/countSurveys
        radioListenersAvg= radioListenersSum/countSurveys
    }
    return (
        
        <div className="results-div mb-4">
            {surveys?preferenceCount():null}
            {surveys?activitiesAvg():null}
            <h3>Results</h3>
            <div className="row ">
                <div className="col-8 m-auto">
                    <ul class="list-group mb-4">
                        <li class="list-group-item">Total number of surveys: <b className="ml-4">{surveys?countSurveys:null}  </b></li>
                        <li class="list-group-item">Average age: <b className="ml-4">{surveys?countAge().toFixed(1):null}</b> </li>
                        <li class="list-group-item">Oldest person who participated in survey <b className="ml-4">{oldest}</b></li>
                        <li class="list-group-item">Youngest person who participated in survey <b className="ml-4">{youngest}</b></li>
                    </ul>

                    <ul class="list-group mb-4">
                        <li class="list-group-item">Percentage of people who like Pizza <b className="ml-4">{surveys?pizzaPercentage.toFixed(1):null}  </b></li>
                        <li class="list-group-item">Percentage of people who like Pasta: <b className="ml-4">{surveys?pastaPercentage.toFixed(1):null}</b> </li>
                        <li class="list-group-item">Percentage of people who like Pap and Wors:<b className="ml-4">{surveys?papAndWorsPercentage.toFixed(1):null}</b></li>
                    </ul>
                    <ul class="list-group mb-4">
                        <li class="list-group-item">People like to eat out: <b className="ml-4">{surveys?eatOutAvg.toFixed(1):null}  </b></li>
                        <li class="list-group-item">People like to watch movies: <b className="ml-4">{surveys?watchMoviesAvg.toFixed(1):null}</b> </li>
                        <li class="list-group-item">People like to watch TV: <b className="ml-4">{surveys?watchTvAvg.toFixed(1):null}</b></li>
                        <li class="list-group-item">People like to listen to the radio: <b className="ml-4">{surveys?radioListenersAvg.toFixed(1):null}</b></li>
                    </ul>
                </div>
            </div>
            <div className="row">
            <NavLink to='/' className="m-auto">
                <button  class="btn btn-ok btn-primary ">OK</button>
            </NavLink>
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
