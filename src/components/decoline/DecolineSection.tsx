import React from 'react';

const DecoLineSection = () => {
  // Inline styles for the decorative line
  const lineStyle = {
    border: 'none',
    height: '1px'// Centers the line within the container
  };

  return (
    <div className="deco-line-section my-5">
      <hr style={lineStyle} />
    </div>
  );
};

export default DecoLineSection;
