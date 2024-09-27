import Link from 'next/link';

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
            <h3 className="font-semibold text-lg">Rails 長期エンジニアインターン募集中！</h3>
          </div>
          <div>
            <h3 className="font-semibold text-lg">社名:</h3>
            <p>ツクカツ株式会社</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">アクセス:</h3>
            <p>茨城県つくば市天王台１丁目１−１</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">職種:</h3>
            <p>サーバーサイドエンジニア長期インターン</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">必要なスキル:</h3>
            <ul className="list-disc pl-5">
              <li>プログラミング経験１年以上（授業などでもOK）</li>
              <li>Railsを用いて自作のWebアプリを１つ作成したことがある</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">応募前に勉強しておくといいこと:</h3>
            <ul className="list-disc pl-5">
              <li>Railsチュートリアルを一周する</li>
            </ul>
          </div>
          <div>
              <h3 className="font-semibold text-lg">現在働いているインターン生の情報:</h3>
              <ul className="list-disc pl-5">
                <details>
                  <summary className="cursor-pointer text-blue-500 hover:underline">Aさん</summary>
                  <div className="pl-5">
                    <p>業務内容：</p>
                    <p>週の勤務時間：</p>
                  </div>
                </details>
                <details>
                  <summary className="cursor-pointer text-blue-500 hover:underline">Bさん</summary>
                  <div className="pl-5">
                    <p>こちらにBさんの詳細情報が表示されます。</p>
                  </div>
                </details>
              </ul>
            </div>
          <div className="flex items-center">
            <Link href="" className="text-blue-500 hover:underline">
              詳細
            </Link>
            <Link href="/application" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto">
              応募する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
