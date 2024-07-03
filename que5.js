function displayStudentInfo(student) {
    // Loop through the student object properties
    for (const property in student) {
      // Access the property value using the property name
      const value = student[property];
  
      // Print the property and its value in a formatted way
      console.log(`${property}: ${value}`);
    }
  }
  
  // Example usage
  const student = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 20,
    grade: 11
  };
  
  displayStudentInfo(student);
  