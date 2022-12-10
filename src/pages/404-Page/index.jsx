import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorImage from './404Image.svg';
import { useNavigate } from 'react-router-dom';

const ErrorPage404 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box
            component="main"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1,
                minHeight: '100%',
                mt: 10,
            }}
            >
            <Container maxWidth="md">
                <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                >
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="h1"
                >
                    Oops...
                </Typography>           
                <Box sx={{ textAlign: 'center' }}>
                    <img
                    alt="Under development"
                    src={ErrorImage}
                    style={{
                        marginTop: 50,
                        display: 'inline-block',
                        maxWidth: '100%',
                        width: 560
                    }}
                    />
                </Box>
                    <Button
                    component="a"
                    startIcon={(<ArrowBackIcon fontSize="small" />)}
                    sx={{ mt: 3 }}
                    variant="contained"
                    onClick={() => navigate("/")}
                    >
                    Go back to dashboard
                    </Button>
                </Box>
            </Container>
            </Box>
        </>
    );
}

export default ErrorPage404;