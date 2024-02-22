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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyNzg4MjFjZS0yNGQ4LTQ5ZTEtYmM5YS00MDU4ZjE1YzQwNjIiLCJqdGkiOiIwZmFhOWRlZWUyNGFlM2QyZWRkZjQ0YTJjNjA5ZjJmODViZWM3ZjM1N2JkZTFjMDQ1NDc4MDgzZTBhNjIzZDIzYWYxZTU2YmYxMWM2M2YxYiIsImlhdCI6MTcwODU3Njk0OS43ODE1ODUsIm5iZiI6MTcwODU3Njk0OS43ODE1ODcsImV4cCI6MTcwODU4MDU0OS43ODE0NTQsInN1YiI6ImRkZTkyMTg3LWVjY2ItNGM2Ny1hNjViLTNjY2I1MGRiMWI3YyIsInNjb3BlcyI6W10sImNyZWRpdHNfcmVtYWluaW5nIjo1MDAwLCJyYXRlX2xpbWl0cyI6W3sicmF0ZSI6NSwiaW50ZXJ2YWwiOjYwfV19.boYK_jIYlqgpM1rweHTQAqcmR4falWtLWZJuAXTik8zHYfBlP8nh6NpWVQHNivCe0npr-W2JOvKiQL7k9tpKBqIKwvSXxTNQra-2QydNqC4j4cX993HvXSpytIFI1tPhE8EkZy9_HlaFwSwOVoomz_5PG23_KCQv_dqsfU2GoWnANRlNaqDcg5Efx0QqSTTvSnej0grDpwqv-crNglBo-Euf1mNN3O9w_EgPgAP0VeYv6KnK9FvfX5lPmXv5NKIk1LuHdsW9RYcP7WarF7hvGY4Vp5DAvhrFWDHH4FXPn2ZsiS5y3wBtn3FWJj0ZEgeSvULPAVztk46--q9mleI4tA'
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
