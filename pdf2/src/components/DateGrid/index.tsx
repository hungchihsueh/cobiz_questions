import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);
type Props = {
  date: number;
  currentYear: number;
  currentMonth: number;
  startDate: null | string;
  setStartDate: React.Dispatch<React.SetStateAction<string | null>>;
  endDate: null | string;
  setEndDate: React.Dispatch<React.SetStateAction<string | null>>;
  isCurrentMonth: boolean;
};

export default function DateGrid({
  date,
  currentYear,
  currentMonth,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  isCurrentMonth,
}: Props) {
  const dayString = `${currentYear}-${currentMonth}-${date}`;
  const theDay = dayjs(dayString);
  return (
    <button
      onClick={() => {
        if (startDate && endDate) {
          setStartDate(dayString);
          setEndDate(null);
        } else if (!startDate) {
          setStartDate(dayString);
        } else {
          if (dayjs(dayString).isBefore(dayjs(startDate))) {
            setStartDate(dayString);
          } else {
            setEndDate(dayString);
          }
        }
      }}
      className={`flex h-9 w-[50px] items-center justify-center transition-all hover:bg-[#e6e6e6] ${!isCurrentMonth ? "opacity-50" : null} ${
        isCurrentMonth && theDay.isToday() ? "bg-[#ffff76]" : "bg-white"
      } ${(theDay.isSame(dayjs(startDate)) || theDay.isSame(dayjs(endDate))) && "!bg-[#006edc] text-white !opacity-100"} ${startDate && endDate && theDay.isBetween(dayjs(startDate), dayjs(endDate)) && "!bg-[#006edc] text-white !opacity-100"} `}
    >
      {date}日
    </button>
  );
}
