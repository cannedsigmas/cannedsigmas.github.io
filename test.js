const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});