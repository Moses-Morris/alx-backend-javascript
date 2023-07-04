const updateStudentGradeByCity = (students, city, newGrade) => students
  .filter((student) => student.location === city)
  .map((item) => {
    const newRecord = { ...item };

    const newStudents = newGrade.find((student) => student.studentId === item.id);
    if (newStudents) newRecord.grade = newStudents.grade;
    else newRecord.grade = 'N/A';
    return newRecord;
  });

export default updateStudentGradeByCity;
