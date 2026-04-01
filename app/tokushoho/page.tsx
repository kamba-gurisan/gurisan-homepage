import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | GURISAN',
  description: 'グリサン（GURISAN）の特定商取引法に基づく表記ページです。',
  alternates: {
    canonical: 'https://www.gurisanws.com/tokushoho',
  },
}

const items: { label: string; value: React.ReactNode }[] = [
  {
    label: '販売業者',
    value: 'グリサン（GURISAN）',
  },
  {
    label: '運営統括責任者',
    value: '上林 昭（かんばやし あきら）',
  },
  {
    label: '所在地',
    value: '〒145-0064 東京都大田区東雪谷2-15-5',
  },
  {
    label: '電話番号',
    value: (
      <>
        電話番号は、請求があれば遅滞なく開示いたします。<br />
        まずはメールにてお問い合わせください。
      </>
    ),
  },
  {
    label: 'メールアドレス',
    value: (
      <a href="mailto:info@gurisanws.com" className="text-green-700 underline underline-offset-2 hover:text-green-900 transition-colors">
        info@gurisanws.com
      </a>
    ),
  },
  {
    label: 'ウェブサイト',
    value: (
      <a href="https://www.gurisanws.com" className="text-green-700 underline underline-offset-2 hover:text-green-900 transition-colors">
        https://www.gurisanws.com
      </a>
    ),
  },
  {
    label: '販売商品・サービス',
    value: (
      <ul className="space-y-1 list-disc list-inside">
        <li>ワークショップ企画・プログラムデザイン・ファシリテーション</li>
        <li>企業研修・組織開発コンサルティング</li>
        <li>大学・教育機関向け講義・演習</li>
        <li>HCD Studio（AIリサーチプラットフォーム・SaaSサービス）</li>
      </ul>
    ),
  },
  {
    label: '販売価格',
    value: (
      <>
        <p className="mb-1.5">【コンサルティング・研修・ワークショップ】</p>
        <p className="text-slate-500 mb-3">案件の規模・内容により個別にお見積もりいたします。詳細はお問い合わせください。</p>
        <p className="mb-1.5">【HCD Studio】</p>
        <p className="text-slate-500">
          無料プランあり。有料プランの価格は{' '}
          <a href="https://hcd.gurisanws.com/pricing" target="_blank" rel="noopener noreferrer" className="text-green-700 underline underline-offset-2 hover:text-green-900 transition-colors">
            料金ページ
          </a>{' '}
          をご参照ください。表示価格はすべて税込みです。
        </p>
      </>
    ),
  },
  {
    label: '支払い方法',
    value: (
      <ul className="space-y-1 list-disc list-inside">
        <li>クレジットカード（Visa・Mastercard・American Express・JCB）</li>
        <li>銀行振込</li>
      </ul>
    ),
  },
  {
    label: '支払い時期',
    value: (
      <>
        <p className="mb-1.5">【クレジットカード】各カード会社の規定による</p>
        <p>【銀行振込】請求書発行後14日以内</p>
      </>
    ),
  },
  {
    label: 'サービス提供時期',
    value: (
      <>
        <p className="mb-1.5">【HCD Studio】決済確認後、即時ご利用いただけます。</p>
        <p>【コンサルティング・研修・ワークショップ】契約締結後、双方合意のスケジュールにて提供いたします。</p>
      </>
    ),
  },
  {
    label: '返品・キャンセルについて',
    value: (
      <>
        <p className="mb-1.5">【HCD Studio】</p>
        <p className="text-slate-500 mb-3">デジタルサービスの性質上、一度ご購入いただいたプランの返品・返金は原則承っておりません。ただし、サービスに重大な瑕疵があった場合はこの限りではありません。</p>
        <p className="mb-1.5">【コンサルティング・研修・ワークショップ】</p>
        <p className="text-slate-500">開催・実施日の14日前までのキャンセルは無料です。それ以降のキャンセルについては、別途ご相談ください。</p>
      </>
    ),
  },
]

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── ヘッダー ── */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/gurisanta.png" alt="グリサンタ" width={30} height={30} className="object-contain" />
            <span className="font-bold text-green-800 tracking-tight">GURISAN</span>
            <span className="text-xs text-slate-400 hidden sm:block">/ グリサン</span>
          </Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-green-700 transition-colors">
            ← トップへ戻る
          </Link>
        </div>
      </header>

      {/* ── コンテンツ ── */}
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">特定商取引法に基づく表記</h1>
          <p className="text-sm text-slate-400 mb-12">
            特定商取引に関する法律第11条に基づき、以下の事項を表記いたします。
          </p>

          <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100">
            {items.map(({ label, value }) => (
              <div key={label} className="grid sm:grid-cols-[180px_1fr]">
                <div className="bg-slate-50 px-6 py-5 flex items-start">
                  <span className="text-sm font-semibold text-slate-600">{label}</span>
                </div>
                <div className="px-6 py-5 text-sm text-slate-700 leading-relaxed">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-8 text-center">
            ご不明な点はお気軽に{' '}
            <a href="mailto:info@gurisanws.com" className="text-green-700 underline underline-offset-2 hover:text-green-900 transition-colors">
              info@gurisanws.com
            </a>{' '}
            までお問い合わせください。
          </p>
        </div>
      </main>

      {/* ── フッター ── */}
      <footer className="bg-green-900 py-10 px-6 mt-16">
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
            <Link href="/#services"    className="hover:text-white transition-colors">サービス</Link>
            <Link href="/#contact"     className="hover:text-white transition-colors">お問い合わせ</Link>
            <Link href="/tokushoho"    className="hover:text-white transition-colors text-green-200">特定商取引法</Link>
          </div>
          <p className="text-xs text-green-600">© 2026 GURISAN. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}
