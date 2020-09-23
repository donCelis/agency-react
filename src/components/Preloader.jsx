import React, { useState, useEffect } from "react";
import { Sugar } from "react-preloaders";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);
  
  return (
    <Sugar
      customLoading={loading}
      time={0}
      color={"white"}
      background="hsl(168, 76%, 42%)"
      animation="fade"
    />
  );
};

export default Preloader;
