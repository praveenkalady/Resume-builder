import { ADD_RESUME,GET_RESUME,GET_ONE_RESUME,DELETE_RESUME } from './types';
import db from '../firebase';
import { v4 as uuid } from 'uuid';


export const addResume = (resume) => async dispatch => {
    const id = uuid();
    await db.collection('resume').doc(id).set(resume);
    const res = await db.collection('resume').doc(id).get();
    const payload = ({id: res.id,data: res.data()})
    dispatch({
        type:ADD_RESUME,
        payload
    })
}

export const getResumes = () => async dispatch => {
    const data =  db.collection('resume');
    const resumes = await data.get('resumes');
    let payload = [];
    for(const doc of resumes.docs){
        payload.push({id: doc.id,data:doc.data()})
      }
    dispatch({
        type:GET_RESUME,
        payload
    })
}

export const getResumeWithId = (id) => async dispatch => {
    dispatch({
        type:GET_ONE_RESUME,
        payload:id
    })
    
}

export const deleteResume = (id) => async dispatch => {
    await db.collection('resume').doc(id).delete();
    dispatch({
        type:DELETE_RESUME,
        payload:id
    })
}