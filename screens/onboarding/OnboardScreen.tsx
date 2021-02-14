import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import StepLabel from "@material-ui/core/StepLabel";
import { Ionicons } from '@expo/vector-icons';


function getSteps() {
  return [""];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Image source={{ uri: require('https://repl.it/@kelleymvo/qmmunity#assets/images/0Onboarding.png') }} />;
    case 1:
      return <Image source={{ uri: require('https://repl.it/@kelleymvo/qmmunity#assets/images/1Onboarding .png') }} />;
    case 2:
      return <Image source={{ uri: require('https://repl.it/@kelleymvo/qmmunity#assets/images/2Onboarding .png') }} />;
    case 3:
      return <Image source={{ uri: require('https://repl.it/@kelleymvo/qmmunity#assets/images/3Onboarding .png') }} />;
    case 4:
      return <Image source={{ uri: require('https://repl.it/@kelleymvo/qmmunity#assets/images/4Onboarding.png') }} />;
    default:
      return "unknown step";
  }
}
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

export default function DotsMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="dots"
      steps={5}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="large" onClick={handleNext} disabled={activeStep === 5}>
          
          {theme.direction === 'rtl' ? <Ionicons size={32} name="chevron-back-circle" color="#6518D3" /> : <Ionicons size={32} name="chevron-forward-circle" color="#6518D3" />} 
        </Button>
      }
      backButton={
        <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <Ionicons size={32} name="chevron-forward-circle" color="#6518D3" /> : <Ionicons size={32} name="chevron-back-circle" color="#6518D3" />}
          
        </Button>
      }
    />
  );
}