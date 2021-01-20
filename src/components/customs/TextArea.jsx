import React from 'react';
import { Controller} from 'react-hook-form';
import classnames from 'classnames';


function TextArea({ name,type,label,control,placeholder,required,errors,pattern,message }) {
    return (
        <>
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
           <Controller
                name={name}
                as={
                    <textarea rows="3" placeholder={placeholder} type={type} name={name} className={classnames('form-control',{'is-invalid': errors && errors[name] ? true : false})} value={''} />
                }
                control={control}
                defaultValue=""
                rules={{
                    required:required,
                    pattern:{
                        value:pattern,
                        message:message
                    }
                }}
           />
           </div>
           {errors &&
            <div className="invalid-feedback">
                {errors && errors[name] ? errors[name].message : null}
            </div>
            }
        </>
    )
}

export default TextArea;
