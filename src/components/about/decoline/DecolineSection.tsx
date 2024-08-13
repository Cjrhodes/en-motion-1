import React from 'react';

const DecoLineSection = () => {
  // Inline styles for the decorative line
  const lineStyle = {
    border: 0,
    height: '3px',
   
    width: '100%', // Sets the width of the line; adjust as needed
    margin: 'auto' // Centers the line within the container
  };

  return (
    <div className="deco-line-section my-5">
      <hr style={lineStyle} />
    </div>
  );
};

export default DecoLineSection;
