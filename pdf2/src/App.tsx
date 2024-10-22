import { useEffect, useState } from "react";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import dayjs from "dayjs";
import isLeapYaer from "dayjs/plugin/isLeapYear";
import isToday from "dayjs/plugin/isToday";
import "./App.css";
dayjs.extend(isLeapYaer);
dayjs.extend(isToday);
function App() {
  const [currentYear, setCurrentYear] = useState(dayjs().get("year"));
  const [currentMonth, setCurrentMonth] = useState(dayjs().get("month"));
  const [lastMonthLastDate, setLastMonthLastDate] = useState(
    dayjs(
      `${currentYear}-${currentMonth < 0 ? 11 : currentMonth}`,
    ).daysInMonth(),
  );
  const [monthFirstDay, setMonthFirstDay] = useState(
    dayjs().startOf("month").day(),
  );
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  useEffect(() => {
    console.log(dayjs("2025-2").daysInMonth());
    setLastMonthLastDate(
      dayjs(
        `${currentYear}-${currentMonth < 0 ? 11 : currentMonth}`,
      ).daysInMonth(),
    );
    setMonthFirstDay(
      dayjs(`${currentYear}-${currentMonth + 1}`)
        .startOf("month")
        .day(),
    );
  }, [currentMonth]);
  return (
    <div className="w-dvw h-dvh flex items-center justify-center ">
      <div className="calendar w-[350px] h-[240px] border ">
        <div className="head flex justify-between items-center w-full h-11 mb-4 ">
          <button
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentYear((prev) => prev - 1);
                setCurrentMonth(11);
              } else {
                setCurrentMonth((prev) => prev - 1);
              }
            }}
            className="h-11 w-11 bg-white hover:bg-[#e6e6e6] flex justify-center items-center transition-all"
          >
            <MdOutlineArrowBackIos />
          </button>
          <div>
            {currentYear}年{currentMonth + 1}月
          </div>
          <button
            onClick={() => {
              if (currentMonth + 1 === 12) {
                setCurrentYear((prev) => prev + 1);
                setCurrentMonth(0);
              } else {
                setCurrentMonth((prev) => prev + 1);
              }
            }}
            className="h-11 w-11 bg-white hover:bg-[#e6e6e6] flex justify-center items-center transition-all"
          >
            <MdArrowForwardIos />
          </button>
        </div>
        <div className="body">
          {/* <div className="days">
						<div>日</div>
						<div>一</div>
						<div>二</div>
						<div>三</div>
						<div>四</div>
						<div>五</div>
						<div>六</div>
					</div> */}
          <div className="date grid grid-cols-7">
            {monthFirstDay !== 0
              ? Array.from({ length: monthFirstDay }).map((_, i) => {
                  return (
                    <button
                      className="w-[50px] h-9 flex justify-center items-center opacity-70 hover:bg-[#e6e6e6]"
                      key={i}
                    >
                      {lastMonthLastDate - monthFirstDay + i + 1}日
                    </button>
                  );
                })
              : null}
            {Array.from({
              length: Math.min(
                dayjs(`${currentYear}-${currentMonth + 1}`).daysInMonth(),
                35 - monthFirstDay,
              ),
            }).map((_, i) => (
              <div
                className={`w-[50px] h-9 flex justify-center items-center bg-white ${
                  dayjs(new Date(currentYear, currentMonth, i + 1)).isToday()
                    ? "bg-[#ffff76]"
                    : ""
                }`}
                key={i}
              >
                {i + 1}日
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
