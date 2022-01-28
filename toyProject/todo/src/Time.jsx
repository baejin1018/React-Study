import React, { useEffect, useState } from "react";
const today = new Date();
const dayNum = today.getDay();
const DayE = () => {
  switch (dayNum) {
    case 0: {
      return "SUN";
    }
    case 1: {
      return "MON";
    }
    case 2: {
      return "TUE";
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
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

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
