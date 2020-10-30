import React from 'react'
import {useFormik,Formik,Form,Field} from 'formik'
import {connect} from 'react-redux';
import {addSurvey} from '../../redux/actions/surveyActions'

function SurveyPage({addSurvey}) {
    const formik = useFormik({
        initialValues:{
        surname:'',
        firstnames:'',
        contact:'',
        favourite_food:[],
        eat_out:'',
        watch_movies:'',
        watch_tv:'',
        radio:''
        },
        onSubmit:values=>{
            console.log(values)
            addSurvey(values)  
                      //setredirectToReferrer(true)
        },
        validate:values=>{
            let errors ={}

            if(!values.surname){
                errors.surname="required"
            } else if(values.surname.length<3){
                errors.surname="minimum of 3 characters"
            }
            if(!values.firstnames){
                errors.firstnames="required"
            } else if(values.firstnames.length<3){
                errors.firstnames="minimum of 3 characters"
            }
            if(!values.contact){
                errors.contact="required"
            }else if(values.contact===!NaN ){
                errors.contact="should be digits"
            } else if(values.contact.length<10){
                errors.contact="should be 10 digits"
            }else if(values.contact.length>10 ){
                errors.contact="should be 10 digits"
            }
            if(!Date.parse(values.date)){
                errors.date="date is invalid"
              }
            if(!values.age){
                errors.age="required"
            } else if(values.age<5){
                errors.age="Age should be over 5 years"
            } else if(values.age>120){
                errors.age="Age should be less than 120"
            }


            return errors
        }
    })
    return (
        <div>
            <div className="row survey-div mb-4">
                <h2 className="col-12 mb-4">Take our survey</h2>
                
                <div className="col-10  m-auto">
                    <Formik
                    
                    >
                    <Form onSubmit={formik.handleSubmit}>
                        <h4>Personal Details</h4>
                        <div className="form-group row">
                            <label for="surname" className="col-2">Surname</label>
                            <input onChange={formik.handleChange} value={formik.values.surname} type="text" className="form-control col-6" id="surname" />
                            {formik.errors.surname ?<div  className=" col-4 text-danger bg-succes text-center">{formik.errors.surname}</div>:null}
                        </div>
                        <div className="form-group row">
                            <label for="firstnames" className="col-2">First names</label>
                            <input onChange={formik.handleChange} value={formik.values.firstnames} type="text" className="form-control col-6" id="firstnames" />
                            {formik.errors.firstnames ?<div  className="col-4 text-danger bg-succes text-center">{formik.errors.firstnames}</div>:null}
                        </div>
                        <div className="form-group row">
                            <label for="contact" className="col-2">Contact Number</label>
                            <input onChange={formik.handleChange} value={formik.values.contact} type="tel" className="form-control col-6" id="contact" />
                            {formik.errors.contact ?<div  className="col-4 text-danger bg-succes text-center">{formik.errors.contact}</div>:null}
                        </div>
                        <div className="form-group row">
                            <label for="date" className="col-2">Date</label>
                            <input onChange={formik.handleChange} value={formik.values.date} type="date" className="form-control col-6" id="date" />
                            {formik.errors.date ?<div  className="col-4 text-danger bg-succes text-center">{formik.errors.date}</div>:null}
                        </div>
                        <div className="form-group row">
                            <label for="age" className="col-2">Age</label>
                            <input onChange={formik.handleChange} value={formik.values.age} type="number" className="form-control col-2" id="age" />
                            {formik.errors.age ?<div  className="col-4 text-danger bg-succes text-center">{formik.errors.age}</div>:null}
                        </div>
                        <hr className="hr-style"/>
                        <p>What is your favourite food? (You can choose more than 1 answer)</p>
                        <div className="custom-control custom-checkbox ml-3">
                            <Field type="checkbox" className="custom-control-input" onChange={formik.handleChange}  checked={formik.value} value="pizza" name="favourite_food" id="pizza" />
                            <label className="custom-control-label" for="pizza">Pizza</label>
                        </div>

                        <div className="custom-control custom-checkbox ml-3">
                            <Field type="checkbox" className="custom-control-input" value="pasta"  onChange={formik.handleChange}  checked={formik.value} name="favourite_food" id="pasta"/>
                            <label className="custom-control-label" for="pasta">Pasta</label>
                        </div>
                        <div className="custom-control custom-checkbox ml-3">
                            <Field type="checkbox" className="custom-control-input" name="favourite_food"  onChange={formik.handleChange}  checked={formik.value} id="papAndWors" value="Pap and Wors"/>
                            <label className="custom-control-label" for="papAndWors">Pap and Wors</label>
                        </div>
                        <div className="custom-control custom-checkbox ml-3">
                            <Field type="checkbox" className="custom-control-input" name="favourite_food"  onChange={formik.handleChange}  checked={formik.value} id="chickenStirFry" value="Chicken stir fry"/>
                            <label className="custom-control-label" for="chickenStirFry">Chicken stir fry</label>
                        </div>
                        <div className="custom-control custom-checkbox ml-3">
                            <Field type="checkbox" className="custom-control-input" name="favourite_food"  onChange={formik.handleChange}  checked={formik.value} id="beefStirFry" value="Beef stir fry"/>
                            <label className="custom-control-label" for="beefStirFry">Beef stir fry</label>
                        </div>
                        <div className="custom-control custom-checkbox ml-3">
                            <Field type="checkbox" className="custom-control-input" name="favourite_food" onChange={formik.handleChange}  checked={formik.value} id="other" value="Other"/>
                            <label className="custom-control-label" for="other">Other</label>
                        </div>
                        <hr className="hr-style"/>
                        <p>On a scale of 1 to 5 indicate whether you strongly agree to strongly disagree</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"  className="text-center"></th>
                                    <th scope="col"  className="text-center">Strongly Agree (1)</th>
                                    <th scope="col"  className="text-center">Agree (2)</th>
                                    <th scope="col"  className="text-center">Neutral (3)</th>
                                    <th scope="col"  className="text-center">Disagree (4)</th>
                                    <th scope="col"  className="text-center">Strongly disagree (5)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">I like to eat out</th>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="eat_out" id="radio1" value="1"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" name="eat_out" id="radio2" onChange={formik.handleChange}  checked={formik.value} value="2"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" name="eat_out" id="radio3" onChange={formik.handleChange}  checked={formik.value} value="3"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" name="eat_out" id="radio4" onChange={formik.handleChange}  checked={formik.value} value="4"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" name="eat_out" id="radio5" onChange={formik.handleChange}  checked={formik.value} value="5"/>
                                        </div>
                                    </td>  
                                </tr>
                                <tr>
                                    <th scope="row">I like to watch movies</th>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_movies" id="radio1" value="1"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_movies" id="radio2" value="2"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_movies" id="radio3" value="3"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_movies" id="radio4" value="4"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_movies" id="radio5" value="5"/>
                                        </div>
                                    </td>    
                                </tr>
                                <tr>
                                    <th scope="row">I like to watch TV</th>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_tv" id="radio1" value="1"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_tv" id="radio2" value="2"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_tv" id="radio3" value="3"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_tv" id="radio4" value="4"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="watch_tv" id="radio5" value="5"/>
                                        </div>
                                    </td>    
                                </tr>
                                <tr>
                                    <th scope="row">I like to listen to the radio</th>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="radio" id="radio1" value="1"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="radio" id="radio2" value="2"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="radio" id="radio3" value="3"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="radio" id="radio4" value="4"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check d-flex justify-content-center">
                                            <input className="form-check-input " type="radio" onChange={formik.handleChange}  checked={formik.value} name="radio" id="radio5" value="5"/>
                                        </div>
                                    </td>    
                                </tr>

                            </tbody>
                        </table>
                        <div className="row">
                            <button type="submit" class="btn btn-primary m-auto">Submit</button>
                        </div>

                    </Form>
                    </Formik>
                </div>
            </div>
            
        </div>
    )
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addSurvey:(response)=>dispatch(addSurvey(response)),
    }
}
export default connect(null,mapDispatchToProps)(SurveyPage);

