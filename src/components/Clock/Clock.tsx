import * as React from "react";
import format from "date-fns/format";

interface ClockProps {
  timeFormat?: string;
}

function Clock({ timeFormat = "k:mm:ss" }: ClockProps) {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <span className={"clock"}>{format(time, timeFormat)}</span>;
}

export default Clock;
