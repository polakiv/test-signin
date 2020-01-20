import React from "react";
import styles from "./FormsControls.module.css";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

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

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
		<div>
		{children}
		</div>
		{hasError && <span>{error}</span>}
        </div>
	)
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
export const renderTextField = (name, placeholder, validators, props = {}, type = {}, text = "" ) => (
    <div>
	<TextField 
	variant="outlined"
	margin="normal"
	required
	fullWidth 
	label="Ваш email"
	placeholder={placeholder}
	name={name}
	validate={validators} 
	{...props}
	/> {text}
	</div>
)
export const renderTextFieldPass = (name, placeholder, validators, props = {}, type = {}, text = "" ) => (
    <div>
	<TextField 
	variant="outlined"
	margin="normal"
	required
	fullWidth
	label="Пароль"
    type="password"  
	autoFocus
	placeholder={placeholder}
	name={name}
	validate={validators} 
	{...props}
	/> {text}
	</div>
)
export const renderTextFieldCheck = () => (
    <div>
	 <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />
	</div>
)

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
	<Field placeholder={placeholder} name={name}
	component={renderTextField} 
	validate={validators} 
	
	{...props}
	/> {text}
    </div>
)