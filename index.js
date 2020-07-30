require('dotenv').config();
const app = require('./src/app');
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
