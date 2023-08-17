import { ChangeEvent, useEffect } from "react";

import { useDataContext } from "../../contexts/dataContext";
import * as S from "./styles";

export type SelectProps = {
  boxId: string;
  options: { value: string; text: string }[];
};

export function Select({ boxId, options }: SelectProps) {
  const { setData, data, setCurrentBoxValue, setEmptyFilterError } =
    useDataContext();

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    const optionIdx = event.target.selectedIndex;
    const newValue = event.target.children[optionIdx].textContent;

    setEmptyFilterError((oldValue) => ({
      ...oldValue,
      [boxId]: "",
    }));

    if (newValue) {
      setCurrentBoxValue((oldValue) => ({
        ...oldValue,
        [boxId]: {
          value: event.target.value,
          displayValue: newValue,
        },
      }));
    }
  }

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  return (
    <S.Select defaultValue={0} onChange={onChange}>
      <option disabled value="0">
        Selecione
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </S.Select>
  );
}
