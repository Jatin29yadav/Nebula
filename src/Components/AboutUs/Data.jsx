const Data = ({ Num, Label }) => {
  return (
    <div>
      <div className="2xl:text-[4rem] sm:text-[3rem] text-[2rem] font-bold">
        {Num}
      </div>
      <div className="lg:text-md sm:text-sm text-xs">{Label}</div>
    </div>
  );
};

export default Data;
