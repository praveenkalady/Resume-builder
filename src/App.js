import React from 'react';
import Navbar from './components/layouts/Navbar';
import CreateResume from './components/resumes/CreateResume';
import EditResume from './components/resumes/EditResume';
import ViewResume from './components/resumes/ViewResume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/layouts/Footer';

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                    <div className="container p-3">
                    <Switch>
                        <Route exact path="/create" component={CreateResume}/>
                        <Route exact path="/edit" component={EditResume}/>
                        <Route exact path="/view" component={ViewResume}/>
                    </Switch>
                    </div>
                <Footer/>
            </Router>
        </>
    )
}

export default App;
