import { Box, Button, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const navigate = useNavigate();

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 1,
        py: 0,
        px: 2
      }}
      {...others}
    >
        <Button
          component="a"
          startIcon={icon}
          onClick={()=> navigate(href)}
          disableRipple
          sx={{
            borderRadius: 1,
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
    </ListItem>
  );
};