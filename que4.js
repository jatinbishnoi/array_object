const students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 10 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 18, grade: 11 },
    { id: 3, firstName: 'Mike', lastName: 'Lee', age: 19, grade: 9 },
  ];
  
  // Function to add a new student
  function addStudent(student) {
    // Check if ID already exists
    const existingStudent = students.find(s => s.id === student.id);
    if (existingStudent) {
      throw new Error('Student with ID ' + student.id + ' already exists!');
    }
  
    students.push(student);
  }
  
  // Function to update student information
  function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(s => s.id === id);
    if (studentIndex === -1) {
      throw new Error('Student with ID ' + id + ' not found!');
    }
  
    students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
  }
  
  // Function to delete a student
  function deleteStudent(id) {
    const studentIndex = students.findIndex(s => s.id === id);
    if (studentIndex === -1) {
      throw new Error('Student with ID ' + id + ' not found!');
    }
  
    students.splice(studentIndex, 1);
  }
  
  // Function to list all students
  function listStudents() {
    students.forEach(student => {
      console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
  }
  
  // Function to find students by grade
  function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
  }
  
  // Function to calculate average age
  function calculateAverageAge() {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    return totalAge / students.length;
  }
  
  // Usage examples
  addStudent({ id: 4, firstName: 'Alice', lastName: 'Johnson', age: 21, grade: 12 });
  updateStudent(2, { age: 19 });
  deleteStudent(1);
  
  listStudents();
  
  const grade10Students = findStudentsByGrade(10);
  console.log("Students in grade 10:", grade10Students);
  
  const averageAge = calculateAverageAge();
  console.log("Average age:", averageAge.toFixed(2)); // Format to two decimal places
  