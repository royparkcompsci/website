/* Base styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: white;
  color: black;
  transition: all 0.3s ease;
}

header, footer {
  background-color: #f0f0f0;
  text-align: center;
  padding: 20px;
}

main {
  max-width: 700px;
  margin: auto;
  padding: 20px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 1rem;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}

#form-status {
  margin-top: 10px;
  font-weight: bold;
}

/* Dark theme */
.dark-mode {
  background-color: #121212;
  color: white;
}

.dark-mode header, .dark-mode footer {
  background-color: #1e1e1e;
}
