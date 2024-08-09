
# Flask Webアプリケーションサンプル

このプロジェクトは、メッセージをサーバーに送信し、その応答を表示する基本的なFlaskウェブアプリケーションのサンプルです。

## プロジェクト構成

```
app/
├── __init__.py
├── main.py
├── templates/
│   └── index.html
└── static/
    └── style.css
    └── script.js
Dockerfile
docker-compose.yml
requirements.txt
README.md
```

- `app/__init__.py`: Flaskアプリケーションの初期化を行います。
- `app/main.py`: Flaskのルートとロジックを含むメインのアプリケーションスクリプトです。
- `app/templates/index.html`: フロントエンドのHTMLテンプレートです。
- `app/static/style.css`: アプリケーションのスタイリングを行うCSSファイルです。
- `app/static/script.js`: ユーザーインタラクションを処理するJavaScriptファイルです。

## セットアップ

### 前提条件

- Docker
- Docker Compose

### 1. リポジトリのクローン

```bash
git clone https://github.com/be0219/python_web_sample.git
cd python_web_sample
```

### 2. アプリケーションのビルドと実行

DockerとDocker Composeを使用してFlaskアプリケーションをビルドし、実行するには、以下のコマンドを使用します。

```bash
docker-compose up --build
```

これにより、Dockerイメージがビルドされ、アプリケーションが起動します。アプリケーションは `http://localhost:5000` でアクセス可能です。

## アプリケーションの詳細

### フロントエンド

フロントエンドはシンプルなHTMLフォームで、テキスト入力とボタンがあります。ボタンがクリックされると、JavaScriptコードが入力メッセージをFlaskバックエンドに送信し、応答を表示します。

### バックエンド

Flaskバックエンドは、HTMLページを提供する `/` ルートと、POSTリクエストを処理する `/message` ルートで構成されています。`/message` ルートは受け取ったメッセージを処理し、応答を返します。

### スタイリング

アプリケーションは、グラデーション背景と海をイメージした色合いで、海岸をイメージしたデザインを使用しています。

## ファイル

- **`Dockerfile`**: アプリケーションのDockerイメージを定義します。
- **`docker-compose.yml`**: Docker Composeを使用してアプリケーションのサービスを管理します。
- **`requirements.txt`**: アプリケーションに必要なPythonパッケージをリストアップします。
- **`app/static/style.css`**: アプリケーションのCSSスタイルを含みます。
- **`app/static/script.js`**: ボタンクリックとAJAXリクエストを処理するJavaScriptコードを含みます。


## 作者

[github](https://github.com/be0219)
