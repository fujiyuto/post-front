# 環境構築

docker-compose.ymlファイルのあるディレクトリで下記のコマンドを実行する。

```
$ docker compose build
$ docker network create local-network
$ docker compose up -d
```
**post-front**という名前のコンテナができたらOK。
`http://localhost:3300`でアクセスするとNext.jsの初期画面が表示される。