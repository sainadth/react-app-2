import { useEffect, useState } from "react";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return <h1>Multiple Returns Heading</h1>;
};

export default MultipleReturns;
