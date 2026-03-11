import express from "express";

const PORT = 3030;
const app = express();

app.use(express.json());

const students = [
  { id: 1, name: "Ann", subject: "maths" },
  { id: 2, name: "Bob", subject: "IT" },
  { id: 3, name: "Cloe", subject: "PE" },
];

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.get("/students/:id", (req, res) => {
  const id = +req.params.id;
  const student = students.find((x) => x.id === id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.status(200).json(student);
});

app.post("/students", (req, res) => {
  const body = req.body;
  if (body.name === undefined || body.subject === undefined) {
    return res.status(400).json({ message: "Name and subject are required" });
  }
  const { name, subject } = req.body;
  const newId = (students[students.length - 1].id || 0) + 1;
  const student = { id: newId, name, subject };
  students.push(student);
  res.status(201).json(student);
});

app.put("/students/:id", (req, res) => {
  const id = +req.params.id;
  const student = students.find((x) => x.id === id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  const body = req.body;
  if (body.name === undefined || body.subject === undefined) {
    return res.status(400).json({ message: "Name and subject are required" });
  }
  const { name, subject } = req.body;
  student.name = name;
  student.subject = subject;
  res.status(200).json(student);
});

app.delete("/students/:id", (req, res) => {
  const id = +req.params.id;
  const student = students.find((x) => x.id === id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  const index = students.indexOf;
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
