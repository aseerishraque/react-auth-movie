import React from "react";
import Input from "../common/input.component";
import Form from '../common/form.component';
import { login } from '../services/user-service';

class Login extends Form {
    state = {
        data: { 
            username: '', 
            password: '' 
        },
        errors: { username: '', password: '' }
    }

    doSubmit = async () => {
        const user = { username: this.state.data.username, password: this.state.data.password };

        try{
            await login(user);
            window.location = '/movies';
        }catch(error){
            console.log(error);
            const errors = {...this.state.errors};
            
            errors.username = 'Username may be incorrect.';
            errors.password = 'Password may be incorrect.';

            this.setState({...this.state, errors });
        }

    }

	render() {
		return (
			<div className="container w-50 mx-auto">
				<form onSubmit={this.handleSubmit}>
					<div className="mb-3">
                        <Input 
                            label="User Name"
                            name="username"
                            id="username"
                            type="text"
                            value={this.state.data.username}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
					</div>
					<div className="mb-3">
                        <Input 
                            label="Password"
                            name="password"
                            id="password"
                            type="password"
                            value={this.state.data.password}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
					</div>
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="remember"
						/>
						<label className="form-check-label" htmlFor="remember">
							Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
