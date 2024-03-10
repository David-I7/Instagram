import { useEffect, useState } from "react";

const getItem = <T,>(key: string, initialvalue: T): T => {
  const value = JSON.parse(localStorage.getItem(key)!);
  if (value) return value;

  if (!value && initialvalue instanceof Function) return initialvalue();
  return initialvalue;
};

const useLocalStorage = <T,>(
  key: string,
  initialvalue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(() => getItem(key, initialvalue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value as T, setValue];
};

export default useLocalStorage;
