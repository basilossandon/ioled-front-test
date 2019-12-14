import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Typography from "@material-ui/core/Typography";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";

const PrettoSlider = withStyles({
  root: {
    color: "#09916a",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,

    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export default function LEDController() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [value, setValue] = React.useState(60);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    if (newValue > 50) {
      console.log("Warning, lower");
    }
  };

  return (
    <React.Fragment>
      <Grid container direction="column">
        <Title>Light Intensity</Title>
        <PrettoSlider
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-label="Light intensity"
          defaultValue={60}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </MuiPickersUtilsProvider>
        <Typography
          component="h2"
          variant="h6"
          color={value > 50 ? "error" : "primary"}
          gutterBottom
        >
          Intensity: {value}%
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
