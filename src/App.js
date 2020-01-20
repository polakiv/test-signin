import React, { Component } from 'react';
import './App.css'; 
import { HashRouter, Route, withRouter } from "react-router-dom";
  
import LoginPage from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer"; 
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }, 
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    }, 
}));
  
class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() { 

        return (
            <Grid className='app-wrapper'> 
                <Grid className='app-wrapper-content'> 
                    <Route exact path='/'
                        render={() => <LoginPage />} /> 
                </Grid>
            </Grid>
        )
    } 
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const JSApp = (props) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter> 
}

export default JSApp;
