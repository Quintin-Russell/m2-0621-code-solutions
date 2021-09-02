// const express = require('express');
// const pg = require('pg');

// const app = express();
// app.listen(3000, () => console.log('listening on port 3000'));
// const db = new pg.Pool({
//   connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// function returnError(res, errNum, str) {
//   return res.status(errNum).json({
//     error: str
//   });
// }

// app.get('/api/grades', (req, res, next) => {
//   const sql = `
//   select *
//     from "grades"
//   `;
//   db.query(sql)
//     .then(result => {
//       res.status(200).json(result.rows);
//     })
//     .catch(err => {
//       next(err);
//     });
// });

// app.delete('/api/grades/:gradeId', (req, res, next) => {
//   const gradeId = parseInt(req.params.gradeId, 10);
//   if (!Number.isInteger(gradeId)) {
//     res.status(400).json(
//       {
//         error: 'Please enter a valid gradeID'
//       }
//     );
//     return;
//   }
//   const query = {
//     text: `
//     delete from "grades"
//     where "gradeId" = $1
//     `,
//     values: [gradeId]
//   };
//   db.query(query)
//     .then(result => {
//       if (result.rowCount < 1) {
//         const str = 'Please enter an Id that exists in the database';
//         return returnError(res, 404, str);
//       }
//       const message = {
//         message: `the entry with the Id of ${gradeId} was deleted`
//       };
//       res.status(204).json(message);
//     })
//     .catch(err => {
//       next(err);
//     });
// });

// app.use(express.json());

// app.post('/api/grades', (req, res, next) => {
//   let cont = true;
//   const idealKeys = ['name', 'course', 'score'];
//   const query = {
//     text: `
//     insert into "grades" ("name", "course", "score")
//       values ($1, $2, $3)
//     returning "gradeId", "name", "course", "score", "createdAt" as "returnSt"
//     `,
//     values: []
//   };
//   for (const key of idealKeys) {
//     if (((Object.keys(req.body).includes(key)) === false) || (!req.body[key])) {
//       const str = 'Please enter a valid grade, name, course, and score that is an integer';
//       returnError(res, 400, str);
//       cont = false;
//       break;
//     }
//     if (key === 'score') {
//       const parsedScore = parseInt(req.body[key]);
//       if ((Number.isInteger(parsedScore) === false) || (parsedScore < 0) || (parsedScore > 100)) {
//         const str = 'Please enter a valid grade, name, course, and score that is an integer between 0 and 100';
//         returnError(res, 400, str);
//         cont = false;
//         break;
//       }
//       req.body[key] = parsedScore;
//     }
//     const val = req.body[key];
//     query.values.push(val);
//   }
//   if (cont === true) {
//     db.query(query)
//       .then(result => {
//         console.log(result.rows[0]);
//         const ret = result.rows[0];
//         res.status(204).json(ret);
//       })
//       .catch(err => {
//         next(err);
//       });
//   }
// });

// // error handling; make sure this is at the bottom
// app.use((err, req, res, next) => {
//   if (err) {
//     const errorMes = {
//       error: 'An unexpected error occurred'
//     };
//     res.status(500).json(errorMes);
//   }
// });
