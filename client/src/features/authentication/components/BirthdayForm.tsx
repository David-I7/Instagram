import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getDays, getYears, getMonths } from "../helpers/BirthdayDates";
import { useNavigate, useLocation } from "react-router-dom";
import DynamicSubmitButton from "./DynamicSubmitButton";
import { getTailwindStyles } from "../helpers/Styles";
import { isValidAge } from "../helpers/BirthdayDates";
import { handleRegisterForm } from "../../../services/formSubmission";

const BirthdayForm = () => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [chosenDate, setChosenDate] = useState<Date>(new Date());

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
      setSelectedMonth(Number(e.target.selectedOptions[0].value));
    } else if (actionType === "day") {
      setSelectedDay(Number(e.target.selectedOptions[0].value));
    } else if (actionType === "year") {
      setSelectedYear(Number(e.target.selectedOptions[0].value));
    }
  };

  useEffect(() => {
    setChosenDate(new Date(selectedYear, selectedMonth, selectedDay));
    setFormIsValid(
      isValidAge(new Date(selectedYear, selectedMonth, selectedDay))
    );
  }, [selectedDay, selectedMonth, selectedYear]);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        handleRegisterForm(e, {
          displayUsername: location.state.displayUsername,
          secondaryUsername: location.state.secondaryUsrname,
          pwd: location.state.pwd,
          birthday: chosenDate,
          fullName: location.state.fullName,
        });
        navigate("/emailsignup/confirmation", {
          state: {
            ...location.state,
            chosenDate,
          },
        });
      }}
    >
      <div className="flex justify-center">
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
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleChange(e, "day")
          }
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
      </div>

      <p className="py-2 text-xs text-gray-400 text-center">
        You need to enter the date you were born
      </p>
      <p className="py-2 text-xs text-gray-400 text-center">
        Use your own birthday, even if this account is for a business account, a
        pet, or something else
      </p>
      <div className="py-4 px-2 w-full">
        <DynamicSubmitButton
          content="Next"
          tailwindStyles={getTailwindStyles(formIsValid)}
        />
      </div>
    </form>
  );
};

export default BirthdayForm;
