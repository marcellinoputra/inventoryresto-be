const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const connectDatabase = require('./database/database');
const makananController = require('./controller/makanan.handler');
const minumanController = require('./controller/minuman.handler');
const authController = require('./controller/user.handler');
const multer = require('multer');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/auth');
const app = express();
const port = 3000;

const avatarStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'avatarStorage/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '.jpg');
  },
});

const upload = multer({ storage: avatarStorage });

app.use(cors());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
// app.use(authMiddleware.authenticateToken);

app.get('/', function (req, res) {
  res.send('Implement Me');
});

app.get(
  '/api/makanan',
  authMiddleware.authenticateToken,
  makananController.getMakanan
);
app.get('/api/minuman', minumanController.getMinuman);

app.post(
  '/api/add-makanan',
  check('nama_makanan')
    .isLength({ min: 5 })
    .withMessage('Nama Makanan Minimal 5 Character'),
  makananController.postMakanan
);
app.post(
  '/api/add-minuman',
  check('nama_minuman')
    .isLength({ min: 5 })
    .withMessage('Nama Minuman Minimal 5 Character'),
  minumanController.postMinuman
);
app.post(
  '/api/signup',
  check('nama').isLength({ min: 10 }).withMessage('Nama Minimal 10 Character'),
  check('username')
    .isLength({ min: 10 })
    .withMessage('Username Minimal 10 Character'),
  check('password')
    .isLength({ min: 10 })
    .withMessage('Password Minimal 10 Charcter'),
  upload.single('avatar'),
  authController.signup
);
app.post('/api/signin', authController.signin);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
