import React, { useState, useEffect } from "react";
import Select from "react-select/creatable";
import year1Data from "../data/year_1.json";
import year2Data from "../data/year_2.json";

const gradeOptions = ["A+", "A", "A-", "B", "B-", "C", "C-", "E", "F"];

const calculateSGPA = (subjects) => {
  let totalCredits = 0;
  let totalPoints = 0;

  const gradeToPoint = {
    "A+": 10,
    A: 10,
    "A-": 9,
    B: 8,
    "B-": 7,
    C: 6,
    "C-": 5,
    E: 2,
    F: 0,
  };

  subjects.forEach(({ grade, credits }) => {
    const credit = parseFloat(credits);
    const point = gradeToPoint[grade];

    if (!isNaN(credit) && point !== undefined) {
      totalCredits += credit;
      totalPoints += credit * point;
    }
  });

  if (totalCredits === 0) return 0;

  return (totalPoints / totalCredits).toFixed(2);
};

const Dropdown = ({
  options = [],
  placeholder,
  value,
  onChange,
  design = "",
}) => {
  const formattedOptions = options.map((opt) => ({
    value: opt,
    label: opt,
  }));

  return (
    <div className={`relative flex-1 ${design}`}>
      <Select
        options={formattedOptions}
        placeholder={placeholder}
        value={value ? { value, label: value } : null}
        onChange={(selected) => onChange(selected ? selected.value : "")}
        isClearable
        classNames={{
          control: () =>
            "border border-[#15A6DD] px-2 py-1 shadow-none placeholder:text-black",
          menu: () => "z-10",
        }}
        styles={{
          input: (base) => ({
            ...base,
            width: "10%",
            minWidth: "90%",
            maxWidth: "90%",
          }),

          control: (base) => ({
            ...base,
            borderColor: "#15A6DD",
            boxShadow: "none",
            borderRadius: "none",
            "&:hover": { borderColor: "#1296c7" },
            color: "#000000",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#000000",
          }),

          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
              ? "#8FDAF5"
              : state.isFocused
              ? "#E0F4FB"
              : "white",
            color: state.isSelected ? "black" : "#111",
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
};

const SubjectRow = ({
  subjects,
  onSubjectChange,
  onCreditsChange,
  onGradeChange,
  subjectValue,
  creditsValue,
  gradeValue,
}) => {
  const subjectOptions = subjects.map((sub) => ({
    value: sub.subject_name,
    label: sub.subject_name,
  }));

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
      <div className="relative w-full sm:flex-1">
        <Select
          isClearable
          placeholder="Select or Type Subject"
          options={subjectOptions}
          value={
            subjectValue ? { value: subjectValue, label: subjectValue } : null
          }
          onChange={(selectedOption) =>
            onSubjectChange(selectedOption ? selectedOption.value : "")
          }
          styles={{
            control: (base) => ({
              ...base,
              borderColor: "#15A6DD",
              boxShadow: "none",
              borderRadius: "none",
              "&:hover": { borderColor: "#1296c7" },
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? "#8FDAF5"
                : state.isFocused
                ? "#E0F4FB"
                : "white",
              color: state.isSelected ? "black" : "#111",
              cursor: "pointer",
            }),
          }}
        />
      </div>

      <input
        type="number"
        placeholder="Enter Credits"
        value={creditsValue}
        onChange={(e) => onCreditsChange(e.target.value)}
        className="w-full sm:flex-1 px-4 py-2 border border-[#15A6DD] focus:outline-none focus:ring-2 focus:ring-[#15A6DD] text-black"
        min="0"
        max="6"
      />

      <div className="w-full sm:flex-1">
        <Dropdown
          options={gradeOptions}
          placeholder="Select Grade"
          value={gradeValue}
          onChange={onGradeChange}
        />
      </div>
    </div>
  );
};

const SGPA_Input = () => {
  const [selectedPool, setSelectedPool] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [sgpa, setSGPA] = useState(null);

  const [selectedYear, setSelectedYear] = useState("Year 1");
  const years = ["Year 1", "Year 2", "Year 3", "Year 4"];

  const subjectData = selectedYear === "Year 1" ? year1Data : year2Data;

  const poolOptions = Object.keys(subjectData).filter((key) =>
    Array.isArray(subjectData[key])
  );

  const updateSubject = (id, field, value) => {
    setSubjects((prev) => {
      return prev.map((sub) => {
        if (sub.id !== id) return sub;

        const updated = { ...sub, [field]: value };

        if (field === "subject") {
          const credit = subjectData[value]?.Credit || 0;
          updated.credits = credit;
        }

        return updated;
      });
    });
  };

  const addSubject = () => {
    const newId = Math.max(0, ...subjects.map((s) => s.id)) + 1;
    setSubjects((prev) => [
      ...prev,
      { id: newId, subject: "", credits: "", grade: "" },
    ]);
  };

  useEffect(() => {
    if (selectedPool) {
      setSubjects([
        { id: 1, subject: "", credits: "", grade: "" },
        { id: 2, subject: "", credits: "", grade: "" },
        { id: 3, subject: "", credits: "", grade: "" },
        { id: 4, subject: "", credits: "", grade: "" },
        { id: 5, subject: "", credits: "", grade: "" },
      ]);
    }
  }, [selectedPool]);

  const subjectList = selectedPool ? subjectData[selectedPool] || [] : [];

  return (
    <div className="space-y-4 max-w-3xl mx-auto px-4">
      <nav className="mt-4 mb-6 w-full">
        <ul className="flex text-lg font-semibold">
          {years.map((year) => (
            <li
              key={year}
              className={`flex-1 text-center cursor-pointer border border-[#15A6DD] px-4 py-2 transition-colors duration-300 ${
                selectedYear === year
                  ? "bg-[#8FDAF5]"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </li>
          ))}
        </ul>
      </nav>
      <Dropdown
        options={poolOptions}
        placeholder="Select Your Branch / Pool"
        value={selectedPool}
        onChange={(val) => setSelectedPool(val)}
        design="bg-[#15a6DD]"
      />

      {subjects.map((subject, index) => (
        <>
          <SubjectRow
            key={subject.id}
            subjects={subjectList}
            subjectValue={subject.subject}
            creditsValue={subject.credits}
            gradeValue={subject.grade}
            onSubjectChange={(value) =>
              updateSubject(subject.id, "subject", value)
            }
            onCreditsChange={(value) =>
              updateSubject(subject.id, "credits", value)
            }
            onGradeChange={(value) => updateSubject(subject.id, "grade", value)}
          />
        </>
      ))}

      <button
        onClick={addSubject}
        className="w-full py-3 bg-[#D3F3FF] border border-[#15A6DD] text-[#434343] font-semibold  hover:bg-[#7DD3F0] transition-colors duration-300"
      >
        + Add Subject
      </button>

      <div className="flex justify-center  flex-col items-center gap-4">
        {sgpa !== null && (
          <div className="text-xl font-bold text-[#fffff] ">SGPA: {sgpa}</div>
        )}
        <button
          className="px-12 py-3 mb-20 bg-[#15A6DD] text-white font-semibold  hover:bg-[#1296c7] transition-colors duration-300 "
          onClick={() => setSGPA(calculateSGPA(subjects))}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default SGPA_Input;
