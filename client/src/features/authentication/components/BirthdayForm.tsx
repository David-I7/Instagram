import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getDays, getYears, getMonths } from "../helpers/BirthdayDates";
import { useLocation, useNavigate } from "react-router-dom";
import { handleRegisterForm } from "../../../services/formSubmission";

type BirthdayFormProps = {
  getChosenDate: (year: number, month: number, day: number) => void;
  chosenDate: Date;
};

const BirthdayForm = ({ getChosenDate, chosenDate }: BirthdayFormProps) => {
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
    console.log(e.target.selectedOptions[0].value);
    if (actionType === "month") {
      setSelectedMonth(Number(e.target.selectedOptions[0].value));
    } else if (actionType === "day") {
      setSelectedDay(Number(e.target.selectedOptions[0].value));
    } else if (actionType === "year") {
      setSelectedYear(Number(e.target.selectedOptions[0].value));
    }
  };

  useEffect(() => {
    getChosenDate(selectedYear, selectedMonth, selectedDay);
  }, [selectedDay, selectedMonth, selectedYear]);

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <form
      onSubmit={(e: FormEvent) => {
        handleRegisterForm(e, {
          displayUsername: location.state.displayUsername,
          secondaryUsername: location.state.secondaryUsername,
          pwd: location.state.pwd,
          birthday: chosenDate,
          fullName: location.state.fullName,
        });

        navigate("emailsignup/confirmation");
      }}
    >
      <select
        className="mr-2 border border-gray-300 text-gray-500 text-xs p-2 outline-none"
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
        className="mr-2 border border-gray-300 text-gray-500 text-xs p-2 outline-none"
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
        className="border border-gray-300 text-gray-500 text-xs p-2 outline-none"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleChange(e, "year")
        }
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
