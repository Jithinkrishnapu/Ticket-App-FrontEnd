import React from "react";

const Select = ({ onselect,bgColor,value }) => {
    const options = [
    { value: "NEW", label: "New" },
    { value: "OPEN", label: "Open" },
    { value: "CLOSED", label: "Closed" },
    { value: "ONHOLD", label: "On Hold" },
  ];

  return (
    <select
      value={value}
      onChange={(e) => onselect(e.target.value)}
      id="states"
      class={`${bgColor} border w-fit  border-gray-300  text-sm text-white rounded-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-white focus:border-white block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-blue-500`}
    >
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
