import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';

const MyComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: ''
  });
  const [responseData, setResponseData] = useState(null);

  const handleOptionChange = (e, optionName) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionName]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
     // const response = await axios.get(`https://api.example.com/data/${selectedOptions.option1}/${selectedOptions.option2}/${selectedOptions.option3}/${selectedOptions.option4}/${selectedOptions.option5}`);
     // setResponseData(response.data);
     const response = await axios.get(
      `https://api.prokerala.com/v2/astrology/chart?ayanamsa=1&coordinates=10.214747,78.097626&datetime=2022-03-17T10:50:40Z&chart_type=rasi&chart_style=south-indian&format=svg&la=en`,
      {
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZjJhMmE3Zi1hMDg5LTQxZTQtOTVmNC01OTAwOGI0MjE4YzAiLCJqdGkiOiJmNDVjNGFiOGJiYTJlMjIyNjI3ZTZjY2Y4YjY3MDNmNjQ1MThhNDg3ZGNlMTRjZTFkZmVmZmJjMWZmMzI0MjA2Zjg3N2Q4YTFkMDM2NjI1MyIsImlhdCI6MTcwODU3ODc0NC4zNDQ5NDMsIm5iZiI6MTcwODU3ODc0NC4zNDQ5NDUsImV4cCI6MTcwODU4MjM0NC4zNDQ4MTYsInN1YiI6IjdmODdlOWQ4LTdmOGQtNDJhNC05ZGFmLTE1NGMzODE3ZjlkZCIsInNjb3BlcyI6W10sImNyZWRpdHNfcmVtYWluaW5nIjo1MDAwLCJyYXRlX2xpbWl0cyI6W3sicmF0ZSI6NSwiaW50ZXJ2YWwiOjYwfV19.oTnFOQ6SI37AJOAhkafJgOu5Nhl3NEuqShlrlh6CImV6l8SFGortHPbqp3azF2rfjnB68HRrq9hk3RF5swRTuSFshN2bgZ7G8exc1CLX-XcOiw77LGOuqRkKa4xFEwlbNHYOCInEm4zKj8niMGhOOENL9CvN775JS3S_6TurKjaUDgyefwyy-hwFjIuNgqRGDB4oKF1n6r0LKsBHv8KFrZHizGcOsHTb6fs0E2fvh6wM6VI87K18bboiD7keR2sqaZR_teCN1a_xV6IQGsiFjMaipUoNyLSsXrKaQoKe2vkq8nJtaRKM69LGyiwUU08fpOKgw2qQeRYCUdW7WYrtWg'
        }
      }
    );
    setResponseData(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Generate your Kundali</Typography>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Option 1</InputLabel>
        <Select value={selectedOptions.option1} onChange={(e) => handleOptionChange(e, 'option1')}>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Option 2</InputLabel>
        <Select value={selectedOptions.option2} onChange={(e) => handleOptionChange(e, 'option2')}>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Option 3</InputLabel>
        <Select value={selectedOptions.option3} onChange={(e) => handleOptionChange(e, 'option3')}>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Option 4</InputLabel>
        <Select value={selectedOptions.option4} onChange={(e) => handleOptionChange(e, 'option4')}>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Option 5</InputLabel>
        <Select value={selectedOptions.option5} onChange={(e) => handleOptionChange(e, 'option5')}>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!selectedOptions.option1 || !selectedOptions.option2 || !selectedOptions.option3 || !selectedOptions.option4 || !selectedOptions.option5}>
        Submit
      </Button>
      {responseData && (
        <div>
          <Typography variant="h5" gutterBottom>Response Data:</Typography>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
