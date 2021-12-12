const Methamorphosis = ({ scroll = 0, ...rest }) => {
  return (
    <>
      <svg {...rest}>
        <path
          transform={`rotate(${parseInt(scroll)} 50 100)`}
          stroke-width={3 + parseInt(scroll) / 30}
          fill="none"
          stroke={`rgb(89,${200 - parseInt(scroll)},${parseInt(scroll)}`}
          d={`M 10,90
           C 130,90 ${90 + parseInt(scroll) / 10},10 ${
            parseInt(scroll) / 10
          },${scroll}`}
        />
      </svg>
    </>
  );
};

export default Methamorphosis;
