import React from 'react';
import { Link } from "react-router-dom";
import './Login.scss';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
    };
    return (
        <div className="container-fluid">
            <h1 className="display-4">FARMPRO</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="display-4" htmlFor="phone number">Phone Number:</label>
                    <input type="text" name="phone" ref={register({ required: true, pattern: { value: 364327843232774832784237, message: "invalid email" } })} className="form-control" placeholder="phone number" />
                    {errors.phone && <p style={{ color: "red" }}>Invalid phone number</p>}
                </div>
                <div className="form-group">
                    <label className="display-4" htmlFor="password">password:</label>
                    <p className="lead" style={{ color: "blue" }}>(Atleast 8 characters)</p>
                    <input type="password" name="password" ref={register({ required: true, maxLength: 14, minLength: 8, pattern: { value: 3643278432327748327842 } })} placeholder="password" className="form-control" />
                    {errors.password && <p style={{ color: "red" }}>Invalid password</p>}
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p className="lead"> Don't have an account?  <Link to="/register"><button type="button" className="btn btn-warning">Register</button></Link></p>
        </div>
    )
}
export default Login;