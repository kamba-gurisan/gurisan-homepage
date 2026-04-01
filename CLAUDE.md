# グリサンホームページ — Claude Code 作業ルール

## プロジェクト概要
- URL: https://www.gurisanws.com
- 概要: HCDコンサルタント「グリサン」の企業サイト（静的コンテンツ中心）
- 技術: Next.js 16 / React 19 / Tailwind CSS 4 / TypeScript
- 外部サービス: Vercel Analytics

## ページ構成
| パス | 内容 |
|---|---|
| `/` | トップページ（サービス・実績・問い合わせ） |
| `/hcd-studio` | HCD Studio ランディングページ |

## デザイン仕様
- プライマリカラー: `green-700` / `green-800`
- セカンダリ: `slate-*`
- フォント: システムフォント（デフォルト）

## コマンド
```bash
npm run dev    # 開発サーバー
npm run build  # 本番ビルド（変更後は必ず実行）
npm run lint   # リントチェック
```

## 注意事項
- 外部API・認証なし。コンテンツ変更がメインの作業
- 変更後は必ず `npm run build` でエラーがないことを確認する
- 日本語が主言語
