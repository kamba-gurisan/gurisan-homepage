import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Scenario Planner | AIが描く4つの未来シナリオで、戦略の解像度を上げる',
  description: 'AI Scenario Plannerは、ビジネステーマを入力するだけでAIが2×2シナリオマトリクスを自動生成する戦略シミュレーションツールです。不確実性の高い時代に、複数の未来を可視化し、戦略立案・意思決定を支援します。',
  keywords: ['シナリオプランニング', 'AI', '戦略立案', 'シナリオマトリクス', '未来予測', 'ビジネス戦略', '不確実性', '意思決定', 'VUCA', 'シナリオ分析'],
  openGraph: {
    title: 'AI Scenario Planner | AIが描く4つの未来シナリオで、戦略の解像度を上げる',
    description: 'ビジネステーマを入力するだけで、AIが2×2シナリオマトリクスを自動生成。不確実性の高い時代の戦略立案・意思決定を支援するシミュレーションツール。',
    url: 'https://www.gurisanws.com/ai-scenario-planner',
    siteName: 'GURISAN',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Scenario Planner | AIが描く4つの未来シナリオで、戦略の解像度を上げる',
    description: 'ビジネステーマを入力するだけで、AIが2×2シナリオマトリクスを自動生成。戦略立案・意思決定を支援するシミュレーションツール。',
  },
  alternates: {
    canonical: 'https://www.gurisanws.com/ai-scenario-planner',
  },
}

const APP_URL = 'https://scenario.gurisanws.com'

export default function AIScenarioPlannerPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── ナビバー ── */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
              </svg>
            </div>
            <span className="font-bold text-slate-800 text-sm tracking-tight">AI Scenario Planner</span>
            <span className="text-xs text-slate-400 hidden sm:block">by GURISAN</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#features" className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">特徴</a>
            <a href="#scenarios" className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">シナリオ</a>
            <a href="#workflow" className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">使い方</a>
            <a href="#pricing" className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">料金</a>
            <Link href="/" className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">&larr; GURISAN</Link>
            <a href={APP_URL} className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">ログイン</a>
            <a href={APP_URL} className="text-sm font-medium px-4 py-1.5 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors">
              無料で始める
            </a>
          </nav>
        </div>
      </header>

      {/* ── ヒーロー ── */}
      <section className="bg-gradient-to-br from-slate-50 via-teal-50/40 to-cyan-50/50 pt-20 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-xs font-medium text-teal-600">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              AI-Powered Scenario Planning
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-xs font-medium text-cyan-600">
              Powered by Gemini
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-800 mb-6 tracking-tight leading-tight">
            不確実な未来を、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              戦略の武器に変える。
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-4">
            ビジネステーマを入力するだけで、AIが2つの不確実性軸を設定し、<br className="hidden sm:block" />
            2&times;2シナリオマトリクスで4つの未来を描き出します。
          </p>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
            Geminiによる高度な分析が、シナリオプランニングの専門知識がなくても<br className="hidden sm:block" />
            戦略的な未来洞察を可能にします。画像・音声・プレゼン資料まで自動生成。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={APP_URL} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200">
              無料で始める &rarr;
            </a>
            <a href="#workflow" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm">
              使い方を見る
            </a>
          </div>
        </div>
      </section>

      {/* ── 課題共感セクション ── */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
            {[
              {
                icon: '🤷',
                pain: '将来の事業環境が読めず、中期計画が「希望的観測」になってしまう…',
                relief: 'AIが複数の未来シナリオを提示。楽観・悲観を超えた構造的な思考を支援します。',
              },
              {
                icon: '😩',
                pain: 'シナリオプランニングをやりたいが、専門知識も工数もない。',
                relief: 'テーマを入力するだけ。AIが不確実性軸の設定からシナリオ作成まで自動で行います。',
              },
              {
                icon: '😓',
                pain: '経営会議で「もしこうなったら？」と聞かれても、即座に答えられない。',
                relief: '4つのシナリオにアクション提案・兆候まで付属。想定外への備えを常にストックできます。',
              },
            ].map((c, i) => (
              <div key={i} className="bg-white p-6 flex flex-col gap-4">
                <div className="text-3xl">{c.icon}</div>
                <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-slate-200 pl-3 italic">&ldquo;{c.pain}&rdquo;</p>
                <div className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold text-lg leading-none mt-0.5 flex-shrink-0">&rarr;</span>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">{c.relief}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400 mt-6">
            シナリオプランニングの知見とAIを融合し、誰でも使える戦略ツールとして設計しました。
          </p>
        </div>
      </section>

      {/* ── 特徴 ── */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">FEATURES</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-14">AI Scenario Plannerでできること</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: '2×2 シナリオマトリクス',
                desc: 'AIが2つの不確実性軸を自動設定し、4つの象限に異なる未来シナリオを生成。構造化された戦略思考を実現します。',
                color: 'bg-teal-50 border-teal-100',
                iconBg: 'bg-teal-100',
              },
              {
                icon: '📊',
                title: 'ポートフォリオ分析',
                desc: '5軸レーダーチャートで各シナリオのリソース配分を可視化。イノベーション・マーケティング・人材・既存事業・財務の視点で比較。',
                color: 'bg-cyan-50 border-cyan-100',
                iconBg: 'bg-cyan-100',
              },
              {
                icon: '📖',
                title: 'ストーリー&インサイト',
                desc: 'シナリオごとに具体的な物語・ビジネスインサイト・アクション提案・早期兆候を生成。意思決定に直結する洞察を提供。',
                color: 'bg-blue-50 border-blue-100',
                iconBg: 'bg-blue-100',
              },
              {
                icon: '🖼️',
                title: 'AI画像生成',
                desc: '各シナリオの未来像をシネマティックなビジュアルで表現。プレゼンテーションのインパクトを高めます。',
                color: 'bg-emerald-50 border-emerald-100',
                iconBg: 'bg-emerald-100',
              },
              {
                icon: '🔊',
                title: 'AI音声ナレーション',
                desc: 'シナリオのストーリーを自然な日本語音声で読み上げ。ワークショップや研修でのプレゼンテーションに活用できます。',
                color: 'bg-amber-50 border-amber-100',
                iconBg: 'bg-amber-100',
              },
              {
                icon: '📑',
                title: '多彩なエクスポート',
                desc: 'PowerPoint・Google Slides・HTML・JSONで出力。社内会議やワークショップの資料としてそのまま活用できます。',
                color: 'bg-rose-50 border-rose-100',
                iconBg: 'bg-rose-100',
              },
            ].map((f) => (
              <div key={f.title} className={`rounded-2xl p-6 border ${f.color}`}>
                <div className={`w-10 h-10 ${f.iconBg} rounded-xl flex items-center justify-center text-xl mb-4`}>{f.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── シナリオ生成の流れ ── */}
      <section id="scenarios" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">SCENARIO OUTPUT</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">AIが生成するシナリオの中身</h2>
          <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
            1つのテーマから、戦略検討に必要な多角的な情報をAIが一括で生成します。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: '不確実性軸の設定', icon: '🧭', highlight: true },
              { name: '4つの未来シナリオ', icon: '🔮', highlight: true },
              { name: '各シナリオの物語', icon: '📖', highlight: false },
              { name: 'ビジネスインサイト', icon: '💡', highlight: false },
              { name: 'アクション提案', icon: '🎬', highlight: false },
              { name: '早期兆候（シグナル）', icon: '🔍', highlight: false },
              { name: '発生確率の推定', icon: '📈', highlight: false },
              { name: 'リソース配分提案', icon: '⚖️', highlight: false },
              { name: 'レーダーチャート', icon: '📊', highlight: false },
              { name: 'ポートフォリオ分析', icon: '🗂️', highlight: false },
              { name: 'シネマティック画像', icon: '🖼️', highlight: false },
              { name: '音声ナレーション', icon: '🔊', highlight: false },
            ].map((m) => (
              <div key={m.name} className={`rounded-xl p-3 border text-sm flex items-center gap-2 ${m.highlight ? 'bg-teal-50 border-teal-100' : 'bg-slate-50 border-slate-100'}`}>
                <span className="text-lg flex-shrink-0">{m.icon}</span>
                <div>
                  <p className="font-medium text-slate-700 text-xs leading-snug">{m.name}</p>
                  {m.highlight && <p className="text-xs text-teal-600 font-bold mt-0.5">AI自動設定</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 活用シーン ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">USE CASES</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-14">こんな場面で活用できます</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: '中期経営計画の策定',
                desc: '複数の事業環境シナリオを可視化し、どの未来でも機能する戦略オプションを検討。計画の柔軟性と説得力を高めます。',
                icon: '🏢',
                color: 'from-teal-500 to-teal-600',
              },
              {
                title: '新規事業・イノベーション検討',
                desc: '市場環境の不確実性を構造化し、各シナリオでの事業機会とリスクを分析。投資判断の精度を向上させます。',
                icon: '🚀',
                color: 'from-cyan-500 to-cyan-600',
              },
              {
                title: '研修・ワークショップ',
                desc: '参加者がAI生成シナリオをベースに議論。戦略思考力の育成や、チーム内の未来認識の共有に活用できます。',
                icon: '🎓',
                color: 'from-blue-500 to-blue-600',
              },
              {
                title: 'リスクマネジメント',
                desc: '想定外のシナリオと早期兆候をストック。変化の兆しをキャッチした際に、事前に検討済みの対応策をすぐに参照できます。',
                icon: '🛡️',
                color: 'from-slate-500 to-slate-600',
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-xl flex-shrink-0`}>{s.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 使い方 ── */}
      <section id="workflow" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-14">3ステップで未来を描く</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'テーマを入力',
                desc: '検討したいビジネステーマと補足情報を入力。主人公タイプ（ビジネス/市民/混合）や、カスタム軸の設定も可能です。',
                icon: '✏️',
                color: 'from-teal-500 to-teal-600',
              },
              {
                step: '02',
                title: 'AIがシナリオ生成',
                desc: 'Geminiが不確実性軸を設定し、4つの未来シナリオを自動生成。ストーリー・インサイト・アクション提案まで一括で出力。',
                icon: '🤖',
                color: 'from-cyan-500 to-cyan-600',
              },
              {
                step: '03',
                title: '活用・共有する',
                desc: '画像・音声を追加生成し、PowerPointやGoogle Slidesにエクスポート。会議資料やワークショップのたたき台として即活用。',
                icon: '📤',
                color: 'from-emerald-500 to-emerald-600',
              },
            ].map((s) => (
              <div key={s.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-xl mb-4`}>{s.icon}</div>
                <p className="text-xs font-bold text-slate-400 mb-1">STEP <span className="text-slate-600">{s.step}</span></p>
                <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 料金プラン ── */}
      <section id="pricing" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">PRICING</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">まずは無料で体験</h2>
          <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
            Freeプランはクレジットカード不要でずっと無料。<br className="hidden sm:block" />
            本格的な活用にはProプランをご利用ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">FREE</p>
              <p className="text-3xl font-bold text-slate-800 mb-1">&yen;0</p>
              <p className="text-sm text-slate-400 mb-6">ずっと無料</p>
              <ul className="space-y-3 text-sm text-slate-600 mb-8">
                {[
                  'シナリオ生成 3回/月',
                  'AI画像生成 5回',
                  'AI音声生成 5回',
                  'JSON・HTMLエクスポート',
                  'シナリオ履歴管理',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={APP_URL} className="block w-full text-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                無料で始める
              </a>
            </div>
            {/* Pro */}
            <div className="bg-white rounded-2xl p-8 border-2 border-teal-500 shadow-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-slate-400 text-white text-xs font-bold rounded-full">Coming Soon</div>
              <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2">PRO</p>
              <p className="text-3xl font-bold text-slate-800 mb-1">準備中</p>
              <p className="text-sm text-slate-400 mb-6">提供開始までお待ちください</p>
              <ul className="space-y-3 text-sm text-slate-600 mb-8">
                {[
                  'シナリオ生成 無制限',
                  'AI画像生成 100回',
                  'AI音声生成 100回',
                  'PowerPointエクスポート',
                  'Google Slidesエクスポート',
                  'すべてのFree機能',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="block w-full text-center px-6 py-3 rounded-xl bg-slate-300 text-white font-medium cursor-not-allowed">
                準備中
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal-600 to-cyan-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">今すぐ未来シナリオを描く</h2>
          <p className="text-teal-100 mb-8 leading-relaxed">
            Googleアカウントで即時登録。<br className="hidden sm:block" />
            クレジットカード不要・無料プランはずっと無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={APP_URL} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-teal-50 transition-colors">
              無料で始める &rarr;
            </a>
            <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/20">
              &larr; GURISANトップへ
            </Link>
          </div>
        </div>
      </section>

      {/* ── フッター ── */}
      <footer className="bg-slate-900 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-teal-600 rounded-md flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold text-slate-300">AI Scenario Planner</span>
              <span className="text-xs text-slate-500 ml-2">by GURISAN</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#features" className="hover:text-slate-200 transition-colors">特徴</a>
            <a href="#scenarios" className="hover:text-slate-200 transition-colors">シナリオ</a>
            <a href="#workflow" className="hover:text-slate-200 transition-colors">使い方</a>
            <a href="#pricing" className="hover:text-slate-200 transition-colors">料金</a>
            <Link href="/" className="hover:text-slate-200 transition-colors">GURISAN</Link>
            <Link href="/tokushoho" className="hover:text-slate-200 transition-colors text-slate-500">特定商取引法</Link>
          </div>
          <p className="text-xs text-slate-600">&copy; 2026 GURISAN. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}
