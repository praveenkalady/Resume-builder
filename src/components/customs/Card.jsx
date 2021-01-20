import React from 'react';
import { Link } from 'react-router-dom';
import { deleteResume } from '../../actions/resumeActions';
import { connect } from 'react-redux';

function Card({ resume:{id,data:{ name,email,address } },deleteResume }) {
    return (
            <div className="col-sm-6 col-md-4 col-lg-4 p-3 ">
                <div className="shadow-lg p-3 ">
                    <h5 className="text-center">{name}</h5>
                    <h6>{email}</h6>
                    <p className="text-muted">{address}</p>
                    <div className="d-flex justify-content-around">
                        <Link to={`/resumes/${id}`} className="btn btn-primary btn-sm">View</Link>
                        <button onClick={()=>deleteResume(id)} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                </div>
            </div>
    )
}

export default connect(null,{ deleteResume })(Card)
