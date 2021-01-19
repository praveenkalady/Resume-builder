import React,{ useEffect } from 'react';
import { useForm,useFieldArray } from 'react-hook-form';
import TextField from './TextField';


function AddExperience({ control }) {
    const { errors } = useForm();
    const { fields,append} = useFieldArray(
        {
          control,
          name: "experience"
        }
      );
      useEffect(()=>{
        append({name:'experience'})
    },[append])
    return (
        <>
        <div className="col-sm-12 col-md-12 col-lg-12">
        {fields.map((item,index)=>(
            <React.Fragment key={index}>
            <TextField  errors={errors} required="Education is required !" control={control} placeholder="Add your experience" name={`experience[${index}].name`} type="text" label="Experience"/>
            </React.Fragment>
        ))}
        <div className="d-flex justify-content-end">
                <button className="btn btn-primary btn-sm" onClick={()=>append({name:'experience'})} >add more</button>
            </div>
        </div> 
        </>
    )
}

export default AddExperience;
