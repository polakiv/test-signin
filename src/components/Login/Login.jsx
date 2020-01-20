
import React, { Component } from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, renderTextField, renderTextFieldPass, renderTextFieldCheck, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"


import Avatar from '@material-ui/core/Avatar';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link'; 
import Box from '@material-ui/core/Box'; 
import Typography from '@material-ui/core/Typography'; 
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';  
import Grid from '@material-ui/core/Grid'; 


function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
		{'Copyright © '}
		<Link color="inherit" href="https://material-ui.com/">
        Your Website
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
		</Typography>
	);
}
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
	}, 
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
	}, 
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const LoginForm = ({handleSubmit, error}) => {
    return (<Grid>
		<Container component="main" maxWidth="xs">
		<CssBaseline />
		<Grid className="paper"> 
        <Typography component="h1" variant="h5">
		Вход в аккаунт
        </Typography>
		<Avatar><LockOutlined /></Avatar>
        <form onSubmit={handleSubmit}>
		{renderTextField("Email", "Email", [required], Input)}
		{renderTextFieldPass("Password", "password", [required], Input, {type: "password"})}
		{renderTextFieldCheck(null, "Запомнить меня", [], Input, {type: "checkbox"}, "Запомнить меня")}
		
		{error && <Grid className={style.formSummaryError}>
			{error}
            </Grid>
		}
		<Grid>
		<Button
		type="submit"
		fullWidth
		variant="contained"
		color="primary"
		className="submit"
		>
		Войти
		</Button>
		</Grid>
		<Grid item>
		<Link href="/signup" variant="body2">
		{"У вас нет аккаунта? Давайте сделаем!"}
		</Link>
		</Grid>
        </form>
		
		 
		</Grid>
		<Box mt={8}>
        <Copyright />
		</Box>
		</Container>
		</Grid>
	)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
	}
	
    if (props.isAuth) {
      //  return <Redirect to={"/profile"}/>
	}
	
    return <Grid> 
	<LoginReduxForm onSubmit={onSubmit}/>
    </Grid>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);