import React, { useEffect, useState } from "react";

const DayE = () => {
  switch (dayNum) {
    case 0: {
      return "SUN";
    }
    case 1: {
      return "SUN";
    }
    case 2: {
      return "MON";
    }
    case 3: {
      return "WED";
    }
    case 4: {
      return "THU";
    }
    case 5: {
      return "FRI";
    }
    case 6: {
      return "SAT";
    }
  }
};

const Time = () => {
  const today = new Date();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const dayNum = today.getDay();

  const time = () => {
    setDay(DayE());
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDate(today.getDate());
  };

  useEffect(() => {
    time();
  }, [date]);

  return (
    <>
      <div>{year}</div>
      <div>{month}</div>
      <div>{date}</div>
      <div>{day}</div>
    </>
  );
};

export default Time;
