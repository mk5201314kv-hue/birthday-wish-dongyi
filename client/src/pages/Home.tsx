import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Redirect to the birthday page
    window.location.href = '/birthday.html';
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#010103]">
      <div className="text-white text-center">
        <div className="animate-pulse">✨ 星光汇聚中...</div>
      </div>
    </div>
  );
}
