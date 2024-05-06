import { Box, CardContent, Paper } from '@mui/material';
import JobHeader from './JobHeader';
import JobDetails from './JobDetails';
import CompanyInfo from './CompanyInfo';
import EasyApplyButton from './EasyApplyButton';

const JobCard: React.FC<JobDetails> = (props) => (
  <Paper
    key={props.jdUid}
    elevation={2}
    square={false}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.5rem',
      borderRadius: '10px'
    }}>
    <CardContent>
      <JobHeader
        logoUrl={props.logoUrl}
        companyName={props.companyName}
        jobTitle={props.jobRole}
        companyLocation={props.location}
      />
      <JobDetails
        minSalary={props.minJdSalary}
        maxSalary={props.maxJdSalary}
      />
      <CompanyInfo description={props.jobDetailsFromCompany} minExp={props.minExp} jobLink={props.jdLink} />
      <Box mt={2}>
        <EasyApplyButton />
      </Box>
    </CardContent>
  </Paper>
);

export default JobCard;