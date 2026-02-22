import ShinyText from "@/components/TextAnimation/ShinyText";

const LogData = ({ data }) => {
  const bgImage =
    data.image ||
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";

  return (
    <div className="w-full h-full group relative p-px rounded-[22px] overflow-hidden transform-gpu">
      <div
        className="absolute inset-0 opacity-30 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(135deg, transparent 0%, transparent 40%, ${data.colorHex} 100%)`,
        }}
      />

      <div className="relative h-full w-full rounded-[21px] p-8 flex flex-col gap-6 overflow-hidden bg-[#050505]">
        <img
          src={bgImage}
          alt="Sector Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-1500 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/70 to-transparent" />

        <div className="absolute inset-0 z-20 rounded-[21px] border border-white/5 transition-all duration-700 pointer-events-none" />

        <div
          className="absolute inset-0 z-20 rounded-[21px] border-2 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
          style={{
            borderColor: data.colorHex,
            boxShadow: `inset 0 0 30px ${data.colorHex}30`,
          }}
        />

        <div className="relative z-10">
          <ShinyText
            text={data.sector}
            speed={3}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={false}
            disabled={false}
            className="font-bold text-2xl tracking-wide drop-shadow-md"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-3 mt-auto">
          <p
            className={`font-bold tracking-wider ${data.statusColor}`}
            style={{ textShadow: `0 0 15px ${data.colorHex}80` }}
          >
            Status : {data.status}
          </p>
          <p className="text-gray-300 leading-relaxed font-light opacity-90">
            <span className="font-bold text-white opacity-100 drop-shadow-md">
              Log :
            </span>{" "}
            {data.log}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogData;
