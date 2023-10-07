import { useEffect, useState } from "react";
import Job from "./Job";


const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/public/services.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div className="px-10 my-20">
            <h2 className="text-3xl text-center mb-3">Latest Jobs</h2>
            <hr className="w-20 mx-auto h-[2px] bg-yellow-600 mb-10" />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    jobs?.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;