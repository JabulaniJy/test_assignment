import React from 'react'
import {NavLink} from 'react-router-dom';


function SelectionPage() {
    return (
        <div className=" row selection-div">
           <div className="col-8 m-auto align-self-center">
               <NavLink to='/survey'>
                    <div className="selection text-center bg-success mb-4">
                        <p className="">Take Survey</p> 
                    </div>
               </NavLink>
                <NavLink to='/results'>
                    <div className="selection text-center bg-success ">
                        <p>View Results</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default SelectionPage
