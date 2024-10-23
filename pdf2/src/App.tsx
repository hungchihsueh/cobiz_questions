import { useEffect, useState } from "react";
import DateGrid from "./components/DateGrid";
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
  const [startDate, setStartDate] = useState<null | string>(null);
  const [endDate, setEndDate] = useState<null | string>(null);
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
    <div className="flex h-dvh w-dvw flex-col items-center justify-center">
      <div className="calendar mb-10 h-fit w-[350px] border">
        <div className="head mb-4 flex h-11 w-full items-center justify-between">
          <button
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentYear((prev) => prev - 1);
                setCurrentMonth(11);
              } else {
                setCurrentMonth((prev) => prev - 1);
              }
            }}
            className="flex h-11 w-11 items-center justify-center bg-white transition-all hover:bg-[#e6e6e6]"
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
            className="flex h-11 w-11 items-center justify-center bg-white transition-all hover:bg-[#e6e6e6]"
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
                    <DateGrid
                      key={`${currentMonth}-${i}`}
                      lastMonthLastDate={lastMonthLastDate}
                      monthFirstDay={monthFirstDay}
                      date={lastMonthLastDate - monthFirstDay + i + 1}
                      currentYear={currentYear}
                      currentMonth={currentMonth}
                      startDate={startDate}
                      setStartDate={setStartDate}
                      endDate={endDate}
                      setEndDate={setEndDate}
                      isCurrentMonth={false}
                    />
                    // <button
                    //   onClick={() => {
                    //     if (startDate && endDate) {
                    //       setStartDate(
                    //         `${currentYear}-${currentMonth}-${lastMonthLastDate - monthFirstDay + i + 1}`,
                    //       );
                    //       setEndDate(null);
                    //     } else if (!startDate) {
                    //       setStartDate(
                    //         `${currentYear}-${currentMonth}-${lastMonthLastDate - monthFirstDay + i + 1}`,
                    //       );
                    //     } else {
                    //       if (
                    //         dayjs(
                    //           `${currentYear}-${currentMonth}-${lastMonthLastDate - monthFirstDay + i + 1}`,
                    //         ).isBefore(dayjs(startDate))
                    //       ) {
                    //         setStartDate(
                    //           `${currentYear}-${currentMonth}-${lastMonthLastDate - monthFirstDay + i + 1}`,
                    //         );
                    //       } else {
                    //         setEndDate(
                    //           `${currentYear}-${currentMonth}-${lastMonthLastDate - monthFirstDay + i + 1}`,
                    //         );
                    //       }
                    //     }
                    //   }}
                    //   className="flex h-9 w-[50px] items-center justify-center opacity-70 transition-all hover:bg-[#e6e6e6]"
                    //   key={i}
                    // >
                    //   {lastMonthLastDate - monthFirstDay + i + 1}日
                    // </button>
                  );
                })
              : null}
            {Array.from({
              length: dayjs(`${currentYear}-${currentMonth + 1}`).daysInMonth(),
            }).map((_, i) => (
              <DateGrid
                key={`${currentMonth + 1}-${i}`}
                lastMonthLastDate={lastMonthLastDate}
                monthFirstDay={monthFirstDay}
                date={i + 1}
                currentYear={currentYear}
                currentMonth={currentMonth + 1}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                isCurrentMonth={true}
              />
              // <button
              //   className={`flex h-9 w-[50px] items-center justify-center bg-white transition-all hover:bg-[#e6e6e6] ${
              //     dayjs(new Date(currentYear, currentMonth, i + 1)).isToday()
              //       ? "bg-[#ffff76]"
              //       : ""
              //   }`}
              //   key={i}
              // >
              //   {i + 1}日
              // </button>
            ))}

            {dayjs(`${currentYear}-${currentMonth + 1}`).daysInMonth() +
              monthFirstDay <
              42 &&
              Array.from({
                length:
                  42 -
                  (dayjs(`${currentYear}-${currentMonth + 1}`).daysInMonth() +
                    monthFirstDay),
              }).map((_, i) => (
                <DateGrid
                  key={`${currentMonth + 2}-${i}`}
                  lastMonthLastDate={lastMonthLastDate}
                  monthFirstDay={monthFirstDay}
                  date={i + 1}
                  currentYear={currentYear}
                  currentMonth={currentMonth + 2}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                  isCurrentMonth={false}
                />
              ))}
          </div>
        </div>
      </div>
      <div>startDate: {!startDate ? "---" : startDate}</div>
      <div>endDate: {!endDate ? "---" : endDate}</div>
    </div>
  );
}

export default App;
