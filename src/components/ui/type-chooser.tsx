import React, { useState } from 'react';

const TypChooser = ({ selectedValue, labels, options, onChanged, isEnabled = true }) => {
  return (
    <div className="border rounded-lg border-gray-300 flex">
      {options.map((option, index) => (
        <React.Fragment key={option}>
          {index !== 0 && (
            <div className="border-l border-gray-300 h-auto my-2" />
          )}
          <label className="flex-1 p-3 flex items-center justify-center cursor-pointer select-none">
            <input
              type="radio"
              name="typchooser"
              value={option}
              disabled={!isEnabled}
              checked={selectedValue === option}
              onChange={() => onChanged(option)}
              className="form-radio accent-orange-500 ursor-pointer"
              // className="form-radio text-orange-500 cursor-pointer"
            />
            <span className="ml-2 text-gray-700">{labels[index]}</span>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TypChooser;
