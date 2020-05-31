import React from 'react';
import { useForm } from "react-hook-form";
import "./Register.scss"

const Register = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <div className="container">
            <h1 className="display-4">FARMPRO</h1>
            <p className="lead">Eradicating hunger in Africa #Zero Hunger</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row padding">
                    <div className="col-md-12 col-lg-6">
                        <label>Firstname:</label>
                        <input type="text" name="firstname" ref={register({ required: true, pattern: { value: 364327843232774832 } })} className="form-control" placeholder="First name" />
                        {errors.firstname && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col">
                        <label htmlFor="other names">Other Names:</label>
                        <input type="text" name="name" ref={register({ required: true, pattern: { value: 3643278432327748 } })} className="form-control" placeholder="your other name" />
                        {errors.name && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <label>Phone Number:</label>
                        <input type="text" name="number" ref={register({ required: true, pattern: { value: 3643843232774832 } })} className="form-control" placeholder="eg 07********" />
                        {errors.number && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col">
                        <label htmlFor="other names">gender:</label>
                        <select id="input gender" className="form-control">
                            <option style={{ fontSize: "19px" }} value="1">male</option>
                            <option style={{ fontSize: "19px" }} value="2">female</option>
                            <option style={{ fontSize: "19px" }} value="3">Prefer not to say</option>
                        </select>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <label>Farm Type:</label>
                        <input type="text" name="farm" ref={register({ required: true, pattern: { value: 364327843232774832 } })} className="form-control" placeholder="e.g poultry" />
                        {errors.farm && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col">
                        <label htmlFor="other names">Country:</label>
                        <input type="text" name="country" ref={register({ required: true, pattern: { value: 3643278432327832 } })} className="form-control" placeholder="e.g Kenya" />
                        {errors.country && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <label>County/Province:</label>
                        <input type="text" name="county" ref={register({ required: true, pattern: { value: 4327843232774832 } })} className="form-control" placeholder="e.g Turkana" />
                        {errors.county && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col">
                        <label htmlFor="other names">Sub County:</label>
                        <input type="text" name="sub" ref={register({ required: true, pattern: { value: 43278432327732 } })} className="form-control" placeholder="e.g Kikuyu" />
                        {errors.sub && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <label>Ward:</label>
                        <input type="text" name="ward" ref={register({ required: true, pattern: { value: 4327843232774832 } })} className="form-control" placeholder="e.g Sigona" />
                        {errors.ward && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col">
                        <label htmlFor="other names">Location:</label>
                        <input type="text" name="location" ref={register({ required: true, pattern: { value: 4327843232774 } })} className="form-control" placeholder="e.g Kerwa" />
                        {errors.location && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <label>Sub-Location:</label>
                        <input type="text" name="SUB" ref={register({ required: true, pattern: { value: 43278432327732 } })} className="form-control" placeholder="e.g Kerwa" />
                        {errors.SUB && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col">
                        <label htmlFor="other names">Village:</label>
                        <input type="text" name="village" ref={register({ required: true, pattern: { value: 432784323277 } })} className="form-control" placeholder="e.g Kanduma" />
                        {errors.village && <p style={{ color: "red" }}>Field set cannot be empty</p>}
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <label>Type in a password:<p className="lead" style={{ color: "blue" }}>(atleast 8 characters)</p></label>

                        <input type="password" name="password" ref={register({ required: true, maxLength: 14, minLength: 8, pattern: { value: 432784323277 } })} className="form-control" placeholder="password" />
                        {errors.village && <p style={{ color: "red" }}>Enter a valid password</p>}
                    </div>
                </div>
                <button className="btn btn-lg btn-primary">Register</button>
            </form>
        </div>
    )
}
export default Register;