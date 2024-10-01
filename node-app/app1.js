const http = require('http');           // httpモジュールを読み込む

// サーバーのオブジェクトの作成
var server = http.createServer(
  (request,response)=>{
    response.end('Hello Node.js!');     // レスポンスの返却
  }
);
server.listen(3000);                    // ポート3000で待ち受け開始

// terminalで「node app.js」
// ブラウザで「http://localhost:3000」
// Hello Node.js! が表示される