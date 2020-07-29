require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
