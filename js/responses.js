// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html


// Function to handle user input and generate bot responses
async function getBotResponse(input) {
  if (input.toLowerCase() === "hello") {
      return "Hello! How are you?";
  }

  if (input.toLowerCase() === "how are you") {
      return "I'm fine, thank you.";
  }

  if (input.toLowerCase() === "goodbye") {
      return "Talk to you later!";
  }

  if (input.toLowerCase() === "fun fact") {
      const funFacts = [
          "The world's largest desert is not the Sahara, but Antarctica. It's considered a desert because it receives very little precipitation.",
          "The world's oldest known city is Jericho, located in the West Bank. It has been continuously inhabited for over 11,000 years.",
          // Add more fun facts here
      ];
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      return funFacts[randomIndex];
  }

  if (input.toLowerCase() === "random number") {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      return `Your random number is ${randomNumber}.`;
  }

  if (/^[0-9+\-*/().]/.test(input)) {
      try {
          const result = eval(input);
          return `The result of ${input} is ${result}.`;
      } catch (error) {
          return "Sorry, I couldn't evaluate that expression.";
      }
  }

  if (input.toLowerCase() === "time") {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock
      const timeString = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      return `The current time is ${timeString}.`;
  }

  if (input.toLowerCase() === "joke") {
      const jokes = [
          "Why couldn't the bicycle stand up by itself? It was two-tired!",
          "What do you call fake spaghetti? An impasta!",
          // Add more jokes here
      ];
      const randomIndex = Math.floor(Math.random() * jokes.length);
      return jokes[randomIndex];
  }

  if (input.toLowerCase() === "riddle") {
      const riddles = [
          "What has a head and a tail but no body? (A coin)",
          "What has keys but can't open locks? (A piano)",
          // Add more riddles here
      ];
      const randomIndex = Math.floor(Math.random() * riddles.length);
      return riddles[randomIndex];
  }

  if (input.toLowerCase().startsWith("weather in ")) {
      const city = input.substring(11); // Remove "weather in " from input
      return await getWeather(city);
  }

  if (input.toLowerCase() === "rock") {
      return "paper";
  } else if (input.toLowerCase() === "paper") {
      return "scissors";
  } else if (input.toLowerCase() === "scissors") {
      return "rock";
  }

  return "I'm sorry, I didn't understand that. Please try again.";
}

// Example usage of getBotResponse function (for demonstration purposes)
function showResponse() {
  const userInput = document.getElementById("userInput").value;
  const response = getBotResponse(userInput);
  document.getElementById("botResponse").innerText = response;
}
