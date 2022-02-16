// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000; //port番号を指定

const router = require('./models/route/v1/');
app.use('/api/v1/', router);

// サーバ起動
app.listen(port);
console.log('listen on port' + port);
