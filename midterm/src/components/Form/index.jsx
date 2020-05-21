import React, { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";

function Login(props) {
	const { errors, handleSubmit, register } = useForm();
	const { login } = useContext(AuthContext);

	const onSubmit = (data) => {
		console.log(data);
		if (data["login"] === "admin" && data["password"] === "admin") {
			login();
		} else {
			alert("try again to login");
		}
	};

	const formRef = useRef(null);
	return (
		<div className='row p-5 row-cols'>
			<form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
				<h2>if you want to see jokes login!</h2>
				<div className='form-group'>
					<label htmlFor='exampleInputEmail1'>login</label>
					<input
						type='text'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						name='login'
						ref={register({ required: true, minLength: 3 })}
					/>
					{errors.login && errors.login.type === "required" && (
						<small
							id='emailHelp'
							className='form-text'
							style={{ color: "red" }}>
							Input required
						</small>
					)}
					{errors.login && errors.login.type === "minLength" && (
						<small
							id='emailHelp'
							className='form-text'
							style={{ color: "red" }}>
							Min Length is 3
						</small>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='exampleInputPassword1'>Password</label>
					<input
						type='password'
						className='form-control'
						name='password'
						id='exampleInputPassword1'
						ref={register({ required: true })}
					/>
				</div>
				<div className='form-group form-check'>
					<input
						type='checkbox'
						className='form-check-input'
						name='saveMe'
						id='exampleCheck1'
						ref={register()}
					/>
					<label className='form-check-label' htmlFor='exampleCheck1'>
						Check me out
					</label>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Login;
