import banner from "../../assets/banner.jpg"
import Navbar from "../../components/Navbar/Navbar";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-90 bg-black">
                    <Navbar></Navbar>
                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl md:text-5xl mt-16 md:mt-0 font-bold">Advanced Webinar Platform</h1>
                        <p className="mb-5">Create webinars, virtual events and personalized content experiences that drive engagement and deliver revenue growth.</p>
                        <button className="bg-[#fffb05] text-lg text-black px-4 py-1 rounded border-r-2 border-b-2 border-gray-950">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;