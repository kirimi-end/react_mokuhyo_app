# 環境構築
## Reactを動かすために
### 以下記事の3つ目までをやる

[https://qiita.com/rspmharada7645/items/25c496aee87973bcc7a5#3-creat-react-appのインストール](https://qiita.com/rspmharada7645/items/25c496aee87973bcc7a5#3-creat-react-app%E3%81%AE%E3%82%A4%E3%83%B3%E

### nodeのバージョン管理を入れる
- asdfをインストール
```
$ brew install asdf
```

- PATHを通す
zsh
```
$ echo -e "\n. $(brew --prefix asdf)/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc
```

bash
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