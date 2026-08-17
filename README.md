# 私立医学部のお金ナビ

「偏差値だけではわからない」シリーズの、私立医学部医学科向け費用比較サイトです。

## 主な機能

- 私立医学部医学科の6年間学費・初年度納入額を一覧比較
- 所在地別の生活費目安を加えた6年間総負担の概算
- 最大3校の比較
- 予算・掲載状況・学費順で絞り込み
- 大学公式情報へのリンク
- 未確認情報を推測で補完しない表示設計
- スマートフォン対応

## GitHub Pages で公開する

1. このリポジトリを GitHub にアップロードします。
2. GitHub の `Settings` → `Pages` を開きます。
3. `Build and deployment` の Source を `Deploy from a branch` にします。
4. Branch を `main`、Folder を `/(root)` にして保存します。
5. 数分後、GitHub Pages の URL で公開されます。

`.nojekyll` を同梱しているため、追加ビルドは不要です。

## ファイル構成

```text
.
├── index.html
├── kokkoritsu-medical.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   └── （Yoshiキャラクター画像）
│   └── js/
│       └── app.js
├── .nojekyll
├── .gitignore
└── README.md
```

## 更新するとき

大学データ、所在地別家賃データ、比較ロジックは `assets/js/app.js` にあります。
デザインは `assets/css/styles.css` にあります。
キャラクター画像は `assets/img/` にあります。
ページ本文は `index.html` にあります。

### 国公立医学科ナビへのリンク

現在は同梱の `kokkoritsu-medical.html` への相対リンクを使用しています。
本番の国公立医学科ナビ URL が決まったら、`assets/js/app.js` 内の `NATIONAL_MEDICAL_URL` を変更してください。

## データについて

- 学費や制度は大学公式の公開情報を優先します。
- 年度・入試方式・制度改定により金額や条件は変更される可能性があります。
- 生活費は都道府県別家賃データ等を用いた概算で、大学周辺の実勢家賃そのものではありません。
- 出願・入学手続き前には必ず各大学の最新公式資料を確認してください。

## 公開前チェック

- [ ] 調査中大学の公式データを追加
- [ ] 各大学の公式リンクが有効か確認
- [ ] 国公立医学科ナビの本番URLを設定
- [ ] 最終更新日を更新
- [ ] PC / iPhone / Android で表示確認

## データ方針

詳しくは [DATA_POLICY.md](./DATA_POLICY.md) を参照してください。

更新履歴は [CHANGELOG.md](./CHANGELOG.md) にまとめています。
