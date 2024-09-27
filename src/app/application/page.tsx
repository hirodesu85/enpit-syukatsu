"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Application() {
  const router = useRouter();
  const [workDays, setWorkDays] = useState('');
  const [weekdayDays, setWeekdayDays] = useState('');
  const [hours, setHours] = useState(15);
  const [period, setPeriod] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = workDays !== '' && weekdayDays !== '' && hours > 0 && period !== '';
    setIsFormValid(isValid);
  }, [workDays, weekdayDays, hours, period]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid){
        console.log({ workDays, weekdayDays, hours, period });
        router.push('/congratulation');
    }else{
        alert("すべての項目を入力してください。");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center bg-purple-700 text-white py-4 rounded-b-lg rounded-t-lg">
        応募フォーム入力画面
      </h1>
      <h2 className="text-2xl font-semibold text-center mt-4">ツクカツ株式会社</h2>

      <form onSubmit={handleSubmit}>
        <div className="mt-6">
          <label className="block font-medium text-gray-700">
          <span className="text-lg font-semibold mt-4"> 勤務条件</span> ※おおよそで構いません。
          </label>
          <p className="mt-2 font-medium">1週間の勤務可能な日数<span className="text-red-500"> *</span></p>
          <div className="flex space-x-4 mt-2">
            {[1, 2, 3, 4, 5].map((day) => (
              <label key={day} className="flex items-center">
                <input
                  type="radio"
                  name="work-days"
                  value={day}
                  checked={workDays === String(day)}
                  onChange={(e) => setWorkDays(e.target.value)}
                  className="mr-2"
                />
                {day === 5 ? '5日以上' : `${day}日`}
              </label>
            ))}
          </div>

          <p className="mt-4 font-medium">そのうち平日の日数<span className="text-red-500"> *</span></p>
          <div className="flex space-x-4 mt-2">
            {[1, 2, 3, 4, 5].map((day) => (
              <label key={day} className="flex items-center">
                <input
                  type="radio"
                  name="weekday-days"
                  value={day}
                  checked={weekdayDays === String(day)}
                  onChange={(e) => setWeekdayDays(e.target.value)}
                  className="mr-2"
                />
                {day === 5 ? '5日以上' : `${day}日`}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="hours" className="block font-medium text-gray-700">
            週の合計勤務可能時間<span className="text-red-500"> *</span>
          </label>
          <input
            type="number"
            id="hours"
            name="hours"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            min="1"
            max="40"
            className="mt-2 w-half p-2 border border-gray-300 rounded-md"
          /> 時間
        </div>

        <div className="mt-6">
          <label htmlFor="period" className="block font-medium text-gray-700">
            継続可能期間<span className="text-red-500">*</span>
          </label>
          <select
            id="period"
            name="period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">選択してください</option>
            <option value="1">1ヶ月</option>
            <option value="2">2〜3ヶ月</option>
            <option value="3">4〜6ヶ月</option>
            <option value="4">6ヶ月〜1年</option>
            <option value="5">1年以上</option>
          </select>
        </div>

        <div className="mt-6">
          <button type="submit" className={`w-full py-2 rounded-md ${isFormValid ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-500'}`}>
            応募する
          </button>
        </div>
      </form>
    </div>
  );
}
