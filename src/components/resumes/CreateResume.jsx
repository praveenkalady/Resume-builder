import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '../customs/TextField';
import AddEducation from '../customs/AddEducation';
import AddExperience from '../customs/AddExperience';
import AdvancedExperience from '../customs/AdvancedExperience';
import { connect } from 'react-redux';
import { addResume } from '../../actions/resumeActions';
import { useHistory } from 'react-router-dom';
import TextArea from '../customs/TextArea';
function CreateResume({ addResume }) {
    const { handleSubmit,control,errors,reset } = useForm();
    const history = useHistory();
    const submitForm = (data,e) => {
        const skills = data.skills.split(',');
        data.skills = skills;
        addResume(data);
        reset();
        history.push('/resumes')
    }
    return (
        <>
            <div className="shadow-lg p-5">
            <h2 className="text-center">Create Your Resume</h2>
            <form onSubmit={handleSubmit(submitForm)} className="d-flex flex-column">
                <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <TextField errors={errors} required="Name is required" control={control} placeholder="Enter your name" name="name" type="text" label="Name" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <TextField pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i} message="Please enter a valid email address" errors={errors} required="Email is required"  control={control} placeholder="Enter your email" name="email" type="text" label="Email" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                       <TextField errors={errors} required="Address is required" control={control} placeholder="Enter Your address" name="address" type="text" label="Address"/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                       <TextField pattern={/^([9]{1})([234789]{1})([0-9]{8})$/} message="Please enter a valid mobile number !" errors={errors} required="Mobile number is required !" control={control} placeholder="Enter your mobile" name="phone" type="number" label="Phone"/>
                    </div>
                        <AddEducation control={control} />
                        <AddExperience control={control} />
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <TextField  control={control} placeholder="Enter your skills please provide a (,) comma after each Skill" name="skills" type="text" label="Skills"/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <AdvancedExperience control={control}/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <TextArea   control={control} placeholder="Write summary about you" name="summary" type="text" label="Summary"/>
                    </div>
                </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                        <input type="submit" value="Submit" className="btn btn-dark"/>
                </div>
            </form>
            </div>
        </>
    )
}

export default connect(null,{ addResume })(CreateResume);
