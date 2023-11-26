import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";


import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { authContext } from '../../providers/AuthProvider';
import app from '../../firebase/firebase.config';
import Navigationbar from '../../components/Navbar/Navbar';







const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');

    // Destructure from context api
    const { createUser } = useContext(authContext);


    const visitLocation = useLocation();

    const navigate = useNavigate();

    // For googlr creating provider
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                console.log(user);
                toast('Login Successfully')

                //  nevigate after log in
                navigate(visitLocation?.state ? visitLocation.state : '/')

            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoUrl, email, password);
        // reset
        setRegisterError('');
        setRegisterSuccess('');

        // password validation

        if (password.length < 6) {
            setRegisterError('Password should be minimum 6 charecter');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should contain at least one Uppercase Charecter');
            return;
        }
        else if (!/[@#$%^&*]/.test(password)) {
            setRegisterError('Password should contain at least one Special Charecter');
            return;
        }

        // Create user
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                // set
                setRegisterSuccess('User created successfully')
                // Navigate user after registration
                navigate(visitLocation?.state ? visitLocation.state : '/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setRegisterError(errorMessage);
            });



    }

    return (
        <div>
            <Navigationbar></Navigationbar>
            <div className="max-w-lg shadow-xl shadow-red-300 mx-auto">
                <h2 className="text-center mt-5 pt-8 text-4xl font-semibold">Register your account </h2>
                <form onSubmit={handleRegister} className="card-body mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your Photo url" name="photoUrl" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white">Register</button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
                {
                    registerError && <p className="text-red-800 text-center">{registerError}</p>

                }
                {
                    registerSuccess && toast("User created Successfully")
                }
                <div className='flex items-center justify-center pb-2'><button onClick={handleGoogleLogin} className='btn text-red-400'> <FaGoogle></FaGoogle> Log in with google</button></div>
                <p className="text-center pb-4">Already Have An Account ? <Link className="underline text-red-400 font-semibold" to={"/login"}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
