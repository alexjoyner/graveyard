import React, { FC } from 'react';
import { Job } from '../types/Jobs';
import { Typography, Paper } from '@material-ui/core';

export type JobPostProps = {
  job: Job;
}

const JobContainerStyle = {
  'margin': '10px auto',
  'width': '80%',
  'display': 'flex',
  'justifyContent': 'space-between',
  'padding': '20px 10px',
  'alignItems': 'center'
}

const JobPost: FC<JobPostProps> = ({ job, ...props }) => (
  <Paper style={JobContainerStyle} {...props}>
    <div>
      <Typography variant="h6">{job.title}</Typography>
      <Typography variant="h5">{job.company}</Typography>
      <Typography variant="subtitle1">{job.location}</Typography>
    </div>
    <div>
      <Typography variant="subtitle1">{job.created_at.split(' ').splice(0, 3).join(' ')}</Typography>
    </div>
  </Paper>
);

export { JobPost };

