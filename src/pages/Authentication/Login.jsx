import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const googleSignInHandeler = () => {
        console.log('google sign in works');
        signInWithGoogle()
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }

    const signInHandeler = e => {
        e.preventDefault();
        console.log('form works');

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Logged In !!',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(result.user)
                console.log(location.state);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    text: error,
                    color: 'red',
                    padding: '20px'
                })
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-[70vh] bg-base-200">
                <div className="lg:w-1/2 max-auto my-20">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={signInHandeler} className="card-body">
                            <h2 className="text-3xl pb-3">Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
                                <label className="label mt-2">
                                    <p>Do not have an account? <Link to="/register" className="text-blue-600 hover:underline hover:text-blue-600 ml-1">Create account</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="bg-[#dfdc37] text-lg text-black px-4 py-1 rounded">Login</button>
                            </div>
                        </form>
                    </div>

                    {/* authentication with google */}
                    <div>
                        <p className="text-center mt-4">-------------- Or --------------</p>
                        <div onClick={googleSignInHandeler} className="mt-5 glass py-2 rounded cursor-pointer">
                            <p className="text-white text-center flex items-center justify-evenly flex-row-reverse"><FcGoogle className="text-2xl"></FcGoogle><span className="text-yellow-400">Continue With Google</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;