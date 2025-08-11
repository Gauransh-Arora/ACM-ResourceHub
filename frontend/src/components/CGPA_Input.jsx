import React, { useState } from "react";

function CGPA_Input() {
  const [numRows, setNumRows] = useState(0);
  const [rowsData, setRowsData] = useState([]);
  const [cgpa, setCgpa] = useState(null);

  const addRows = () => {
    const inputValue = document.getElementById("numSemesters").value;
    const rows = Array.from({ length: parseInt(inputValue) || 0 }, () => ({
      totalCredits: "",
      SGPAsecured: "",
    }));
    setNumRows(rows.length);
    setRowsData(rows);
    setCgpa(null);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rowsData];
    updatedRows[index][field] = value;
    setRowsData(updatedRows);
  };

const calculateCGPA = () => {
  const toNumber = (v) => {
    if (v === null || v === undefined) return 0;
    if (typeof v === 'number') return v;
    const n = parseFloat(String(v).replace(',', '.').trim());
    return Number.isNaN(n) ? 0 : n;
  };

  let totalCredits = 0;
  let weightedSum = 0; 

  rowsData.forEach(row => {
    const credits = toNumber(row.totalCredits); 
    const sgpa = toNumber(row.SGPAsecured ?? row.sgpa ?? row.SGPA);

    totalCredits += credits;
    weightedSum += sgpa * credits;
  });

  if (totalCredits === 0) {
    setCgpa(0);
    return;
  }

  const cgpa = weightedSum /( totalCredits*10);
  setCgpa(cgpa.toFixed(3)); 
};


  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className=" ">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <input
            id="numSemesters"
            type="number"
            placeholder="Enter Number of Semesters"
            className="w-full sm:w-56  border-1 px-4 py-2 text-center focus:outline-none transition-all duration-200"
            style={{ borderColor: "#15A6DD", backgroundColor: "white" }}
            max={8}
            min={1}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addRows();
              }
            }}
          />
          <button
            onClick={addRows}
            className="w-full sm:w-auto bg-[#D3F3FF] border border-[#15A6DD] text-[#434343] font-semibold hover:bg-[#7DD3F0] cursor-pointer transition-colors duration-300  px-6 py-2  focus:outline-none"
          >
            Generate Semesters
          </button>
        </div>

        
        {numRows > 0 && (
          <div className="space-y-4 mb-6">
            <h3
              className="text-lg font-semibold text-center mb-4"
              style={{ color: "#15A6DD" }}
            >
              Enter Credits for Each Semester
            </h3>


            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#15A6DD" }}>
                    <th
                      className="border px-4 py-2 text-left font-semibold text-white"
                      style={{ borderColor: "#15A6DD" }}
                    >
                      Semester
                    </th>
                    <th
                      className="border px-4 py-2 text-left font-semibold text-white"
                      style={{ borderColor: "#15A6DD" }}
                    >
                      Total Credits
                    </th>
                    <th
                      className="border px-4 py-2 text-left font-semibold text-white"
                      style={{ borderColor: "#15A6DD" }}
                    >
                      SGPA Secured
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: numRows }, (_, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="hover:opacity-90"
                      style={{ backgroundColor: "white" }}
                    >
                      <td
                        className="border px-4 py-2"
                        style={{ borderColor: "#15A6DD" }}
                      >
                        <span
                          className="font-medium"
                          style={{ color: "#15A6DD" }}
                        >
                          Semester {rowIndex + 1}
                        </span>
                      </td>
                      <td
                        className="border px-4 py-2"
                        style={{ borderColor: "#15A6DD" }}
                      >
                        <input
                          type="number"
                          placeholder="Total Credits"
                          className="w-full border-0 p-2 focus:outline-none"
                          style={{ backgroundColor: "white" }}
                          value={rowsData[rowIndex]?.totalCredits || ""}
                          onChange={(e) =>
                            handleInputChange(
                              rowIndex,
                              "totalCredits",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td
                        className="border px-4 py-2"
                        style={{ borderColor: "#15A6DD" }}
                      >
                        <input
                          type="number"
                          placeholder="SGPA Secured"
                          className="w-full border-0 p-2 focus:outline-none "
                          style={{ backgroundColor: "white" }}
                          value={rowsData[rowIndex]?.SGPAsecured || ""}
                          onChange={(e) =>
                            handleInputChange(
                              rowIndex,
                              "SGPAsecured",
                              e.target.value
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden space-y-3">
              {Array.from({ length: numRows }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  className=" p-4 border"
                  style={{ backgroundColor: "white", borderColor: "#15A6DD" }}
                >
                  <h4
                    className="font-semibold mb-3"
                    style={{ color: "#15A6DD" }}
                  >
                    Semester {rowIndex + 1}
                  </h4>
                  <div className="space-y-2">
                    <input
                      type="number"
                      placeholder="Total Credits"
                      className="w-full border  px-3 py-2 focus:outline-none"
                      style={{
                        borderColor: "#15A6DD",
                        backgroundColor: "white",
                      }}
                      value={rowsData[rowIndex]?.totalCredits || ""}
                      onChange={(e) =>
                        handleInputChange(
                          rowIndex,
                          "totalCredits",
                          e.target.value
                        )
                      }
                    />
                    <input
                      type="number"
                      placeholder="SGPA Secured"
                      className="w-full border  px-3 py-2 focus:outline-none"
                      style={{
                        borderColor: "#15A6DD",
                        backgroundColor: "white",
                      }}
                      value={rowsData[rowIndex]?.SGPAsecured || ""}
                      onChange={(e) =>
                        handleInputChange(
                          rowIndex,
                          "SGPAsecured",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {numRows > 0 && (
          <div className="text-center space-y-4">
            <button
              onClick={calculateCGPA}
              className="w-full sm:w-auto text-white font-semibold px-8 py-3 text-lg transition-colors duration-200 focus:outline-none"
              style={{ backgroundColor: "#15A6DD" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1296c7")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#15A6DD")}
            >
              Calculate CGPA
            </button>

            {cgpa !== null && (
              <div
                className="border p-6"
                style={{ backgroundColor: "white", borderColor: "#15A6DD" }}
              >
                <p
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "#15A6DD" }}
                >
                  Your CGPA:{" "}
                  <span style={{ color: "#15A6DD" }}>{cgpa * 10}</span>
                </p>
                <p className="text-sm mt-2" style={{ color: "#15A6DD" }}>
                  Based on a 10-point scale
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CGPA_Input;
