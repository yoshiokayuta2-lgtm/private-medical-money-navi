# Google Analytics 4 セットアップ

この版は **GA4の測定IDを1か所入れるだけで計測開始できる状態** です。
測定IDが `G-XXXXXXXXXX` のままなら、Google Analyticsへの通信は発生しません。

## 1. GA4側で用意する

1. Google AnalyticsでGA4プロパティを作成します。
2. 「管理」→「データ ストリーム」→「ウェブ」を作成します。
3. サイトURLは公開URL（例: `https://yoshiokayuta2-lgtm.github.io/private-medical-money-navi/`）を指定します。
4. `G-` から始まる測定IDをコピーします。
5. 拡張計測機能はONを推奨します（ページビュー、スクロール、外部リンククリック等の基本計測）。

## 2. サイト側で有効化する

`assets/js/analytics-config.js` の次の1行だけ変更します。

```js
measurementId: 'G-XXXXXXXXXX',
```

例:

```js
measurementId: 'G-ABC1234567',
```

GitHubへ反映すると計測が始まります。

## 3. このサイトで追加計測するイベント

| イベント名 | 何が分かるか |
|---|---|
| `quick_sort` | TOPの3つの金額カードのどれが押されたか |
| `filter_change` | 掲載状況・予算・並べ替えの利用 |
| `keyword_search` | キーワード検索が使われたか（検索文字列そのものは送信しません） |
| `load_more` | 「さらに表示」の利用 |
| `compare_toggle` | 3校比較への追加・解除 |
| `compare_open` | 実際に比較画面を開いた回数と校数 |
| `compare_clear` | 比較候補を全解除した回数 |
| `official_source_click` | 大学公式情報へ遷移した大学 |
| `calculator_school_change` | 生活費試算で選ばれた大学 |
| `calculator_life_change` | 月生活費スライダーの変更 |
| `cost_detail_open` | 費用・注意点の詳細が開かれた大学 |
| `instagram_click` | Instagram CTA / フッターのクリック |
| `series_link_click` | 国公立医学部ナビへの遷移 |

### プライバシー上の方針

- キーワード検索の**入力文字列はGA4へ送信しません**。
- 氏名・メールアドレス等の個人情報をイベントパラメータへ送らない設計です。
- 大学名、選択された予算、並べ替えなど、サイト改善に必要な操作情報だけを送ります。

## 4. 公開後の動作確認

1. GitHub Pagesへ反映します。
2. サイトを自分で開き、大学比較・公式リンク・Instagramなどを1回ずつ操作します。
3. Google Analyticsの「リアルタイム」でアクセスとイベントを確認します。
4. 詳細確認が必要な場合は `analytics-config.js` の `debug: false` を一時的に `true` にし、DebugViewで確認します。確認後は `false` に戻します。

## 5. 最初に見るべき指標

公開後は、まず次の5つだけ追えば十分です。

- スマホ / PC別の利用割合
- 大学検索まで進んだユーザー数
- `compare_open` の発生率
- `official_source_click` の発生率
- `instagram_click` の発生率

GA4側では `compare_open` と `official_source_click` を「キーイベント」候補にするのがおすすめです。Instagram誘導を重要成果として見る場合は `instagram_click` も候補です。

## 6. カスタムディメンション（必要になったら）

学校別や導線別に詳しく分析したい場合は、GA4管理画面で以下のイベントパラメータをカスタムディメンションとして登録します。

- `school_name`
- `sort_key`
- `filter_name`
- `filter_value`
- `placement`

最初から全部登録する必要はありません。データを見てから追加で十分です。
