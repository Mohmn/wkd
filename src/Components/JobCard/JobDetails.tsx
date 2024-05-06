
import { Box,  Typography } from '@mui/material';

interface JobDetailsProps {
    minSalary: number | null;
    maxSalary: number | null;
    currency?: number;
}

function getSalary(minSal: number | null, maxSal: number | null) {
    let sal;
    if (minSal && maxSal)
        sal = `${minSal} - ${maxSal}`
    else if (minSal)
        sal = minSal.toString()
    else if (maxSal)
        sal = maxSal.toString()
    return sal
}

const JobDetails: React.FC<JobDetailsProps> = (props) => (
    <Box>
        <Typography sx={{
           color:  'rgb(77, 89, 106)',
           fontSize: '1rem',

        }}>
            {
                `Estimated Salary: ${getSalary(props.minSalary, props.maxSalary)} LPA`
            }

        </Typography>
    </Box>
);

export default JobDetails;