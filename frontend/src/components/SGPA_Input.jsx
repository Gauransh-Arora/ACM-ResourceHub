import React, { useState } from 'react'

function SGPA_Input() {
  const [numRows, setNumRows] = useState(0);
  const [rowsData, setRowsData] = useState([]);
  const [cgpa, setCgpa] = useState(null);

  const addRows = () => {
    const inputValue = document.getElementById('numSemesters').value;
    const rows = Array.from({ length: parseInt(inputValue) || 0 }, () => ({
      totalCredits: '',
      creditsSecured: ''
    }));
    setNumRows(rows.length);
    setRowsData(rows);
    setCgpa(null); // reset CGPA when generating new rows
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rowsData];
    updatedRows[index][field] = value;
    setRowsData(updatedRows);
  };

  const calculateCGPA = () => {
    let totalCreditsSum = 0;
    let creditsSecuredSum = 0;

    rowsData.forEach(row => {
      const total = parseFloat(row.totalCredits) || 0;
      const secured = parseFloat(row.creditsSecured) || 0;
      totalCreditsSum += total;
      creditsSecuredSum += secured;
    });

    if (totalCreditsSum === 0) {
      setCgpa(0);
    } else {
      setCgpa((creditsSecuredSum / totalCreditsSum).toFixed(2));
    }
  };

  return (
    <>
      <div className='flex justify-center mb-4'>   
        <input
          id="numSemesters"
          type="number"
          placeholder='Number of semesters'
          className='border-1 mx-2 p-1'
        />
        <button
          onClick={addRows}
          className='bg-[#85daf5] rounded-sm px-3 w-30'
        >
          Get
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        {Array.from({ length: numRows }, (_, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            <input
              type="text"
              placeholder={`Sem ${rowIndex + 1}`}
              className="border p-1"
              readOnly
            />
            <input
              type="number"
              placeholder="Total Credits"
              className="border p-1"
              value={rowsData[rowIndex]?.totalCredits || ''}
              onChange={(e) =>
                handleInputChange(rowIndex, 'totalCredits', e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Credits Secured"
              className="border p-1"
              value={rowsData[rowIndex]?.creditsSecured || ''}
              onChange={(e) =>
                handleInputChange(rowIndex, 'creditsSecured', e.target.value)
              }
            />
          </div>
        ))}
      </div>

      {numRows > 0 && (
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={calculateCGPA}
            className='bg-[#85daf5] px-4 py-1 rounded-sm'
          >
            Calculate CGPA
          </button>
          {cgpa !== null && (
            <p className="mt-2 font-bold">Your CGPA: {cgpa*10}</p>
          )}
        </div>
      )}
    </>
  );
}

export default SGPA_Input;
