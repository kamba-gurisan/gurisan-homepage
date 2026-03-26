import Link from 'next/link'
import Image from 'next/image'

const HCD_URL = 'https://hcd.gurisanws.com'

// Plan constants (synced with hcd-tools)
const PRO_PRICE = 2980
const TEAM_PRICE = 9800
const PLAN_LIMITS = {
  free:  { max_interviews: 2,  max_questions: 5,  max_sessions: 20  },
  pro:   { max_interviews: 10, max_questions: 20, max_sessions: 200 },
  team:  { max_interviews: 30, max_questions: 20, max_sessions: 1000, team_members: 5 },
}

export default function HCDStudioPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── ナビバー ── */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="font-bold text-slate-800 text-sm tracking-tight">HCD Studio</span>
            <span className="text-xs text-slate-400 hidden sm:block">by GURISAN</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#features"  className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">機能</a>
            <a href="#methods"   className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">分析手法</a>
            <a href="#workflow"  className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">使い方</a>
            <a href="#pricing"   className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">料金</a>
            <Link href="/" className="hidden sm:block text-sm text-slate-500 hover:text-slate-700 transition-colors">← GURISAN</Link>
            <a href={`${HCD_URL}/login`} className="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">ログイン</a>
            <a href={`${HCD_URL}/login?mode=signup`} className="text-sm font-medium px-4 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              無料で始める
            </a>
          </nav>
        </div>
      </header>

      {/* ── ヒーロー ── */}
      <section className="bg-gradient-to-br from-slate-50 via-indigo-50/40 to-violet-50/50 pt-20 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-medium text-indigo-600">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              AI-Powered HCD Research Platform
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-xs font-medium text-violet-600">
              ⚡ Powered by Gemini
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-800 mb-6 tracking-tight leading-tight">
            ユーザーの声を、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              設計の力に変える。
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-4">
            インタビュー設計・AI収集・KA法・ペルソナ・ジャーニーマップまで、<br className="hidden sm:block" />
            HCDリサーチのフルサイクルをひとつのプラットフォームで。
          </p>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
            Geminiによる高精度なAI分析が、数時間かかっていた定性分析を数分に短縮。<br className="hidden sm:block" />
            HCDの知見を凝縮したプロンプト設計で、実践的な洞察を自動生成します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`${HCD_URL}/login?mode=signup`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              無料で始める →
            </a>
            <a href={`${HCD_URL}/login`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm">
              ログイン
            </a>
            <a href={`${HCD_URL}/pricing`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-600 font-medium rounded-xl hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm">
              料金プランを見る
            </a>
          </div>
        </div>
      </section>

      {/* ── HCD実践者へのメッセージ ── */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
            {[
              { icon: '😓', pain: 'インタビューデータはあるのに、KA法のカード整理だけで数時間…', relief: 'AIが価値の種を自動抽出。分析の起点を即座に生成します。' },
              { icon: '🤔', pain: '「ユーザー理解できた」と言えるか、いつも自信が持てない。', relief: 'ペルソナ・共感マップ・JTBDをAIが多角的に可視化。腹落ち感のある洞察へ。' },
              { icon: '😔', pain: '定性データの価値を、経営層や開発チームに伝えられない。', relief: '定量集計と定性分析を統合したレポートを一気に出力。説得力ある資料へ変換。' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-6 flex flex-col gap-4">
                <div className="text-3xl">{c.icon}</div>
                <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-slate-200 pl-3 italic">「{c.pain}」</p>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold text-lg leading-none mt-0.5 flex-shrink-0">→</span>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">{c.relief}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400 mt-6">
            HCDの現場で積み重ねた実践知をもとに設計・開発された、HCD実践者のためのツールです。
          </p>
        </div>
      </section>

      {/* ── 特徴 ── */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">FEATURES</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-14">HCD Studioでできること</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎤', title: 'AIインタビュー', desc: 'URLを共有するだけで参加者がAIと1対1のインタビューを実施。自由記述と選択肢を組み合わせた深掘り質問をAIが自動生成します。', color: 'bg-indigo-50 border-indigo-100', iconBg: 'bg-indigo-100' },
              { icon: '📥', title: '外部データ取り込み', desc: 'Google フォームや既存アンケートのCSVデータをインポートして、同じ分析フローで活用できます。', color: 'bg-violet-50 border-violet-100', iconBg: 'bg-violet-100' },
              { icon: '🔬', title: 'KA法分析', desc: 'AIが回答から価値の種を自動抽出し、アフィニティダイアグラムを生成。分析対象の設問を自由に選択できます。', color: 'bg-blue-50 border-blue-100', iconBg: 'bg-blue-100' },
              { icon: '🤖', title: 'AIカスタマイズ分析', desc: 'ペルソナ・カスタマージャーニー・機会領域マップ・JTBDなど13手法のAI分析。独自の分析指示も追加できます。', color: 'bg-emerald-50 border-emerald-100', iconBg: 'bg-emerald-100' },
              { icon: '📊', title: '定量・定性統合', desc: '選択肢の集計グラフと自由記述の定性分析を同一画面で確認。データの全体像を直感的に把握できます。', color: 'bg-amber-50 border-amber-100', iconBg: 'bg-amber-100' },
              { icon: '📤', title: 'エクスポート', desc: '回答データをExcel形式でダウンロード。分析レポートはWordまたはPDF（ブラウザ印刷）で出力できます（Proプラン以上）。', color: 'bg-rose-50 border-rose-100', iconBg: 'bg-rose-100' },
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

      {/* ── AI分析手法 ── */}
      <section id="methods" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">AI ANALYSIS METHODS</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">13のAI分析手法</h2>
          <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
            HCDの各フェーズに対応した分析を、インタビューデータから自動生成。 視覚的なマップやキャンバスで直感的に把握できます。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
            {[
              { name: 'ペルソナ生成', icon: '👤', free: false },
              { name: 'カスタマージャーニーマップ', icon: '🗺️', free: true },
              { name: 'ペインポイント抽出', icon: '😣', free: true },
              { name: 'How Might We 生成', icon: '💡', free: true },
              { name: '感情・体験マップ', icon: '💭', free: true },
              { name: '共感マップ', icon: '🫶', free: false },
              { name: '優先度マトリクス', icon: '📐', free: false },
              { name: '機会領域マップ', icon: '🎯', free: false },
              { name: 'バリュープロポジションキャンバス', icon: '🔷', free: false },
              { name: 'ジョブ理論分析（JTBD）', icon: '⚙️', free: false },
              { name: '定量分析', icon: '📊', free: false },
              { name: 'KA法分析', icon: '🔬', free: false },
              { name: '独自の分析指示', icon: '✏️', free: false },
            ].map((m) => (
              <div key={m.name} className={`rounded-xl p-3 border text-sm flex items-center gap-2 ${m.free ? 'bg-indigo-50 border-indigo-100' : 'bg-slate-50 border-slate-100'}`}>
                <span className="text-lg flex-shrink-0">{m.icon}</span>
                <div>
                  <p className="font-medium text-slate-700 text-xs leading-snug">{m.name}</p>
                  {m.free && <p className="text-xs text-indigo-500 font-bold mt-0.5">Free対応</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 使い方 ── */}
      <section id="workflow" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-14">3ステップで始める</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'インタビューを作成', desc: '調査目的・設問数・収集する参加者情報を設定。AIが必須設問の提案や選択肢の生成もサポートします。', icon: '⚙️', color: 'from-indigo-500 to-indigo-600' },
              { step: '02', title: 'URLを共有して回答収集', desc: '発行されたURLを参加者に送るだけ。AIが動的に質問を展開し、深みのある回答を引き出します。', icon: '🔗', color: 'from-violet-500 to-violet-600' },
              { step: '03', title: 'AIが分析・可視化', desc: 'KA法・ペルソナ・機会領域マップなど13手法でAIが即座に分析。ExcelやWordで出力して共有できます。', icon: '✨', color: 'from-emerald-500 to-emerald-600' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-xl mb-4`}>{s.icon}</div>
                <p className="text-xs font-bold text-slate-400 mb-1">STEP <span className="text-slate-600">{s.step}</span></p>
                <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 料金 ── */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">PRICING</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">料金プラン</h2>
          <p className="text-center text-slate-500 mb-14">まずは無料から。プロジェクトの規模に合わせて選べます。</p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">

            <div className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">FREE</p>
              <p className="text-3xl font-bold text-slate-800 mb-1">¥0</p>
              <p className="text-xs text-slate-400 mb-6">ずっと無料</p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>月{PLAN_LIMITS.free.max_interviews}件のプロジェクト</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>最大{PLAN_LIMITS.free.max_questions}設問 / {PLAN_LIMITS.free.max_sessions}セッション</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>AIカスタマイズ分析（4手法）</li>
                <li className="flex items-start gap-2"><span className="text-slate-300 mt-0.5">✗</span><span className="text-slate-400">KA法分析・全AI分析</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-300 mt-0.5">✗</span><span className="text-slate-400">Excel / Wordエクスポート</span></li>
              </ul>
              <a href={`${HCD_URL}/login?mode=signup`} className="block w-full text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">
                無料で始める
              </a>
            </div>

            <div className="rounded-2xl border-2 border-indigo-500 p-6 relative shadow-lg shadow-indigo-100">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">人気</div>
              <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2">PRO</p>
              <p className="text-3xl font-bold text-slate-800 mb-1">¥{PRO_PRICE.toLocaleString()}<span className="text-base font-normal text-slate-500">/月</span></p>
              <p className="text-xs text-slate-400 mb-6">いつでもキャンセル可</p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">✓</span>月{PLAN_LIMITS.pro.max_interviews}件のプロジェクト</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">✓</span>最大{PLAN_LIMITS.pro.max_questions}設問 / {PLAN_LIMITS.pro.max_sessions}セッション</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">✓</span>全AIカスタマイズ分析（13手法）</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">✓</span>KA法分析</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">✓</span>Excel / Wordエクスポート</li>
              </ul>
              <a href={`${HCD_URL}/login?mode=signup`} className="block w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors">
                Proで始める
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">TEAM</p>
              <p className="text-3xl font-bold text-slate-800 mb-1">¥{TEAM_PRICE.toLocaleString()}<span className="text-base font-normal text-slate-500">/月</span></p>
              <p className="text-xs text-slate-400 mb-6">5名まで</p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>月{PLAN_LIMITS.team.max_interviews}件のプロジェクト</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>最大{PLAN_LIMITS.team.max_questions}設問 / {PLAN_LIMITS.team.max_sessions}セッション</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>Proの全機能</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>チームメンバー{PLAN_LIMITS.team.team_members}名</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span>カスタムガイド設定</li>
              </ul>
              <a href={`${HCD_URL}/pricing`} className="block w-full text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">
                詳細を見る
              </a>
            </div>

          </div>
          <p className="text-center text-sm text-slate-400">
            Enterprise（無制限・カスタム契約）は
            <a href="mailto:info@gurisanws.com" className="text-indigo-500 hover:underline ml-1">お問い合わせ</a>ください。
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-violet-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">今すぐ無料で始める</h2>
          <p className="text-indigo-100 mb-8 leading-relaxed">
            Googleアカウントで即時登録。<br className="hidden sm:block" />
            クレジットカード不要・無料プランはずっと無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`${HCD_URL}/login?mode=signup`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors">
              無料で始める →
            </a>
            <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/20">
              ← GURISANトップへ
            </Link>
          </div>
        </div>
      </section>

      {/* ── フッター ── */}
      <footer className="bg-slate-900 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold text-slate-300">HCD Studio</span>
              <span className="text-xs text-slate-500 ml-2">by GURISAN</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#features" className="hover:text-slate-200 transition-colors">機能</a>
            <a href="#methods"  className="hover:text-slate-200 transition-colors">分析手法</a>
            <a href="#workflow" className="hover:text-slate-200 transition-colors">使い方</a>
            <a href="#pricing"  className="hover:text-slate-200 transition-colors">料金</a>
            <Link href="/" className="hover:text-slate-200 transition-colors">GURISAN</Link>
          </div>
          <p className="text-xs text-slate-600">© 2026 GURISAN. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}
