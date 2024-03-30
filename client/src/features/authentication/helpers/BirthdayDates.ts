import { MONTHS } from "../../../constants/dates";

function getDays(currentDay: number): number[];
function getDays(
  monthIndex: number,
  year: number,
  selectedDay: number,
  setSelectedDay: React.Dispatch<React.SetStateAction<number>>
): number[];
function getDays(
  arg1: number,
  arg2?: number,
  arg3?: number,
  arg4?: React.Dispatch<React.SetStateAction<number>>
): number[] {
  if (!arg2) {
    let daysArray: number[] = [];
    for (let i = 1; i <= arg1; i++) {
      daysArray.push(i);
    }
    return daysArray;
  } else {
    const days = new Date(arg2, arg1 + 1, 0).getDate();
    let daysArray: number[] = [];

    for (let i = 1; i <= days; i++) {
      daysArray.push(i);
    }

    daysArray.includes(arg3!) ? null : arg4!(1);

    return daysArray;
  }
}

const getYears = (currentYear: number): number[] => {
  let yearsArray: number[] = [];

  for (let i = currentYear; i >= currentYear - 105; i--) {
    yearsArray.push(i);
  }

  return yearsArray;
};

const getMonths = (year: number): string[] => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  if (currentYear === year) return MONTHS.slice(0, currentMonth + 1);

  return MONTHS;
};

const isValidAge = (chosenDate: Date): boolean => {
  const timeDifference = new Date().getTime() - 1000 * 60 * 60 * 24 * 365.4 * 5;
  console.log(timeDifference, chosenDate, chosenDate.getTime());

  if (chosenDate.getTime() > timeDifference) return false;

  return true;
};

export { getDays, getYears, getMonths, isValidAge };
