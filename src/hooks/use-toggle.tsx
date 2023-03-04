import React from "react";

function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = React.useState(initialValue);

  function toggleValue(): void {
    setValue((currentValue) => !currentValue);
  }

  return [value, toggleValue];
}

export default useToggle;
