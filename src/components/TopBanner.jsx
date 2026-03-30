export default function TopBanner() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-b border-blue-100">

      <div className="flex whitespace-nowrap animate-marquee py-2 text-sm font-medium text-blue-700">

        <span className="mx-10">
          ⚠️ Disclaimer: UrbanKicks does NOT sell original branded shoes. We sell premium UA+ high-quality sneakers with excellent finishing and comfort.
        </span>

        <span className="mx-10">
          ⚠️ Disclaimer: UrbanKicks does NOT sell original branded shoes. We sell premium UA+ high-quality sneakers with excellent finishing and comfort.
        </span>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%) }
          100% { transform: translateX(-100%) }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

    </div>
  );
}