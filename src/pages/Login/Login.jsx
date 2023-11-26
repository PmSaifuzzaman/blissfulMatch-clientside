import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { authContext } from '../../providers/AuthProvider';
import Navigationbar from '../../components/Navbar/Navbar';
import { Input } from '@material-tailwind/react';





const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [LoginSuccess, setLoginSuccess] = useState('');

    const { logIn } = useContext(authContext);
    const visitLocation = useLocation();

    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset
        setLoginError('');
        setLoginSuccess('');

        // log in user
        logIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)


                setLoginSuccess('User Logged in Successfully.')

                // Navigate after log in
                navigate(visitLocation?.state ? visitLocation.state : '/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setLoginError(errorMessage);
            });

    }
    return (
        <div>
            <Navigationbar></Navigationbar>
            <div className="max-w-sm shadow-2xl shadow-red-200 mx-auto ">
                <h2 className="text-center mt-5 pt-8 text-4xl font-semibold">Login your account </h2>
                <form onSubmit={handleLogIn} className="card-body  mx-auto">
                    <div className='px-10 pt-10 mx-auto'>
                        <div className="form-control space-y-2 mb-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label> <br />
                            <Input variant="outlined" type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label> <br />
                            <Input variant="outlined" type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control px-10 my-5">
                        <button className='w-full py-2 rounded-lg bg-pink-400 text-white'>Login</button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>

                {
                    loginError && <p className="text-red-800 text-center">Email or Password does not match</p>

                }
                {
                    LoginSuccess && toast("Login Successfully")
                }
                <p className="text-center pb-8">Do not Have An Account ? <Link className="underline text-pink-400 font-semibold" to={"/register"}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;