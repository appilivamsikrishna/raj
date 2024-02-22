import React, { useState } from "react";

import axios from "axios";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, TimePicker } from "@mui/lab";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const AstroForm = () => {
  const [aananasa, setAananasa] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [chartType, setChartType] = useState("");
  const [chartStyle, setChartStyle] = useState("");
  const [language, setLanguage] = useState("");

  const [ayanamsa, setAyanamsa] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [datetime, setDateTime] = useState("");

  const [format, setFormat] = useState("");
  const [la, setLa] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "aananasa":
        setAananasa(event.target.value);
        break;
      case "location":
        setLocation(event.target.value);
        break;
      case "chartType":
        setChartType(event.target.value);
        break;
      case "chartStyle":
        setChartStyle(event.target.value);
        break;
      case "language":
        setLanguage(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const handleTimeChange = (newValue) => {
    setTime(newValue);
  };

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      // const response = await axios.get(`https://api.example.com/data/${selectedOptions.option1}/${selectedOptions.option2}/${selectedOptions.option3}/${selectedOptions.option4}/${selectedOptions.option5}`);
      // setResponseData(response.data);
      const response = await axios.get(
        `https://prokerala-api-proxy.appilivamsikrishna.workers.dev/v2/astrology/chart?ayanamsa=1&coordinates=13.6288, 79.4192&datetime=1998-12-31T05:40:00Z&chart_type=rasi&chart_style=south-indian&format=svg&ln=en`
      );
      setResponse(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  const handleClick2 = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      // const response = await axios.get(`https://api.example.com/data/${selectedOptions.option1}/${selectedOptions.option2}/${selectedOptions.option3}/${selectedOptions.option4}/${selectedOptions.option5}`);
      // setResponseData(response.data);
      const response = await axios.get(
        `https://prokerala-api-proxy.appilivamsikrishna.workers.dev/v2/astrology/kundli?ayanamsa=1&coordinates=10.214747,78.097626&datetime=2022-03-17T10:50:40Z&la=en`
      );
      console.log(response.data);
      setResponse(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Welcome to MS Astrology Kundali Calculator</h1>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="aananasa-label">Aananasa</InputLabel>
          <Select
            labelId="aananasa-label"
            id="aananasa"
            value={aananasa}
            label="Aananasa"
            onChange={handleChange}
            name="aananasa"
          >
            <MenuItem value={1}>Lahiri</MenuItem>
            <MenuItem value={3}>Raman </MenuItem>
            <MenuItem value={5}> KP astrology</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="aananasa-label">Date</InputLabel>
          <Select
            labelId="aananasa-label"
            id="aananasa"
            value={aananasa}
            label="Aananasa"
            onChange={handleChange}
            name="aananasa"
          >
            <MenuItem value={1}>Lahiri</MenuItem>
            <MenuItem value={3}>Raman </MenuItem>
            <MenuItem value={5}> KP astrology</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="aananasa-label">Time</InputLabel>
          <Select
            labelId="aananasa-label"
            id="aananasa"
            value={aananasa}
            label="Aananasa"
            onChange={handleChange}
            name="aananasa"
          >
            <MenuItem value={1}>Lahiri</MenuItem>
            <MenuItem value={3}>Raman </MenuItem>
            <MenuItem value={5}> KP astrology</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            id="location"
            value={location}
            label="Location"
            onChange={handleChange}
            name="location"
          >
            <MenuItem value="13.0827, 80.2707">Chennai</MenuItem>
            <MenuItem value="13.6288, 79.4192">Tirupati</MenuItem>
            <MenuItem value="17.3850, 78.4867">Hyderabad</MenuItem>
            <MenuItem value="12.9716, 77.5946">Bangalore</MenuItem>
          </Select>
        </FormControl>

        <DatePicker
          label="Date"
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />

        <TimePicker
          label="Time"
          value={time}
          onChange={handleTimeChange}
          renderInput={(params) => <TextField {...params} />}
          ampm={false}
        />

        <FormControl fullWidth>
          <InputLabel id="chartType-label">ChartType</InputLabel>
          <Select
            labelId="chartType-label"
            id="chartType"
            value={chartType}
            label="ChartType"
            onChange={handleChange}
            name="chartType"
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option4">Option 4</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="chartStyle-label">ChartStyle</InputLabel>
          <Select
            labelId="chartStyle-label"
            id="chartStyle"
            value={chartStyle}
            label="ChartStyle"
            onChange={handleChange}
            name="chartStyle"
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option4">Option 4</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="language-label">Language</InputLabel>
          <Select
            labelId="language-label"
            id="language"
            value={language}
            label="Language"
            onChange={handleChange}
            name="language"
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option4">Option 4</MenuItem>
          </Select>
        </FormControl>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={handleClick} disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </Button>
          <div dangerouslySetInnerHTML={{ __html: response }} />
        </Box>
      </Box>
    </div>
  );
};

export default AstroForm;
