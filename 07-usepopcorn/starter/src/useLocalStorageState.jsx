import {useEffect, useState} from "react";

export function useLOcalStorageState(initalState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initalState;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
