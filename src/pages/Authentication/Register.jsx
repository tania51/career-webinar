import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Register = () => {
    const { signInWithGoogle, createUser } = useContext(AuthContext);

    const googleSignInHandeler = () => {
        signInWithGoogle()
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }

    const formHandeler = e => {
        e.preventDefault();
        console.log('form works');

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        if(!/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/.test(password)) {
            alert("password should be at least 6 characters, one uppercase and one special character");
        }
        else {
            createUser(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
        }
        
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-[70vh] bg-base-200">
                <div className="w-1/2 max-auto my-20">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={formHandeler} className="card-body">
                            <h2 className="text-3xl pb-3">Create Account</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />
                            </div>
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
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label mt-2">
                                    <p>Already have an account? please <Link to="/login" className="text-blue-600 hover:underline hover:text-blue-600 ml-1">Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="bg-[#dfdc37] text-lg text-black px-4 py-1 rounded">Create account</button>
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

export default Register;