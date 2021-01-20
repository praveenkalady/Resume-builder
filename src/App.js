import React,{ useEffect } from 'react';
import Navbar from './components/layouts/Navbar';
import CreateResume from './components/resumes/CreateResume';
import ViewResume from './components/resumes/ViewResume';
import ResumeDetails from './components/resumes/ResumeDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import { connect } from 'react-redux';
import { getResumes } from './actions/resumeActions';
function App({ getResumes }) {
    useEffect(()=>{
        getResumes();
    },[])
    return (
        <>
            <Router>
                <Navbar/>   
                    <Switch>
                        <Route exact path="/" render={props=>(
                            <>
                                <div className="container p-3">
                                <CreateResume {...props}/>
                                </div>
                                <Footer/>
                            </>
                        )}/>
                        <Route exact path="/resumes" render={props=>(
                            <>
                            <div className="container p-3">
                                <ViewResume {...props}/>
                            </div>
                                <Footer bottom/>
                            </>
                        )}/>
                        <Route exact path="/resumes/:id" render={props=>(
                            <>
                                <div className="container p-3">
                                <ResumeDetails {...props}/>
                                </div>
                                <Footer/>
                            </>
                        )}/>
                    </Switch>
            </Router>
        </>
    )
}

export default connect(null,{ getResumes })(App);
