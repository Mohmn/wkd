import { Button } from '@mui/material';

const EasyApplyButton: React.FC = () => (
  <Button
    variant="contained"
    size='medium'
    sx={{
      backgroundColor: '#55efc4',
      color: '#000',
      fontWeight: 500,
      width: '100%'
    }}
  >
    ⚡ Easy Apply
  </Button>
);

export default EasyApplyButton;