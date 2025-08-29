// 3-get_ids_sum.js
export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return 0;
  }
  return list.reduce((acc, student) => acc + student.id, 0);
}
