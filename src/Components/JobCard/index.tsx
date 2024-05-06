import { Box, Card, CardContent } from '@mui/material';
import JobHeader from './JobHeader';
import JobDetails from './JobDetails';
import CompanyInfo from './CompanyInfo';
import EasyApplyButton from './EasyApplyButton';

const JobCard: React.FC<JobDetails> = (props) => (
  <Card>
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
      <CompanyInfo description={props.jobDetailsFromCompany} minExp={props.minExp} />
      <Box mt={2}>
        <EasyApplyButton />
      </Box>
    </CardContent>
  </Card>
);

export default JobCard;