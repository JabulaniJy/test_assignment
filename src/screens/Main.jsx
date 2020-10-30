import React from 'react'
import SelectionPage from './pages/SelectionPage'
import SurveyPage from './pages/SurveyPage'
import ResultsPage from './pages/ResultsPage'
import {Switch,Route} from 'react-router-dom'


function Main() {
    return (
        <div className="container">
            <Switch>
                <Route exact path='/' component={SelectionPage}/>
                <Route exact path='/survey' component={SurveyPage}/>
                <Route exact path='/results' component={ResultsPage}/>
            </Switch>
        </div>
    )
}

export default Main
