const http = require('http');

// HTMLはこのように表示させる
var server = http.createServer(
  (request, response) => {
    response.setHeader('Content-Type', 'text/html');    // ヘッダーの項目を設定、テキストデータでHTML形式のものと示す
    response.write('<!DOCTYPE html><html lang="ja">');  // writeメソッドでHTMLの内容を書き出す
    response.write('<head><meta charset="utf-8">');
    response.write('<title>Hello</title></head>');
    response.write('<body><h1>Hello Node.js!</h1>');
    response.write('<p>This is Node.js sample page.</p>');
    response.write('<p>これは、Node.jsのサンプルページです。</p>', 'utf8');
    response.write('</body></html>');
    response.end();                                 // レスポンスの書き出しを終了
  }
);

server.listen(3000);
console.log('Server start!');