import ShinyText from "../../components/TextAnimation/ShinyText";

const Data = ({ Num, Label }) => {
  return (
    <div className="data-item p-5 mx-auto">
      <div className="font-bold font2 xl:text-[9rem] text-[6rem]">
        <ShinyText
          text={Num}
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
      </div>
      <div className="text-sm md:text-md text-gray-400 font-mono tracking-widest uppercase">
        {Label}
      </div>
    </div>
  );
};

export default Data;
