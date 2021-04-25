## openssl を使ってセキュアなファイルを暗号化 → 複合化して環境変数の容量制限を突破する

### [参考](https://zenn.dev/terrierscript/articles/2021-02-18-openssl-node-create-decipheriv)

前提 - openssl 1.1.1g

```bash

$ openssl enc -aes-256-cbc -a -in 秘匿化したいファイル -out 暗号化したファイル -k パスフレーズ -p
$ DECRYPTE_KEY=***** \
  DECRYPTE_IV=****** \
  node ~.js
```

- -in 入力ファイルを指定
- -out 出力ファイルを指定
- -aes-256-cbc

### JSON ファイルを扱う
