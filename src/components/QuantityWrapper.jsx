import React from 'react';

const QuantityWrapper = () => {
  return (
    <div className="quantity-wrapper">
      <label htmlFor="quantity" className="font-serif Aleo text-[20px] ">
        Cantidad:
      </label>
      <select
        id="quantity"
        className="form-dropdown font-serif Aleo text-lg font-bold bg-gray-200 border border-gray-300 rounded-md px-4 py-2"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
      </select>
    </div>
  );
};

export default QuantityWrapper;