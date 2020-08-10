require('dotenv').config();
const app = require('./src/app');
const PORT = process.env.PORT;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/client/build`));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
