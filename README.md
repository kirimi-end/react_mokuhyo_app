# 環境構築

### node のバージョン管理を入れる

- asdf をインストール

```
$ brew install asdf
```

- PATH を通す

zsh の方

```
$ echo -e "\n. $(brew --prefix asdf)/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc
```

bash の方

```
$ echo -e "\n. $(brew --prefix asdf)/asdf.sh" >> ~/.bash_profile
$ echo -e "\n. $(brew --prefix asdf)/etc/bash_completion.d/asdf.bash" >> ~/.bash_profile
```

- 順番にインストール

```
$ brew install gpg gawk
$ asdf plugin-add nodejs
```

- node 16.16.0 をインストール

```
$ asdf install nodejs 16.16.0
```

- 全体に反映

```
$ asdf global nodejs 16.16.0
```

- バージョンが反映されていれば OK

```
$ node -v
v16.16.0
```

## リポジトリをクローン

1. クローンする
2. `$ yarn` を実行
3. `$ yarn dev` を実行してサーバー立ち上げ
4. `localhost:3000` にアクセス
5. ハロワが出てきたら OK

## エディタについて

エディタは **Visual Studio Code (VSCode)** を使用してください。  
理由は下記のとおりです。

- JavaScript や TypeScript との相性がいい
- Facebook のデフォルトの開発環境として採用されている

## Linter, Formatter について

ESLint, Prettier を使用し、ソースコード解析とフォーマットを実施しています（次の項で詳細を説明）。  
`yarn lint` で ESLint、Prettier、TypeScript による型チェックを実行できます。  
自動修正できない問題を検出したときはエラー文が表示されますので、該当するソースコードを修正してください。

### Prettier

- Prettier 公式サイト https://prettier.io/
- Formatter
- ソースコードを自動的に整形してくれる（インデントとか）
- Next.js に合わせて、セミコロンはつけないスタイル
- それ以外は Prettier 標準設定
- VSCode に [こちらの拡張機能](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) をインストールしてください。保存時に自動的にコードが整形されます。

### ESLint

- ESLint 公式サイト https://eslint.org/
- Linter
- JavaScript/TypeScript のコードが、指定したルールに違反してないかをチェックして、違反していたら指摘してくれたり、修正してくれたりする
- 宣言したが使っていない変数があると警告を出してくれたり、バグの温床になりそうなコードを見つけてエラーを出してくれる
- デフォルトで入っていた Next.js のチェックに加え、標準的な TypeScript のコードのチェックと、標準的な React 文法のチェックなどを導入
- VSCode に [こちらの拡張機能](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) をインストールしてください。リアルタイムで ESLint の警告やエラーが表示されるようになります。

### commit 時の自動解析について（ simple-git-hooks 使用）

- git commit のタイミングで自動的に ESLint、Prettier、TypeScript による型チェックが走るように設定しています。
- 自動修正できない問題を検出したときは、 commit が中断されます。
- その場合は、エラー文を参考にソースコードを修正し、再度 commit してください。
- これにより、整形されていないソースコードや ESLint の警告やエラーが出るコードが絶対にリポジトリに混じらないように対策しています。
