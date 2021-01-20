import React,{ useEffect } from 'react';
import { useForm,useFieldArray } from 'react-hook-form';
import TextArea from './TextArea';


function AdvancedExperience({ control }) {
    const { errors } = useForm();
    const { fields,append} = useFieldArray(
        {
          control,
          name: "advanced"
        }
      );
      useEffect(()=>{
        append({name:'advanced'})
    },[append])
    return (
        <>
        <div className="col-sm-12 col-md-12 col-lg-12">
        {fields.map((item,index)=>(
            <React.Fragment key={index}>
            <TextArea  errors={errors} required="Add more details about experience" control={control} placeholder="Add more details about experience" name={`advanced[${index}].name`} type="text" label="Advanced Experience"/>
            </React.Fragment>
        ))}
        <div className="d-flex justify-content-end">
                <button className="btn btn-primary btn-sm" onClick={()=>append({name:'advanced'})} >add more</button>
            </div>
        </div> 
        </>
    )
}

export default AdvancedExperience;
