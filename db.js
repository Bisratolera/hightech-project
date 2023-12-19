// const mysql = require('mysql2/promise');

// // Replace with your actual database credentials
// const config = {
//   host: 'localhost',
//   user: 'leul',
//   password: '1234',
//   database: 'db',
// };

// let connection;

// async function connectToDatabase() {
//   try {
//     connection = await mysql.createConnection(config);
//     console.log('Connected to MySQL database!');

//     // Create students table if it doesn't exist
//     await createStudentsTable();
//   } catch (error) {
//     console.error('Error connecting to database:', error);
//   }
// }

// async function createStudentsTable() {
//   const query = `CREATE TABLE IF NOT EXISTS students (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     full_name VARCHAR(255) NOT NULL,
//     stream VARCHAR(50) NOT NULL,
//     division VARCHAR(50) NOT NULL,
//     id_number VARCHAR(50) NOT NULL,
//     sex VARCHAR(10) NOT NULL,
//     sub_city VARCHAR(100) NOT NULL,
//     woreda VARCHAR(100) NOT NULL,
//     tel_no VARCHAR(20) NOT NULL
//   );`;

//   await connection.query(query);
//   console.log('Students table created successfully!');
// }

// connectToDatabase();

// // Export connection for usage in other modules
// module.exports = connection;