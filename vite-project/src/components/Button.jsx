export const Button = ({ textToShow, handleClick, bgColor = "#0039a6" }) => {
  return (
    <button onClick={handleClick} style={{ backgroundColor: bgColor }}>
      {textToShow}
    </button>
  );
};
