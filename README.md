# 環境構築
## Reactを動かすために
### 以下記事の3つ目までをやる

https://qiita.com/rspmharada7645/items/25c496aee87973bcc7a5#3-creat-react-appのインストール

### nodeのバージョン管理を入れる
- asdfをインストール
```
$ brew install asdf
```

- PATHを通す

zshの方
```
$ echo -e "\n. $(brew --prefix asdf)/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc
```

bashの方
```
$ echo -e "\n. $(brew --prefix asdf)/asdf.sh" >> ~/.bash_profile
$ echo -e "\n. $(brew --prefix asdf)/etc/bash_completion.d/asdf.bash" >> ~/.bash_profile
```

- 順番にインストール
```
$ brew install gpg gawk
$ asdf plugin-add nodejs
```

- node 16.16.0をインストール
```
$ asdf install nodejs 16.16.0
```

- 全体に反映
```
$ asdf global nodejs 16.16.0
```

- バージョンが反映されていればOK
```
$ node -v
v16.16.0
```

## リポジトリをクローン
1. クローンする
2. `$ yarn install` を実行
3. `$ yarn dev` を実行してサーバー立ち上げ
4. ハロワが出てきたらOK

## Prettier
- Prettier 公式サイト https://prettier.io/
- コードフォーマッタ
- ソースコードを自動的に整形してくれる（インデントとか）

## ESLint
- ESLint 公式サイト https://eslint.org/
- Linter
- JavaScript/TypeScriptのコードが、指定したルールに違反してないかをチェックして、違反していたら指摘してくれたり、修正してくれたりする
- 宣言したが使っていない変数があると警告を出してくれたり、バグの温床になりそうなコードを見つけてエラーを出してくれる

## Prettier の設定
- Next.js に合わせて、セミコロンはつけないスタイル
- それ以外は Prettier 標準設定
- VSCode を使っている人は こちらの拡張機能 をインストールしてください。保存時に自動的にコードが整形されます。
- ていうか VSCode 使ってください。絶対だ。 Facebook (Meta) の社内標準エディタですよ。

## ESLint の設定
- もともと ESLint は入っていた。
- しかし、設定が甘かった
- 標準的なTypeScriptのコードのチェックと、標準的なReact文法のチェックなどを導入
- VSCode に こちらの拡張機能(以下参照) をインストールしてください。リアルタイムで ESLint の警告やエラーが表示されるようになります。
  - 拡張機能 Prettier
    https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- commit 時の自動解析について（ simple-git-hooks 使用）
- git commit のタイミングで自動的に ESLint、Prettier、TypeScript による型チェックが走るように設定しています。
- 自動修正できない問題を検出したときは、commit が中断されます。
- その場合は、エラー文を参考にソースコードを修正し、再度 commit してください。
- これにより、整形されていないソースコードや ESLint の警告やエラーが出るコードが絶対にリポジトリに混じらないように対策できます。
