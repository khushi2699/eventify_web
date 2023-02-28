import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './OrderSummary.jsx';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useLocation, useNavigate } from 'react-router-dom';

const steps = ['Order Summary', 'Payment details', 'Place your order'];

function getStepContent(step , url , title) {
  switch (step) {
    case 0:
      return <AddressForm url = {url} title = {title}/>;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    useEffect(() => {
        {console.log(location.state)}
        if(location.state != null){
            setData(location.state);
        }
    },[])

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

    const handleRedirection = (element) => {
      navigate(element);
    }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      {console.log(data?.url)}
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your registration.
              </Typography>
              <Button sx = {{bgcolor: 'green', alignItems:"center", mt:5}} size = "large" fullWidth = "true" variant="contained" onClick={() => handleRedirection('/home')}>Explore more events</Button>

            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep , data?.url, data?.title)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}