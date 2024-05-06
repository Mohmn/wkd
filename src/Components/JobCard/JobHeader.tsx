import { Box, Typography } from '@mui/material';

interface JobHeaderProps {
  logoUrl: string;
  companyName: string;
  jobTitle: string;
  companyLocation: string
}

const JobHeader: React.FC<JobHeaderProps> = ({ logoUrl, companyName, jobTitle, companyLocation }) => (
  <Box sx={{
    display: 'flex',
    gap: 1,
    alignmentBaseline: ''
  }}>
    <img src={logoUrl} alt="Company logo" style={{  objectFit: 'contain', width: '50px', height: '50px' }} />
    <div>
      <Box sx={{
        // display: 'flex',
        // flexDirection: 'column'
      }
      }>
        <Typography variant="h6"sx={{
          'fontSize': '1rem',
          'fontWeight': '600',
          'letterSpacing': '1px',
          'marginBottom': '0.25rem',
          'color': '#8b8b8b',
        }} >{companyName}</Typography>
        <Typography variant="h5" sx={{
          'fontSize': '14px',
          'lineHeight': '1.5',
        }}>{jobTitle}</Typography>
        <Typography variant="subtitle2">{companyLocation}</Typography>
      </Box>
    </div>
  </Box>
);

export default JobHeader;