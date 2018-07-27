import React, { Component } from 'react'

class Register extends Component {
    constructor(){
        super()
        this.state = {
             conentHere : "here is the text goes from modal"
        }
    }

    
    render() {

       
        return (
            <div className="main-login main-center col-md-4" >
                <h4>Register Now</h4>
                <form className="form-horizontal">

                        <div className="form-group">
							<label for="name" className="cols-sm-2 control-label">First Name</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="name" id="name"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

                         <div className="form-group">
							<label for="name" className="cols-sm-2 control-label">Last Name</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="name" id="lastname"  placeholder="Enter your Last Name"/>
								</div>
							</div>
						</div>
                   
                        <div className="form-group">
							<label for="name" className="cols-sm-2 control-label">Email ID</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email ID"/>
								</div>
							</div>
						</div>
                        <div className="form-group">
							<label for="name" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>
                        <div className="form-group">
							<label for="name" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="confirm password" id="confirmpassword"  placeholder="Re-enter your Password"/>
								</div>
							</div>
						</div>
                    <button type="submit" className="btn btn-danger">submit</button>

                </form>
            </div>


        )
    }
}
export default Register;
