import React, { FC } from 'react';
import { Job } from '../types/Jobs';


type JobDetailsModalProps = {
  Job: Job
}

const ModalRoot = {
  'position': '"absolute"'
}

const JobDetailsModal: FC<JobDetailsModalProps> = ({ Job }) => {
  return (
    <>
      <div>
        <h1>{Job.company}</h1>
      </div>
    </>
  )
}


export { JobDetailsModal };