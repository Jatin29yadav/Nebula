import ShinyText from "@/components/TextAnimation/ShinyText";
import ElectricBorder from "@/components/BorderAnimation/ElectricBorder";

const LogData = ({ data }) => {
  return (
    <div className="w-full h-full">
      <ElectricBorder
        color={data.colorHex}
        speed={1.3}
        chaos={0.14}
        thickness={2}
        style={{ borderRadius: 24 }}
      >
        <div
          style={{ backgroundColor: `${data.colorHex}0D` }}
          className="h-full w-full rounded-[22px] backdrop-blur-md p-8 flex flex-col gap-6 overflow-hidden transition-all duration-500"
        >
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
            className="font-bold text-2xl tracking-wide"
          />

          <div className="flex flex-col gap-3">
            <p className={`font-bold tracking-wider ${data.statusColor}`}>
              Status : {data.status}
            </p>
            <p className="text-gray-300 leading-relaxed font-light opacity-90">
              <span className="font-bold text-white opacity-100">Log :</span>{" "}
              {data.log}
            </p>
          </div>
        </div>
      </ElectricBorder>
    </div>
  );
};

export default LogData;
