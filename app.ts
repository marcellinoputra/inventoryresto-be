import  express  from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {getMakanan, postMakanan} from './controller/makanan.handler';
import {getMinuman, postMinuman} from './controller/minuman.handler'
import {signin, signup} from './controller/user.handler'
import authenticateToken from './middleware/auth';
import multer from 'multer';
import {check} from 'express-validator';
const app = express();
const port = 3000;

const avatarStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'avatarStorage/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname );
  },
});

const upload = multer({ storage: avatarStorage });

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', function (req, res) {
  res.send('Implement Me');
});

app.get('/api/makanan', getMakanan);
app.get('/api/minuman', getMinuman);

app.post(
  '/api/makanan/add-makanan',
  check('nama_makanan')
    .isLength({ min: 5 })
    .withMessage('Nama Makanan Minimal 5 Character'),
    authenticateToken,
  postMakanan
);
app.post(
  '/api/minuman/add-minuman',
  check('nama_minuman')
    .isLength({ min: 5 })
    .withMessage('Nama Minuman Minimal 5 Character'), authenticateToken,
  postMinuman
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
  upload.single('avatar'), signup
  
);
app.post('/api/signin', signin);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
