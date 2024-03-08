# migrate-test-gulp-to-esbuild

gulp でやっていたことを[esbuild](https://esbuild.github.io/)で行う環境のテスト。

- 爆速（0.03 秒くらい）
- 依存ライブラリが 1 ファイルのみ
- Node.js を最新にできる

| command         | detail           |
| --------------- | ---------------- |
| `npm run build` | ビルドする       |
| `npm run watch` | ビルドしつつ監視 |

- この設定では `src` が `dist` になります
- 共有のためビルド後ファイル `dist` もリポジトリに含めています
- Yarn, Sass は除外予定なので含めていません
