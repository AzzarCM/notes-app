import React from 'react'
import {Link} from "react-router-dom"
export const RegisterScreen = () => {
    return (
        <div>
            <h3 className="auth_title">Register</h3>
            <form>
                <input 
                    type="text"
                    placeholder="Name"
                    name="email"  
                    className="auth__input"
                />
                <input 
                    type="email"
                    placeholder="Email"
                    name="email"  
                    className="auth__input"
                />
                 <input 
                    type="password"
                    placeholder="Password"
                    name="password"  
                    className="auth__input"
                />
                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"  
                    className="auth__input"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Register
                </button>
            </form>
            <Link className="link" to="/auth/login">
                Already registered?
            </Link>
        </div>
    )
}
