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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ZjJhMmE3Zi1hMDg5LTQxZTQtOTVmNC01OTAwOGI0MjE4YzAiLCJqdGkiOiI0YTY5NDUzZDliMjYxMTIyN2Y5Nzc5ZTU2NDA0ZWZiMzk0NmI2NmRmY2ExYmJkM2FjNWYyMzkzNDM5ODkxOGNkMTM3MDVhNGUzNzliMGNkZSIsImlhdCI6MTcwODU3OTA0OS41NzUxMTIsIm5iZiI6MTcwODU3OTA0OS41NzUxMTQsImV4cCI6MTcwODU4MjY0OS41NzQ5OTksInN1YiI6IjdmODdlOWQ4LTdmOGQtNDJhNC05ZGFmLTE1NGMzODE3ZjlkZCIsInNjb3BlcyI6W10sImNyZWRpdHNfcmVtYWluaW5nIjo1MDAwLCJyYXRlX2xpbWl0cyI6W3sicmF0ZSI6NSwiaW50ZXJ2YWwiOjYwfV19.mXKhzAZ1nXxiUQAopV7DSmmA3YKSwvoDj1IZ5vpKFOQkDHbnIoKw7huyqrC61ZYcTImOxqJxUqvCehfG4ugL315MZnvcaNDBoNLmHPt0AkH6AlPGtPK1mHEOlLfSCW4ryh8N7Tu4pBL0VeKvaUm42FGCgpopHqQLx6OnZkzy3uvXAw6jDdUwxr9nYqTSMCQDqMva1uafw61ddjMhJ3W45pIuwEsj2ELL09pe9ZtU-x5pF86gJg5CtMP02HZCs8JBQlJytRXBuV4EeIwkWlcj_1oKdEw3gVgDR1lZs0NZ72q-HpFcLuonVJ5YHiFXMemmXXRXatblAhR6hFkzAvEXFA'
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
