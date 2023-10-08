
import contact from "../../assets/contact-banner.png"
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AnyReactComponent = ({ text }) => <div><FaMapMarkerAlt className="bg-red-800 text-2xl"></FaMapMarkerAlt></div>;

const ContactMain = () => {

    const defaultProps = {
        center: {
            lat: 23.822350,
            lng: 90.365417
        },
        zoom: 11
    };


    return (
        <div>
            {/* banner */}
            <div className="hero min-h-[50vh] bg-no-repeat" style={{ backgroundImage: `url(${contact})`, backgroundSize: 'contain' }}>
                <div className="hero-overlay bg-opacity-80 bg-black">
                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl lg:text-6xl font-bold uppercase">Contact Us</h1>
                    </div>
                </div>
            </div>


            {/* contact us page main content */}
            <div className="md:flex bg-base-200 py-12">
                <div className="hero min-h-[70vh] bg-base-200 w-full lg:w-2/3">
                    <div className="w-full lg:w-3/4 max-auto">
                        <div className="card w-full">
                            <form className="card-body pt-0 mt-0">
                                <h2 className="text-3xl pb-3 text-center lg:text-left">Get in Touch</h2>
                                <div className="form-control">
                                    <input type="text" placeholder="Name" className="input input-bordered bg-[#0f0f0f]" name="name" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Email" className="input input-bordered bg-[#0f0f0f]" name="email" required />
                                </div>
                                <div className="form-control">
                                    <textarea placeholder="How can we help you?" className="input h-36 input-bordered bg-[#0f0f0f]" name="" id="" cols="30" rows="6"></textarea>
                                </div>
                                <button className="bg-[#fffb05] text-lg text-black px-4 py-1 rounded border-r-2 border-b-2 border-gray-950 w-3/5 lg:w-2/5 mx-auto lg:mx-0">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bg-base-200 lg:pr-20 w-full lg:w-1/3 text-center lg:text-left">
                    <h2 className="text-3xl pb-5 lg:mr-3">Let's Talk</h2>
                    <hr className="w-32 mx-auto lg:mx-0 h-[2px] bg-yellow-600 mb-6" />
                    <h2 className="text-xl pb-3">Our Address</h2>
                    <p className="text-sm">Road 8, <br />Mirpur 12, <br /> Dhaka 1216, <br />Bangladesh</p>
                    <br />
                    <p className="text-sm">Phone: <span className="text-yellow-300"> +1 123-156-7390</span></p>
                    <p className="text-sm">Email: <span className="text-yellow-300"> tania@gmail.com</span></p>

                </div>
            </div>

            
        </div>
    );
};

export default ContactMain;