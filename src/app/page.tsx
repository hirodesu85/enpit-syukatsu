export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">ツクカツ</h1>
      <h2 className="text-xl mb-6">つくばのエンジニア志望学生のインターン探しをサポートするサイト</h2>
      <div className="border rounded-lg p-6 shadow-lg w-full max-w-md">
        {/* 会社のロゴ */}
        <div className="flex justify-center mb-4">
        </div>
        {/* 会社情報 */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">[未経験でも大丈夫！] ホームページを作ってみよう！</h3>
          </div>
          <div>
            <h3 className="font-semibold text-lg">社名:</h3>
            <p>DIC Japan株式会社</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">職種:</h3>
            <p>ホームページ制作</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">時給:</h3>
            <p>1200円 ~ 2000円</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">勤務地:</h3>
            <p>茨城県つくば市梅園5丁目34</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">勤務時間:</h3>
            <p>フレックスタイム制(週合計12時間)</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">求められること:</h3>
            <ul className="list-disc pl-5">
              <li>学習意欲があり成長したい人</li>
              <li>使う言語はHTMLとCSSです</li>
              <li>実務前にチュートリアルを用意してあるので、未経験でも安心して参加いただけます！</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
