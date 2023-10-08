import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center space-y-2 px-10 md:px-0">
                <h2 className="text-3xl lg:text-4xl font-bold">Opps!! Page not found</h2>
                <h3 className="text-xl lg:text-2xl font-semibold">Don't worry. Go to home page by click this button</h3>
                <Link to="/"><button className="bg-[#dfdc37] mt-5 text-lg text-black px-4 py-1 rounded">Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;