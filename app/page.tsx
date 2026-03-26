import Link from 'next/link'
import Image from 'next/image'

const HCD_URL = 'https://hcd.gurisanws.com'
const HCD_LP = 'https://www.gurisanws.com/hcd-studio'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── ヘッダー ── */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/gurisanta.png" alt="グリサンタ" width={30} height={30} className="object-contain" />
            <span className="font-bold text-green-800 tracking-tight">GURISAN</span>
            <span className="text-xs text-slate-400 hidden sm:block">/ グリサン</span>
          </div>
          <nav className="flex items-center gap-5 text-sm text-slate-500">
            <a href="#services" className="hidden sm:block hover:text-green-700 transition-colors">サービス</a>
            <a href="#about"    className="hidden sm:block hover:text-green-700 transition-colors">グリサンについて</a>
            <a href="#achievements" className="hidden sm:block hover:text-green-700 transition-colors">実績</a>
            <a href="#tools"    className="hidden sm:block hover:text-green-700 transition-colors">ツール</a>
            <a href="#contact"  className="px-4 py-1.5 rounded-lg bg-green-700 text-white font-medium hover:bg-green-600 transition-colors">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      {/* ── ヒーロー ── */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 pt-12 pb-0 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-4 items-end">

            <div className="pb-16 pt-4">
              <div className="mb-8">
                <Image
                  src="/gurisan-logo-text.png"
                  alt="WORKSHOP DESIGNER UNIT グリサン"
                  width={400}
                  height={115}
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-xs font-bold text-green-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  生成AI × ワークショップデザイン
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-bold text-emerald-200">
                  HCD × Vibe Coding
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                その学び、<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                  次につながって<br />いますか？
                </span>
              </h1>
              <p className="text-green-100 leading-relaxed mb-4">
                問いから始め、<span className="font-medium text-white">&quot;その場限り&quot;で終わらせない</span>、<br className="hidden sm:block" />
                循環型の学びをデザインします。
              </p>
              <p className="text-sm text-green-300 leading-relaxed mb-8">
                正解のない時代、モヤモヤの中にこそヒントがある。<br />
                生成AIを「思考のパートナー」として使いこなし、<br />
                「共に創る」ワークショップで組織と人の未来を動かします。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#services"
                   className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition-colors shadow-lg shadow-green-900/50">
                  サービスを見る →
                </a>
                <a href="#contact"
                   className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                  お問い合わせ
                </a>
              </div>
              <a href={HCD_LP}
                 className="inline-flex items-center gap-3 mt-5 px-5 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors w-fit">
                <span className="text-lg">🤖</span>
                <div className="text-left">
                  <div className="text-white font-bold text-sm">HCD Studio</div>
                  <div className="text-green-200 text-xs">AIでHCDリサーチを加速 — 無料で試す →</div>
                </div>
              </a>
            </div>

            <div className="flex justify-center md:justify-end items-end">
              <Image
                src="/gurisanta.png"
                alt="グリサンタ"
                width={360}
                height={360}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── コンセプト ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-green-50 rounded-2xl p-8 sm:p-10 border border-green-100">
            <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">About GURISAN</p>
            <div className="flex items-center gap-3 bg-green-100 rounded-lg px-4 py-2 mb-4 w-fit">
              <Image src="/gurisanta.png" alt="グリサンタ" width={32} height={32} className="object-contain flex-shrink-0" style={{ mixBlendMode: 'multiply' }} />
              <p className="text-sm text-green-700"><span className="font-medium">グリサン</span> ＝ グリーンのサンタクロース。継続的な学びを贈り届けることに由来します。</p>
            </div>
            <p className="text-slate-600 leading-loose">
              ワークショップや研修が「楽しかった」「ためになった」という一過性のイベントで終わっていませんか？<br /><br />
              グリサン（Gurisan）は、コミュニケーションの場創りの専門家として、参加者が深い「腹落ち感」を得て、
              翌日からの持続的な行動変容につながる場をデザインします。<br /><br />
              私たちが目指すのは、「参加者の満足」「依頼者の課題解決」「社会への貢献」、そして「提供者自身の成長」が重なり合う
            </p>
            <div className="mt-6 bg-white rounded-2xl border border-green-100 shadow-sm p-6">
              <p className="text-center text-xs font-bold text-green-600 uppercase tracking-widest mb-1">コンセプト</p>
              <p className="text-center font-bold text-green-800 text-lg mb-5">🌐「四方良し」のワークショップ</p>
              <svg viewBox="0 0 440 360" className="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a" opacity="0.5"/>
                  </marker>
                </defs>
                <line x1="220" y1="72" x2="220" y2="133" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,4" opacity="0.45" markerEnd="url(#arrowG)"/>
                <line x1="220" y1="227" x2="220" y2="288" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,4" opacity="0.45" markerEnd="url(#arrowG)"/>
                <line x1="140" y1="180" x2="173" y2="180" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,4" opacity="0.45" markerEnd="url(#arrowG)"/>
                <line x1="267" y1="180" x2="300" y2="180" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,4" opacity="0.45" markerEnd="url(#arrowG)"/>
                <circle cx="220" cy="180" r="47" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2"/>
                <text x="220" y="175" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="700">四方</text>
                <text x="220" y="195" textAnchor="middle" fill="#16a34a" fontSize="13">良し</text>
                <rect x="150" y="8" width="140" height="64" rx="14" fill="#15803d"/>
                <text x="220" y="32" textAnchor="middle" fill="#bbf7d0" fontSize="10" fontWeight="600">売り手</text>
                <text x="220" y="56" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">グリサン</text>
                <rect x="0" y="148" width="140" height="64" rx="14" fill="#059669"/>
                <text x="70" y="172" textAnchor="middle" fill="#d1fae5" fontSize="10" fontWeight="600">買い手①</text>
                <text x="70" y="196" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">参加者</text>
                <rect x="300" y="148" width="140" height="64" rx="14" fill="#0d9488"/>
                <text x="370" y="172" textAnchor="middle" fill="#ccfbf1" fontSize="10" fontWeight="600">買い手②</text>
                <text x="370" y="196" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">依頼者</text>
                <rect x="150" y="288" width="140" height="64" rx="14" fill="#0369a1"/>
                <text x="220" y="312" textAnchor="middle" fill="#bae6fd" fontSize="10" fontWeight="600">世間</text>
                <text x="220" y="336" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">社会</text>
              </svg>
              <p className="text-center text-xs text-slate-400 mt-3">4つのステークホルダーが共に満たされる場を設計します</p>
            </div>
            <p className="text-slate-600 leading-loose mt-4">
              企業の人材育成や組織変革から、大学でのアクティブラーニング、自治体の地域共創まで。
              人間中心設計（HCD）の思想と最新の生成AIを掛け合わせ、貴社の課題に寄り添いながら、
              未来を創り出すプロセスに伴走します。
            </p>
          </div>
        </div>
      </section>

      {/* ── グリサンとAI ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">GURISAN × AI</p>
          <h2 className="text-3xl font-bold text-white text-center mb-4">AIを、武器にする。</h2>
          <p className="text-center text-slate-400 mb-14 max-w-xl mx-auto">
            グリサンは生成AIを「使う側」ではなく「設計する側」として活動しています。<br className="hidden sm:block" />
            ワークショップ・リサーチ・プロダクト開発、すべての領域でAIを実践的に統合。
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '🎯', title: 'AIでワークショップを設計する', desc: 'シナリオプランニング・未来洞察・アイデア創出など、ワークショップのプログラムや「問い」の設計にAIを活用。参加者の気づきを最大化するファシリテーションを実現します。', tag: 'Workshop × AI' },
              { icon: '🔬', title: 'AIでリサーチを洞察に変える', desc: 'HCD Studioを使えば、インタビューデータがペルソナ・KA法・機会領域マップへと即座に変換。定性と定量を統合したAI分析で、意思決定の根拠を素早く構築します。', tag: 'HCD × AI' },
              { icon: '🛠️', title: 'AIでプロダクトを開発する', desc: 'HCD Studio自体が「Vibe Coding」—コードを書かずにAIと対話しながら開発したプロダクトです。AI活用の最前線を自ら実践し、クライアントへの知見として還元します。', tag: 'Vibe Coding' },
            ].map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="inline-block px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs font-bold mb-3">{s.tag}</div>
                <h3 className="font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HCD Studio ── */}
      <section id="hcd-studio" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Product</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">HCD Studio</h2>
          <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
            HCDリサーチのフルサイクルをAIで一気通貫にサポートするプラットフォーム。<br />
            インタビュー設計からKA法・ペルソナ生成まで、分析が数分で完了します。
          </p>
          <div className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 rounded-3xl p-8 sm:p-10 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-green-400/10 blur-3xl pointer-events-none" />
            <div className="grid sm:grid-cols-2 gap-8 items-center relative">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full mb-6">
                  🆓 無料プランあり
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    { icon: '🎙️', text: 'AIが自動で深掘りインタビュー' },
                    { icon: '🗂️', text: 'KA法・アフィニティダイアグラム自動生成' },
                    { icon: '👤', text: 'ペルソナ・CJM・JTBD自動生成' },
                    { icon: '📊', text: '定量×定性を一画面で分析' },
                    { icon: '📁', text: 'Excel / Wordエクスポート対応' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-green-100">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={HCD_LP}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 transition-colors shadow-lg shadow-green-900/50"
                >
                  無料で始める →
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <p className="text-xs font-bold text-green-400 uppercase tracking-widest">Plan</p>
                {[
                  { name: 'Free', price: '¥0', desc: 'プロジェクト2件・回答20件まで' },
                  { name: 'Pro', price: '¥2,980/月', desc: 'プロジェクト10件・回答200件まで' },
                  { name: 'Team', price: '¥9,800/月', desc: 'プロジェクト30件・回答1,000件まで・チーム5名' },
                ].map((plan) => (
                  <div key={plan.name} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <div>
                      <div className="font-bold text-white text-sm">{plan.name}</div>
                      <div className="text-green-200 text-xs">{plan.desc}</div>
                    </div>
                    <div className="text-green-300 font-bold text-sm">{plan.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── サービス ── */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">提供サービス</h2>
          <p className="text-center text-slate-500 mb-14 max-w-2xl mx-auto">
            企業・大学・地方自治体・学会などを対象に、ワークショップの企画・プログラムデザインから、
            当日のファシリテーション、その後の振り返りまでを一貫して提供します。
          </p>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-green-700 to-green-800 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <p className="text-xs font-bold text-green-200 uppercase tracking-wider">For Enterprise</p>
                    <h3 className="font-bold text-white text-lg">伴走型イノベーション＆組織変革</h3>
                  </div>
                </div>
                <p className="text-green-100 text-sm mt-2">「完璧な実行力」だけでなく「ゼロベースの発想力」を組織に実装します。</p>
              </div>
              <div className="p-6 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: '🤖', title: '生成AI活用ハンズオン', desc: 'AIを「思考のパートナー」として使いこなすマインドセット醸成と業務適用。' },
                  { icon: '🔭', title: '未来戦略・新規事業創出', desc: 'シナリオプランニングで不確実な未来の世界観からバックキャストし、ITサービスや新商品を共創。' },
                  { icon: '💡', title: 'デザイン思考・HCDの組織定着', desc: '現場の「不満」を「価値」に変える思考の体幹を鍛えるトレーニング。' },
                ].map((s) => (
                  <div key={s.title} className="bg-green-50 rounded-xl p-4">
                    <div className="text-xl mb-2">{s.icon}</div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="text-xs font-bold text-emerald-200 uppercase tracking-wider">For Education</p>
                    <h3 className="font-bold text-white text-lg">探求心を刺激する「問い」の創発</h3>
                  </div>
                </div>
                <p className="text-emerald-100 text-sm mt-2">知識の暗記ではなく、「自分の頭で考える力」を育む対話的な学び（Dialogic Learning）の場を提供します。</p>
              </div>
              <div className="p-6 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: '🔗', title: '異分野コラボレーション', desc: '異なる専門性を持つ学生を繋ぎ、発想力を高める共創ワークショップ。' },
                  { icon: '🛠️', title: 'PBL支援', desc: '学生が自ら「作りたいもの」を見つけ、プロトタイピングの第一歩を踏み出すマインドセット育成。' },
                  { icon: '👤', title: 'HCD入門講義・演習', desc: '未来のエンジニアやクリエイターに向けた、UXを基点とする設計思想の講義・演習。' },
                ].map((s) => (
                  <div key={s.title} className="bg-emerald-50 rounded-xl p-4">
                    <div className="text-xl mb-2">{s.icon}</div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="text-xs font-bold text-teal-200 uppercase tracking-wider">For Community</p>
                    <h3 className="font-bold text-white text-lg">多様な住民との未来共描き</h3>
                  </div>
                </div>
                <p className="text-teal-100 text-sm mt-2">地域の課題を「自分ごと」として捉え、対話を通じて具体的なアクションへ繋げます。</p>
              </div>
              <div className="p-6 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '🗺️', title: 'ビジョン共創ワークショップ', desc: '多様な立場の住民が集い、生成AIも活用しながら地域の未来シナリオや解決策を共に描く場づくり。' },
                  { icon: '✨', title: '地域資源の再発見（あるものみがき）', desc: '制約を資源に変え、地域の眠れる魅力を引き出すアイデアソン。' },
                ].map((s) => (
                  <div key={s.title} className="bg-teal-50 rounded-xl p-4">
                    <div className="text-xl mb-2">{s.icon}</div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-green-500 uppercase tracking-widest mb-3">About</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-14">グリサンについて</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100 mb-6">
                <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-3">Profile</p>
                <h3 className="text-xl font-bold text-slate-800 mb-0.5">上林 昭（かんばやし あきら）</h3>
                <p className="text-sm text-slate-500 mb-4">主宰／ワークショップデザイナー／コンサルタント</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">◆</span>
                    <span>HCD-Net認定 人間中心設計専門家</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">◆</span>
                    <a href="https://wsd2o.org/member/00425_kambayashiakira/" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 underline underline-offset-2 transition-colors">
                      認定ワークショップデザイナー<br />（生涯学習開発財団認定）
                    </a>
                  </div>
                </div>
                <a href="https://note.com/gurisan_ws" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-green-700 hover:text-green-900 font-medium transition-colors">
                  <span className="text-base">📝</span>note で発信中 →
                </a>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Career</p>
                <p className="text-sm text-slate-600 leading-loose">
                  日米韓のグローバルテック企業で約30年間勤務。
                  キャリアのスタートはプリンター用のトナー開発（ハードウェア技術者）。開発現場で
                  「交換時に手が汚れる」というユーザーの不満に直面した原体験から、UXと人間中心設計（HCD）の重要性に目覚める。
                  商品企画・技術コンサルティング・未来戦略策定・リーン製品開発導入・技術者教育などを歴任し、2023年に独立。<br /><br />
                  現在は津田塾大学・東京都立産業技術大学院大学などで非常勤講師、学会の企画委員も務める。
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">3 Strengths</p>
              <div className="space-y-4">
                {[
                  { num: '01', title: '「技術」×「デザイン」×「戦略」の統合力', desc: '製造業の現場KPIや制約を熟知した元エンジニアだからこそ、机上の空論ではない、現場の技術者に刺さる「腹落ち感」のある変革シナリオを描けます。', color: 'border-green-200 bg-green-50/60', num_color: 'text-green-500' },
                  { num: '02', title: '「具体と抽象の往復」を促すファシリテーション', desc: '日々の事象（具体）から本質を見抜き（抽象）、具体的なアクションに落とし込む「思考の体幹」を鍛える場をデザインします。', color: 'border-emerald-200 bg-emerald-50/60', num_color: 'text-emerald-500' },
                  { num: '03', title: 'AI共創時代の実践者', desc: '自らコードを書かずにAIでアプリ開発（Vibe Coding）を行い、HCD Studioを開発。生成AIをワークショップ設計・ファシリテーション・業務プロセスに統合する、圧倒的な実践知と最前線の経験を持ちます。', color: 'border-green-300 bg-green-100/60 ring-1 ring-green-200', num_color: 'text-green-600' },
                ].map((s) => (
                  <div key={s.num} className={`rounded-2xl p-5 border ${s.color}`}>
                    <div className="flex items-start gap-4">
                      <span className={`text-3xl font-bold ${s.num_color} leading-none flex-shrink-0`}>{s.num}</span>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-2">{s.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 実績 ── */}
      <section id="achievements" className="py-24 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-green-500 uppercase tracking-widest mb-3">Achievements</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-14">主な実績</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏢', title: '企業研修・組織開発', items: [
                { org: '大手SIerグループ', detail: '若手社員向けシナリオプランニング研修（沖縄・1.5日間）' },
                { org: '大手重工業メーカー', detail: 'デザイン思考導入推進者向けWSの改善ワークショップ（全3回）' },
                { org: 'ハロー！パソコン教室', detail: 'スタッフ向けチームビルディングWS' },
              ]},
              { icon: '🎓', title: '大学・教育', items: [
                { org: '東京工芸大学', detail: '工学部向け「人間中心設計入門」特別講義' },
                { org: '津田塾大学', detail: '情報科学科3年生セミナー「INTERACTION DESIGN」' },
                { org: '東京都立産業技術大学院大学', detail: '「人間中心デザイン特論」非常勤講師' },
                { org: '玉川大学', detail: '異分野コラボレーションWS・メーカーズフロア活用WS' },
              ]},
              { icon: '🌿', title: '学会・地方創生', items: [
                { org: '日本画像学会', detail: 'カジュアルイベント「Imaging NEXT」立ち上げ・企画・実施（2025年度会長特賞受賞 🏆）' },
                { org: '鹿児島県大崎町', detail: 'ゴミ分別リサイクル／生成AI活用 住民参加型WS' },
                { org: 'HCD-Net', detail: 'HCD実践者向けワークショップデザインセミナー' },
              ]},
            ].map((cat) => (
              <div key={cat.title} className="bg-white rounded-2xl p-6 border border-green-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="font-bold text-slate-700 text-sm">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((a) => (
                    <li key={a.org} className="text-sm">
                      <p className="font-medium text-slate-700">{a.org}</p>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{a.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="https://note.com/gurisan_ws/n/n64134bc300ba" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-green-200 text-green-700 font-medium rounded-xl hover:bg-green-50 hover:border-green-400 transition-colors shadow-sm text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              具体的な実績をもっと見る（note）
            </a>
          </div>
        </div>
      </section>

      {/* ── HCD Studio ── */}
      <section id="tools" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold text-green-500 uppercase tracking-widest mb-3">Tool</p>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">グリサン開発ツール</h2>
          <p className="text-center text-slate-500 mb-14">HCD × AI の実践知から生まれたAIプロダクト</p>
          <div className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-2xl p-8 sm:p-10 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-green-200 uppercase tracking-wider">Now Available</p>
                <h3 className="font-bold text-white text-xl">HCD Studio</h3>
              </div>
            </div>
            <p className="text-green-100 leading-relaxed mb-6 max-w-2xl">
              インタビュー設計・AI収集・KA法・ペルソナ・ジャーニーマップまで、HCDリサーチのフルサイクルをひとつのプラットフォームで。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { icon: '🎤', label: 'AIインタビュー' },
                { icon: '🔬', label: 'KA法分析' },
                { icon: '🤖', label: 'AI分析 13手法' },
                { icon: '📊', label: '定量×定性統合' },
              ].map((f) => (
                <div key={f.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-xl mb-1">{f.icon}</div>
                  <p className="text-xs text-green-100 font-medium">{f.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`${HCD_URL}/login?mode=signup`} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors">
                無料で始める →
              </a>
              <a href={`${HCD_URL}/pricing`} className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-medium rounded-xl hover:bg-white/30 transition-colors">
                料金プランを見る
              </a>
              <Link href="/hcd-studio" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-medium rounded-xl hover:bg-white/30 transition-colors">
                詳細・機能紹介 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── お問い合わせ ── */}
      <section id="contact" className="py-24 px-6 bg-green-50">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">お問い合わせ</h2>
          <p className="text-slate-500 leading-relaxed mb-10">
            ワークショップの企画・ご相談、登壇依頼、HCD Studioの導入支援など、<br className="hidden sm:block" />
            まずはお気軽にご連絡ください。
          </p>
          <a href="mailto:info@gurisanws.com"
             className="inline-flex items-center gap-3 px-10 py-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors shadow-lg">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            メールでお問い合わせ
          </a>
          <p className="text-xs text-slate-400 mt-4">info@gurisanws.com</p>
        </div>
      </section>

      {/* ── フッター ── */}
      <footer className="bg-green-900 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/gurisanta.png" alt="グリサンタ" width={36} height={36} className="object-contain" />
            <div>
              <span className="text-sm font-bold text-green-100">GURISAN</span>
              <span className="text-xs text-green-400 ml-2">/ グリサン</span>
              <p className="text-xs text-green-500 mt-0.5">Workshop Design × HCD × AI</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-green-300">
            <a href="#services"     className="hover:text-white transition-colors">サービス</a>
            <a href="#about"        className="hover:text-white transition-colors">グリサンについて</a>
            <a href="#achievements" className="hover:text-white transition-colors">実績</a>
            <a href="#tools"        className="hover:text-white transition-colors">ツール</a>
            <a href="#contact"      className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
          <p className="text-xs text-green-600">© 2026 GURISAN. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}
