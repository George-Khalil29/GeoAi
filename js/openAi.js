const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const apiKey = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  const userInput = req.body.message;
  
  try {
    const response = await axios.post(
      apiUrl,
      {
        prompt: userInput,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.9,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const message = response.data.choices[0].text.trim();
    res.json({ response: message });
  } catch (error) {
    console.error('Error getting response from ChatGPT:', error);
    res.status(500).json({ error: 'Sorry, something went wrong.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
