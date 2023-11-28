import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";


import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { authContext } from '../../providers/AuthProvider';
import app from '../../firebase/firebase.config';
import Navigationbar from '../../components/Navbar/Navbar';
import { Input } from '@material-tailwind/react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';







const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');

    // Destructure from context api
    const { createUser } = useContext(authContext);
    const axiosPublic = useAxiosPublic()

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
                const userInfo ={
                    Name: result.user?.displayName,
                    ContactEmail: result.user?.email
                }
                axiosPublic.post('/biodatas', userInfo)
                .then(res => {
                    console.log(res)
                })

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

                const userInfo = {
                    Name: name,
                    ContactEmail: user.email
                }
                axiosPublic.post('/biodatas', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    
                                }
                            })
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
                    <div className='px-10 pt-10 mx-auto space-y-2'>
                        <div className="form-control space-y-2">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label><br />
                            <Input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control space-y-2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label><br />
                            <Input type="text" placeholder="Enter your Photo url" name="photoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control space-y-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label><br />
                            <Input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control space-y-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label><br />
                            <Input type="password" placeholder="Enter password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <button className="btn my-5 bg-pink-400 w-full py-2 rounded-lg text-white">Register</button>
                        </div>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
                {
                    registerError && <p className="text-red-800 text-center">{registerError}</p>

                }
                {
                    registerSuccess && toast("User created Successfully")
                }
                <div className='max-w-xs mx-auto flex gap-3 items-center justify-center pb-2 border border-pink-200 rounded-xl mb-3 py-2'><FaGoogle className='text-pink-400'></FaGoogle><button onClick={handleGoogleLogin} className='btn text-pink-400'>  Log in with google</button></div>
                <p className="text-center pb-4">Already Have An Account ? <Link className="underline text-pink-400 font-semibold" to={"/login"}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
