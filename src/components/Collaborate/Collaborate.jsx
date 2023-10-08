import collaborate from "../../assets/collaborate.png"
import card1 from "../../assets/card-1.png"
import card2 from "../../assets/card-2.png"
import card3 from "../../assets/card-3.png"

const Collaborate = () => {
    return (
        <div>
            {/* collaborate section */}
            <div className="md:flex gap-10 py-10 bg-yellow-200 items-center px-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl font-black text-gray-950 pb-4">Collaborate From Anywhere</h3>
                    <p className="text-base text-gray-900">Put an end to organizational silos, chaotic data operations and disjointed audience experiences. With ON24, your go-to-market teams can use one platform for digital engagement and get a clear understanding of your audience.</p>
                </div>
                <div className="md:w-1/2">
                    <img src={collaborate} alt="" />
                </div>
            </div>

            {/* about us section */}
            <div className="pt-20 pb-14">
                <h3 className="text-3xl text-white font-semibold pb-12 text-center">What makes our conference different?</h3>
                {/* cards */}
                <div className="grid lg:grid-cols-3 gap-6 text-white">
                    <div className="card">
                        <figure><img className="h-60" src={card1} alt="Largest Global Technology" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Largest Global Technology</h2>
                            <p className="text-md text-gray-300">If you are a beginner, these blogs are for you. Focusing on the latest news and internet products, this site has garnered more than 37 million views.</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure><img className="h-60" src={card2} alt="Unlimited Customization" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Unlimited Customization</h2>
                            <p className="text-md text-gray-300">Unlimited Customization is tailor-made for your brand, product or company, they are specially created for your target audience giving you an extra edge from your rivals.</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure><img className="h-60" src={card3} alt="Easy Browser Access" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Easy Browser Access</h2>
                            <p className="text-md text-gray-300">The browser engine is what queries the rendering engine, and the rendering engine is what renders the requested web page—interpreting the HTML or XML documents.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collaborate;