import { Box, Typography } from '@mui/material';

interface CompanyInfoProps {
  description: string;
  skills?: string[];
  minExp: number | null;
}

const CompanyInfo: React.FC<CompanyInfoProps> = (props) => (
  <Box>
    <Typography style={{
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: '1rem'
    }} >About Company:</Typography>
    <Typography variant='h2' >About Us:</Typography>
    <Typography >
      {props.description}
      </Typography>
    { props.minExp  &&
      <Typography variant='h3'>Minimum Experience {props.minExp}</Typography>
    }

  </Box>
);

export default CompanyInfo;