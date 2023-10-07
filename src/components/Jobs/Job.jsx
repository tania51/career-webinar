import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { id, title, image, price, short_description } = job;

    return (
        <div>
            <div className="card h-80 flex flex-row border-yellow-100 border-r border-b">
                <figure className="w-full"><img className="h-40 w-full rounded" src={image} alt="Album" /></figure>
                <div className="card-body pr-3">
                    <h2 className="card-title text-xl">{title}</h2>
                    <p className="text-base text-gray-300">{short_description}</p>
                    <p className="text-base text-gray-300">From  {price}</p>
                    <div className="card-actions">
                        <Link to={`/job-details/${id}`}><button className="bg-[#fffb05] text-base font-semibold text-gray-900 px-3 py-1 rounded border-r-2 border-b-2 border-gray-950">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;