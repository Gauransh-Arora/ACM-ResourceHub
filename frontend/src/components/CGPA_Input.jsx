import React, { useState } from "react";

// Subject data for different years
const subjectsByYear = {
  "Year 1": [
    "Mathematics I",
    "Physics",
    "Chemistry", 
    "Engineering Drawing",
    "Programming Fundamentals"
  ],
  "Year 2": [
    "Mathematics II",
    "Data Structures",
    "Digital Logic",
    "Computer Organization",
    "Object Oriented Programming"
  ],
  "Year 3": [
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Algorithm Analysis"
  ],
  "Year 4": [
    "Machine Learning",
    "Distributed Systems",
    "Cybersecurity",
    "Project Management",
    "Final Year Project"
  ]
};

const gradeOptions = ["A+", "A", "B+", "B", "C+", "C", "D", "F"];

// Dropdown Component
const Dropdown = ({ options = [], placeholder, value, onChange, className = "" }) => {
  return (
    <div className="relative flex-1">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 border border-[#15A6DD] rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#15A6DD] ${className}`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

// Subject Row Component
const SubjectRow = ({ subjects, onSubjectChange, onCreditsChange, onGradeChange, subjectValue, creditsValue, gradeValue }) => {
  return (
    <div className="flex gap-4 items-center">
      <Dropdown
        options={subjects}
        placeholder="Select Subject"
        value={subjectValue}
        onChange={onSubjectChange}
      />
      <input
        type="number"
        placeholder="Enter Credits"
        value={creditsValue}
        onChange={(e) => onCreditsChange(e.target.value)}
        className="flex-1 px-4 py-2 border border-[#15A6DD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#15A6DD]"
        min="1"
        max="6"
      />
      <Dropdown
        options={gradeOptions}
        placeholder="Select Grade"
        value={gradeValue}
        onChange={onGradeChange}
      />
    </div>
  );
};

// Main CGPA Input Component
const CGPA_Input = ({ selectedYear }) => {
  const [subjects, setSubjects] = useState([
    { id: 1, subject: "", credits: "", grade: "" },
    { id: 2, subject: "", credits: "", grade: "" },
    { id: 3, subject: "", credits: "", grade: "" },
    { id: 4, subject: "", credits: "", grade: "" },
    { id: 5, subject: "", credits: "", grade: "" }
  ]);

  const availableSubjects = subjectsByYear[selectedYear] || [];

  const updateSubject = (id, field, value) => {
    setSubjects(prev => 
      prev.map(sub => 
        sub.id === id ? { ...sub, [field]: value } : sub
      )
    );
  };

  const addSubject = () => {
    const newId = Math.max(...subjects.map(s => s.id)) + 1;
    setSubjects(prev => [...prev, { id: newId, subject: "", credits: "", grade: "" }]);
  };

  return (
    <div className="space-y-4">
      {subjects.map((subject) => (
        <SubjectRow
          key={subject.id}
          subjects={availableSubjects}
          subjectValue={subject.subject}
          creditsValue={subject.credits}
          gradeValue={subject.grade}
          onSubjectChange={(value) => updateSubject(subject.id, 'subject', value)}
          onCreditsChange={(value) => updateSubject(subject.id, 'credits', value)}
          onGradeChange={(value) => updateSubject(subject.id, 'grade', value)}
        />
      ))}
      
      <button
        onClick={addSubject}
        className="w-full py-3 bg-[#8FDAF5] border border-[#15A6DD] text-[#15A6DD] font-semibold rounded-md hover:bg-[#7DD3F0] transition-colors duration-300"
      >
        + Add Subject
      </button>
      
      <div className="flex justify-center mt-8">
        <button
          className="px-12 py-3 bg-[#15A6DD] text-white font-semibold rounded-md hover:bg-[#1296c7] transition-colors duration-300"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default CGPA_Input;