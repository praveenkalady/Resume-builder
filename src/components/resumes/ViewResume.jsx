import React from 'react';
import { connect } from 'react-redux';
import  Card from '../customs/Card';
import { Link } from 'react-router-dom';


function ViewResume({ resumes }) {
    return (
        <>
            <div className="container-fluid"> 
                <div className="row">
                    {resumes.map((resume,i)=>(
                        <Card key={i} resume={resume}/>
                    ))}
                </div>
                {resumes.length <=0 &&
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                        <h5>You don't have any resumes yet !.</h5>
                        <Link to="/" className="btn btn-dark">Create</Link>
                    </div>
                }
            </div>
        </>
    )
}

export default connect((state,props)=>({
    resumes:state.resume.resume
}))(ViewResume);
