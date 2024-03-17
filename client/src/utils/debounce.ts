export default function debounce(cb: Function, delay = 500) {
  let timeoutID: number | undefined;
  return (...args: any[]) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      console.log("running fn..");
      cb(...args);
    }, delay);
  };
}
