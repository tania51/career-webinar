import webinar from "../../assets/webinars/webinar.jpg"
import webinar2 from "../../assets/webinars/webinar2.jpg"
import webinar3 from "../../assets/webinars/webinar3.png"
import webinar4 from "../../assets/webinars/webinar4.png"
import webinar5 from "../../assets/webinars/webinar5.jpg"
import webinar6 from "../../assets/webinars/webinar6.png"
import webinar7 from "../../assets/webinars/webinar7.png"
import webinar8 from "../../assets/webinars/webinar8.jpg" 
import webinar9 from "../../assets/webinars/webinar9.jpg" 

const GalleryMain = () => {
    return (
        <div className="py-10 lg:py-20 px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center pb-14">Our Seminers, Conferences and Webinars</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="avatar">
                    <div className="rounded-xl">
                        <img src={webinar} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="rounded-xl">
                        <img src={webinar2} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="rounded-xl">
                        <img src={webinar3} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="rounded-xl">
                        <img src={webinar4} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="rounded-xl">
                        <img src={webinar5} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="rounded-xl">
                        <img src={webinar6} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="rounded-xl">
                        <img src={webinar7} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="rounded-xl">
                        <img src={webinar8} />
                    </div>
                </div>
                <div className="avatar">
                    <div className="rounded-xl">
                        <img src={webinar9} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryMain;