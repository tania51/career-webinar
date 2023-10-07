import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
// import { useEffect, useState } from "react";


const JobDetails = () => {
    const jobs = useLoaderData();
    // console.log(jobs);

    const { id } = useParams();
    const jobId = parseInt(id);

    const singleJob = jobs.find(job => job?.id === jobId);
    const { image, title, long_description } = singleJob;

    return (
        <div>
            <Navbar></Navbar>
            <div className="py-20 bg-[#212121]">
                <div className="bg-gray-950 w-4/5 mx-auto">
                    <div className="card w-full border-yellow-100 border-r border-b">
                        <figure className="h-[60vh]"><img src={image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{title}</h2>
                            <p className="text-sm text-gray-500">{long_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;