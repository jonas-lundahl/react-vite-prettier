import React from "react";
import { format as formatFn } from "date-fns";

interface ClockProps {
  format?: string;
}

function Clock({ format = "hh:mm:ss" }: ClockProps) {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <p className={"clock"}>{formatFn(time, format)}</p>;
}

export default Clock;
