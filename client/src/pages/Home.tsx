import { useEffect, useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = '/index.html';
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen flex items-center justify-center bg-[#010103]">
      <div className="text-white text-center">
        <div className="animate-pulse">✨ 星光汇聚中...</div>
      </div>
    </div>
  );
}
