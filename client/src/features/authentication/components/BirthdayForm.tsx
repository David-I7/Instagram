import { ChangeEvent, useEffect, useRef, useState } from "react";
import { getDays, getYears, getMonths } from "../helpers/BirthdayDates";
import { useNavigate } from "react-router-dom";

type BirthdayFormProps = {
  getChosenDate: (year: number, month: number, day: number) => void;
};

const BirthdayForm = ({ getChosenDate }: BirthdayFormProps) => {
  const monthRef = useRef<HTMLSelectElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<number>(currentDay);
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);

  const handleChange = async (
    e: ChangeEvent<HTMLSelectElement>,
    actionType: string
  ) => {
    if (actionType === "month") {
      setSelectedMonth(Number(monthRef.current?.selectedOptions[0].value));
    } else if (actionType === "day") {
      setSelectedDay(Number(dayRef.current?.selectedOptions[0].value));
    } else if (actionType === "year") {
      setSelectedYear(Number(yearRef.current?.selectedOptions[0].value));
    }
  };

  useEffect(() => {
    getChosenDate(selectedYear, selectedMonth, selectedDay);
  }, [selectedDay, selectedMonth, selectedYear]);

  const navigate = useNavigate();

  return (
    <form method="post" action='http"//localhost:3000/auth'>
      <select
        className="mr-2 border border-gray-300 text-gray-400 text-xs p-2 outline-none"
        ref={monthRef}
        name="month"
        title="Month:"
        defaultValue={currentMonth}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleChange(e, "month")
        }
      >
        {getMonths(selectedYear).map((month: string, index: number) => {
          return (
            <option
              key={`${month}`}
              title={`${month}`}
              value={`${index}`}
            >{`${month}`}</option>
          );
        })}
      </select>
      <select
        className="mr-2 border border-gray-300 text-gray-400 text-xs p-2 outline-none"
        ref={dayRef}
        name="day"
        title="Day:"
        defaultValue={currentDay}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e, "day")}
      >
        {currentMonth === selectedMonth && currentYear === selectedYear
          ? getDays(currentDay).map((day: number) => {
              return (
                <option key={day} value={day}>
                  {day}
                </option>
              );
            })
          : getDays(
              selectedMonth,
              selectedYear,
              selectedDay,
              setSelectedDay
            ).map((day: number) => {
              return (
                <option key={day} value={day}>
                  {day}
                </option>
              );
            })}
      </select>
      <select
        className="border border-gray-300 text-gray-400 text-xs p-2 outline-none"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleChange(e, "year")
        }
        ref={yearRef}
        name="year"
        title="Year:"
        defaultValue={currentYear}
      >
        {getYears(currentYear).map((year: number) => {
          return (
            <option value={year} key={year}>
              {year}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default BirthdayForm;
