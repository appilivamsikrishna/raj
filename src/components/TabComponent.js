import React, { useState } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const AstroForm = () => {
  const [ayanamsa, setAyanamsa] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [datetime, setDateTime] = useState('');
  const [chartType, setChartType] = useState('');
  const [chartStyle, setChartStyle] = useState('');
  const [format, setFormat] = useState('');
  const [la, setLa] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = async () => {
    try {
     // const response = await axios.get(`https://api.example.com/data/${selectedOptions.option1}/${selectedOptions.option2}/${selectedOptions.option3}/${selectedOptions.option4}/${selectedOptions.option5}`);
     // setResponseData(response.data);
     const response = await axios.get(
      `https://api.prokerala.com/v2/astrology/chart?ayanamsa=1&coordinates=10.214747,78.097626&datetime=2022-03-17T10:50:40Z&chart_type=rasi&chart_style=south-indian&format=svg&la=en`,
      {
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJiZjM5MmEwNC1mMThiLTRlMmEtOTg4OS02OGE1MjNjZjY3MDQiLCJqdGkiOiJkYjEzMWYzMzQzMTNhN2U4ZjU2NWZlMGQ4N2NlM2Y4NmUxMWM1ZmJjMGI3ZDRmZmRkNzNmNzVjZGZjZDJkYmI3MDliZTZiNzM0NzNhOWRhZSIsImlhdCI6MTcwODU4MTMwMi4wNzgxMDIsIm5iZiI6MTcwODU4MTMwMi4wNzgxMDMsImV4cCI6MTcwODU4NDkwMi4wNzc5ODYsInN1YiI6IjdmODdlOWQ4LTdmOGQtNDJhNC05ZGFmLTE1NGMzODE3ZjlkZCIsInNjb3BlcyI6W10sImNyZWRpdHNfcmVtYWluaW5nIjo1MDAwLCJyYXRlX2xpbWl0cyI6W3sicmF0ZSI6NSwiaW50ZXJ2YWwiOjYwfV19.fedylLkoRAqXChlM7fJXeu0LCf0WY9u6D6kS64ohfFofmASfFzRqMHSc43mSG87vhVWP10dumylVou8RSB3_804QPjWjiklSIJe1BnK6ezvLX6axUQ7eG_f_b32KfqK3xmqF2i7q8HTI4D8Pwu_9_ULJgkTmkXaXOXD7weoByU5oqj3-nNQxDfPNnbKPOAiGy2_cMJ9nUC_1agSNTVZATS-vmAP5NdyOTkpkl8NfUr1tUHUmX0S_i-z1JrpMdJV6pKRDVb3_O9yL-co3vTNMCzxK6c1KCA7X20g7YbcuV_L8Jj6tmznnbARx2v8JLqOXfif6MFKl8uTyXam9M6zHTw'
        }
      }
    );
    setResult(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ayanamsa:
          <input
            type="text"
            value={ayanamsa}
            onChange={(e) => setAyanamsa(e.target.value)}
          />
        </label>
        {/* Add other input fields similarly */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {error && <div>Error: {error}</div>}
      {result && <div>Result: {JSON.stringify(result)}</div>}

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained">submit</Button>
    </Box>
    </div>

    
  );
};

export default AstroForm;
