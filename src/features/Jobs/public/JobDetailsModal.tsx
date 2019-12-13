import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Job } from '../types/Jobs';

export type JobDetailsModalProps = {
  children: (handleOpen: (newJob: Job) => void) => FC
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const JobDetailsModal: FC<JobDetailsModalProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [currentJob, setJob] = React.useState<Job>({
    title: '',
    company: '',
    id: '',
    location: '',
    created_at: ''
  });

  const handleClickOpen = (Job: Job) => {
    console.log('Opening!');
    setJob(Job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {children(handleClickOpen)}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {currentJob.company}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            {currentJob.title}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            {currentJob.location}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export { JobDetailsModal }