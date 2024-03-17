import { useEffect } from "react";

const useDebounce = (onChange: Function, dependency: any, delay = 500) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onChange();
    }, delay);
    return () => clearTimeout(timerId);
  }, [onChange, dependency, delay]);
};

export default useDebounce;
