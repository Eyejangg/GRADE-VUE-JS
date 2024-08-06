new Vue({
  el: "#app",
  data: {
    score: null,
    grade: null,
    gradeDescription: "",
  },
  methods: {
    calculateGrade() {
      if (this.score >= 90) {
        this.grade = " A";
        this.gradeDescription = "ดีเยี่ยมมากๆ";
      } else if (this.score >= 80) {
        this.grade = " B";
        this.gradeDescription = "ดีมาก";
      } else if (this.score >= 70) {
        this.grade = " C";
        this.gradeDescription = "ปานกลาง";
      } else if (this.score >= 60) {
        this.grade = " D";
        this.gradeDescription = "พอใช้";
      } else {
        this.grade = " F";
        this.gradeDescription = "สอบตก";
      }
    },
  },
});
