import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { getResumeWithId } from '../../actions/resumeActions';

function ResumeDetails({ getResumeWithId,match,resume}) {
    useEffect(()=>{
        const id = match.params.id;
        if(id){
            getResumeWithId(id);
        }
    },[match.params.id])
    return (
        <div className="d-flex justify-content-center">
            {resume &&
                <div className="card" style={{width:'50rem'}}>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-3 bg-warning p-3">
                        <h4>{resume.data.name}</h4>
                        <h6 className="pb-2">{resume.data.experience[0].name}</h6>
                        <hr></hr>
                        <h5 className="text-center">SKILLS</h5>
                        <ul className="list-group list-group-flush">
                            {resume.data.skills.map((item,i)=>(
                                <li key={i} className="list-group-item list-group-item-warning">{item}</li>
                            ))}
                        </ul>
                        <h5 className="text-center pt-2">EDUCATION</h5>
                            <ul className="list-group  list-group-flush">
                            {resume.data.education.map((item,i)=>(
                                <li key={i} className="list-group-item list-group-item-warning">{item.name}</li>
                            ))}
                            </ul>
                            <h5 className="text-center pt-2">EXPERIENCE</h5>
                            <ul className="list-group  list-group-flush">
                            {resume.data.experience.map((item,i)=>(
                                <li key={i} className="list-group-item list-group-item-warning">{item.name}</li>
                            ))}
                            </ul>
                            <h5 className="text-center py-2">PERSONAL INFO</h5>
                            <ul className="list-group  list-group-flush">
                                <li className="list-group-item list-group-item-warning">{resume.data.email}</li>
                                <li className="list-group-item list-group-item-warning">{resume.data.address}</li>
                                <li className="list-group-item list-group-item-warning">{resume.data.phone}</li>
                            </ul>
                        </div>
                        <div className="col-sm-8 col-md-9 col-lg-9 p-3">
                            <h3>SUMMARY</h3>
                            <hr></hr>
                            <p className="lead">{resume.data.summary}</p>
                            <h3>EDUCATION DETAILS</h3>
                            <hr></hr>
                            {resume.data.advanced.map((item,i)=>(
                                <p key={i} >{item.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default connect(((state,props)=>({
    resume:state.resume.single
})),{ getResumeWithId })(ResumeDetails);
