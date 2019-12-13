import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Job } from '../types/Jobs';

export type JobsDataProps = {
  children: (Details: Job[]) => ReactElement
}

const JOB_API_URL = 'http://localhost:8080/jobs';
const fetchJobs = async (cb: (jobs: Job[]) => void) => {
  const res = await fetch(JOB_API_URL);
  const jobs = await res.json();
  cb(jobs);
}

const JobsData: FC<JobsDataProps> = ({ children }) => {
  const [jobs, updateJobs] = useState<Job[]>([]);
  useEffect(() => {
    fetchJobs((jobs: Job[]) => updateJobs(jobs));
  }, [])
  return (
    <>{children(jobs)}</>
  );
};

export { JobsData };