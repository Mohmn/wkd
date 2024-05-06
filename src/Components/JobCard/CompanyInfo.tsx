import { Box, Typography } from '@mui/material';

interface CompanyInfoProps {
  description: string;
  skills?: string[];
  minExp: number | null;
  jobLink: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = (props) => (
  <>
    <Box sx={{
      height: '255px',
      overflow: 'hidden',
      maskImage: 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))',
    }} >
      <Typography style={{
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: '1rem',
        whiteSpace: 'pre-wrap',
      }} >About Company:</Typography>
      <Typography variant='h6' sx={{
        fontWeight: 650,
        lineHeight: 1.5,
        fontSize: '1rem',
        whiteSpace: 'pre-wrap',
      }}>
        About Us:
      </Typography>
      <Box sx={
        {
          whiteSpace: 'pre-wrap',
          fontSize: '1rem',
          lineHeight: '1.5',
          fontWeight: '400',
        }
      }>
        <p>{props.description}</p>
      </Box>
    </Box>
    <Box sx={{
      // position
      top: '-20px',
      textAlign: 'center'
    }}>
      <a href={props.jobLink} target="_blank" > View More</a>
    </Box>
    {props.minExp &&
      <Typography variant='h6' sx={{

        color: '#8b8b8b',
        whiteSpace: 'pre-wrap',
        fontSize: '1rem',
        lineHeight: '1.5',
        fontWeight: 600,
        letterSpacing: '1px',
        marginBottom: '3px',
      }}>Minimum Experience {props.minExp}</Typography>
    }
  </>
);

export default CompanyInfo;