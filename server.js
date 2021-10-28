const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, function () {
  console.log('listening on 8080...');
});

app.get('/pet', function (req, res) {
  res.send('펫용품 쇼핑할 수 있는 페이지입니다');
});

app.get('/beauty', function (req, res) {
  res.send('뷰티용품 쇼핑할 수 있는 페이지입니다');
});

app.get('/', function (req, res) {
  // sentFile(보낼파일경로): html 파일을 보냄
  res.sendFile(__dirname + '/index.html');
});

app.get('/write', function (req, res) {
  res.sendFile(__dirname + '/write.html');
});

app.post('/add', function (req, res) {
  res.send(req.body);
  console.log(req.body.title);
  console.log(req.body.date);
});
