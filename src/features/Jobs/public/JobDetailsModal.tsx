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
    created_at: '',
    company_logo: '',
    description: '',
    url: ''
  });

  const handleClickOpen = (Job: Job) => {
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
        <DialogTitle id="alert-dialog-slide-title">
          {currentJob.title}
          {currentJob.company}
          <img style={{
            height: '30px',
            float: 'right'
          }} src={currentJob.company_logo} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            dangerouslySetInnerHTML={{ __html: currentJob.description }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <a href={currentJob.url}>
            <Button color="primary">
              Apply
            </Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export { JobDetailsModal }