// All Test Data in One File
// Easy to change all test data here

const testData = {
  // Valid test data
  validUser: {
    name: 'SQA Tester',
    email: 'test@yopmail.com',
    message: 'This is a test message from automated testing'
  },

  // Invalid test data
  invalidUser: {
    name: '',
    email: 'invalid-email',
    message: ''
  },

  // Empty fields
  emptyFields: {
    name: '',
    email: '',
    message: ''
  },

  // Different user types
  businessUser: {
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    message: 'We are interested in your business solutions.'
  },

  studentUser: {
    name: 'Mike Johnson',
    email: 'mike.j@university.edu',
    message: 'I am a student looking for internship opportunities.'
  },

  // Boundary test data
  longName: {
    name: 'A'.repeat(100), // Very long name
    email: 'test@example.com',
    message: 'Test message'
  },

  longMessage: {
    name: 'Test User',
    email: 'test@example.com',
    message: 'B'.repeat(1000) // Very long message
  }
};

module.exports = testData;
