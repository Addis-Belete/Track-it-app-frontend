import React from 'react';

const AddMeasurement = () => {
  const category = ['Left bicep', 'Right bicep', 'Waist', 'Hips', 'Left thigh', 'Right thigh'];
  return (
    <div>
      <select name="cat" id="cat">
        {category.map((cat, id) => (
          <option value={id + 1} key={cat}>{cat}</option>
        ))}

      </select>
      <input type="number" step="0.1" min="0" max="100" />
      <button type="submit">Add Measurment</button>

    </div>

  );
};
export default AddMeasurement;
