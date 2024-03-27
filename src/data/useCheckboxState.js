import { useState } from "react";



const useCheckboxState = () => {
  const initialValues = Array(26).fill(false);
  const [isChecked, setIsChecked] = useState(initialValues);

  const tuFuncionHandleChange = (index) => {
    console.log("Checkbox value:", index);
    // Aquí puedes realizar las acciones necesarias cuando cambia el estado del checkbox
  };

  const handleCheckboxChange = (index) => {
    setIsChecked((prevIsChecked) => {
      const newIsChecked = [...prevIsChecked];
      newIsChecked[index] = !newIsChecked[index];
      tuFuncionHandleChange(index);
      return newIsChecked;
    });
  };

  return {
    isChecked,
    handleCheckboxChange,
  };
};

export default useCheckboxState;