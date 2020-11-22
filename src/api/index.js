import axios from "axios";
// let apiUrl = "https://cyber-bullying-backend.herokuapp.com/api";
let apiUrl = "http://localhost:3001/api";

let Course = {
  getCourses: ()=> axios.get(`${apiUrl}/class/getCourses`),
  getCourseByUUId: (uuid)=> axios.get(`${apiUrl}/class/getCourseByUUId/${uuid}`),
  getStudentsInCourse: (id)=> axios.get(`${apiUrl}/class/getStudentsInCourse/${id}`),
  getCoursesForTeacher: (id)=> axios.get(`${apiUrl}/class/getCoursesForTeacher/${id}`),
  getFlaggedContentByCourseId: (id)=> axios.get(`${apiUrl}/class/getFlaggedContentByCourseId/${id}`),
}

let Students = {
  getStudents: () => axios.get(`${apiUrl}/students/`),
  getStudentsByUUId: (uuid) => axios.get(`${apiUrl}/students/${uuid}`),
  getFlaggedContentByStudentId: (id) => axios.get(`${apiUrl}/students/flagged/${id}`)
}


let Teacher = {
  getTeachers: ()=> axios.get(`${apiUrl}/teachers/`),
  getTeachersById: (id)=> axios.get(`${apiUrl}/teachers/${id}`),
}

export default {Course, Students, Teacher};