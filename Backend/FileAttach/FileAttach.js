const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/Images"); // Change the destination folder as per your requirement
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  // Handle file upload success response or any other logic
  res.json({ message: 'File uploaded successfully' });
});

app.get('/attachments/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public', 'Images', filename); // Adjust the path as per your file storage location
    res.download(filePath, filename); // Serve file as an attachment
  });

app.listen(5001, () => {
  console.log("Server is running");
});
