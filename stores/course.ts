import type { Course } from "~/types/course.dto";

// export const useCourseStore = defineStore("course", () => {
//   const course = ref<Course | null>(null);

//   async function fetchCourse(courseId: string) {
//     // const response = await $fetch(`/api/course/${courseId}`);
//     const response: Course = {
//       courseId: "1",
//       courseName: "XÁC SUẤT THỐNG KÊ ĐẠI HỌC BÁCH KHOA HÀ NỘI",
//     };
//     course.value = response as Course;
//   }
//   return { course, fetchCourse };
// });

export const useCourseStore = defineStore("course", {
  state: (): Course => ({
    courseId: "1",
    courseName: "XÁC SUẤT THỐNG KÊ - ĐẠI HỌC BÁCH KHOA HÀ NỘI",
  }),
  actions: {
    async fetchCourse(courseId: string) {
      // const response = await $fetch(`/api/course/${courseId}`);
      const response: Course = {
        courseId: "1",
        courseName: "XÁC SUẤT THỐNG KÊ ĐẠI HỌC BÁCH KHOA HÀ NỘI",
      };
      this.$patch(response);
    },
  },
});
