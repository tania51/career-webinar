import collaborate from "../../assets/collaborate.png"
import blog from "../../assets/blog/blog.jpg"
import blog2 from "../../assets/blog/blog2.jpg"
import blog3 from "../../assets/blog/blog3.jpg"
import blog4 from "../../assets/blog/blog4.jpg"
import blog5 from "../../assets/blog/blog5.jpg"
import blog6 from "../../assets/blog/blog6.jpg"
import blog8 from "../../assets/blog/blog8.jpg"
import blog9 from "../../assets/blog/blog9.jpg"
import blog10 from "../../assets/blog/blog10.jpg"

const BlogMain = () => {
    return (
        <div className="py-14">
            {/* collaborate section */}
            <div className="flex gap-10 bg-yellow-200 items-center px-10">
                <div className="w-1/2">
                    <h3 className="text-3xl font-black text-gray-950 pb-4">Collaborate From Anywhere</h3>
                    <p className="text-base text-gray-900">Put an end to organizational silos, chaotic data operations and disjointed audience experiences. With ON24, your go-to-market teams can use one platform for digital engagement and get a clear understanding of your audience.</p>
                </div>
                <div className="w-1/2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lxvKgxw-P-4?si=n11zbzxEqxrWdUAr" allowfullscreen></iframe>
                </div>
            </div>
            {/* blog cards */}
            <div className="px-10 pt-14 pb-10">
                <h2 className="text-4xl font-bold text-center pb-14">Our Blog</h2>
                <div className="grid grid-cols-3 gap-6">
                    <div className="card shadow-xl border-r border-b border-yellow-400">
                        <figure><img className="h-52 w-full" src={blog} alt="Lead Generation" /></figure>
                        <div className="card-body">
                            <p>Maciej Biegajewski | 21.08.2023</p>
                            <h2 className="card-title">Live Webinars in your Lead Generation strategy!</h2>
                            <div className="card-actions justify-end">
                                <button className="text-yellow-400">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl border-r border-b border-yellow-400">
                        <figure><img className="h-52 w-full" src={blog2} alt="Lead Generation" /></figure>
                        <div className="card-body">
                            <p>Maciej Biegajewski | 21.08.2023</p>
                            <h2 className="card-title">Live Webinars in your Lead Generation strategy!</h2>
                            <div className="card-actions justify-end">
                                <button className="text-yellow-400">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl border-r border-b border-yellow-400">
                        <figure><img className="h-52 w-full" src={blog3} alt="Lead Generation" /></figure>
                        <div className="card-body">
                            <p>Maciej Biegajewski | 21.08.2023</p>
                            <h2 className="card-title">Live Webinars in your Lead Generation strategy!</h2>
                            <div className="card-actions justify-end">
                                <button className="text-yellow-400">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl border-r border-b border-yellow-400">
                        <figure><img className="h-52 w-full" src={blog4} alt="Lead Generation" /></figure>
                        <div className="card-body">
                            <p>Maciej Biegajewski | 21.08.2023</p>
                            <h2 className="card-title">Live Webinars in your Lead Generation strategy!</h2>
                            <div className="card-actions justify-end">
                                <button className="text-yellow-400">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl border-r border-b border-yellow-400">
                        <figure><img className="h-52 w-full" src={blog5} alt="Lead Generation" /></figure>
                        <div className="card-body">
                            <p>Maciej Biegajewski | 21.08.2023</p>
                            <h2 className="card-title">Live Webinars in your Lead Generation strategy!</h2>
                            <div className="card-actions justify-end">
                                <button className="text-yellow-400">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl border-r border-b border-yellow-400">
                        <figure><img className="h-52 w-full" src={blog6} alt="Lead Generation" /></figure>
                        <div className="card-body">
                            <p>Maciej Biegajewski | 21.08.2023</p>
                            <h2 className="card-title">Live Webinars in your Lead Generation strategy!</h2>
                            <div className="card-actions justify-end">
                                <button className="text-yellow-400">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl border-r border-b border-yellow-400">
                        <figure><img className="h-52 w-full" src={blog8} alt="Lead Generation" /></figure>
                        <div className="card-body">
                            <p>Maciej Biegajewski | 21.08.2023</p>
                            <h2 className="card-title">Live Webinars in your Lead Generation strategy!</h2>
                            <div className="card-actions justify-end">
                                <button className="text-yellow-400">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl border-r border-b border-yellow-400">
                        <figure><img className="h-52 w-full" src={blog9} alt="Lead Generation" /></figure>
                        <div className="card-body">
                            <p>Maciej Biegajewski | 21.08.2023</p>
                            <h2 className="card-title">Live Webinars in your Lead Generation strategy!</h2>
                            <div className="card-actions justify-end">
                                <button className="text-yellow-400">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl border-r border-b border-yellow-400">
                        <figure><img className="h-52 w-full" src={blog10} alt="Lead Generation" /></figure>
                        <div className="card-body">
                            <p>Maciej Biegajewski | 21.08.2023</p>
                            <h2 className="card-title">Live Webinars in your Lead Generation strategy!</h2>
                            <div className="card-actions justify-end">
                                <button className="text-yellow-400">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogMain;