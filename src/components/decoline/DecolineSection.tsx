import React from 'react';

const DecoLineSection = () => {
  // Inline styles for the decorative line
  const lineStyle = {
    border: 'none',
    height: '1px', // Adjust the height as needed
    backgroundColor: 'black', // Set the line color to black
  };

  return (

      <div style={lineStyle} />

  );
};

export default DecoLineSection;