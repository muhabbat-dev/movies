import React from "react";

function Box({ children }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        display: 'block',
        lineHeight: 2,
        padding: '1rem',
        marginBottom: '0.5rem',
        width: 100,
      }}
    >
      {children}
    </div>
  );
}

// Method 1: Use the wrapper prop
const wrapped1 = <Skeleton wrapper={Box} count={5} />;

// Method 2: Do it "the normal way"
const wrapped2 = (
  <Box>
    <Skeleton />
  </Box>
);