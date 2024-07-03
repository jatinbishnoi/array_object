const student = {}; // Create an empty student object

// a) Prevent extensions to the student object
Object.preventExtensions(student);

// b) Check if the student object is extensible (opposite of preventExtensions)
const extensibleStatus = !Object.isExtensible(student); // Negate for readability

// c) Create a new teacher object with a 'subject' property
const teacher = { subject: 'Math' };

// d) Seal the teacher object, preventing additions or deletions of properties
Object.seal(teacher);

// e) Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

console.log("Extensible status of student:", extensibleStatus);
console.log("Sealed status of teacher:", sealedStatus);
