export const getTailwindStyles = (condition: boolean): string => {
  return condition
    ? "bg-blue-500 rounded-lg text-white w-full p-1 cursor-pointer hover:brightness-90"
    : "bg-blue-400 rounded-lg text-white w-full p-1 cursor-default pointer-events-none";
};
