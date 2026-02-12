// Object de-structure

const course = {
    coursename: "Alpha",
    price: "999",
    courseInstructor: "Karan Roshan"
}

// course.courseInstructor

const {courseInstructor} = course;
const {courseInstructor: instructor} = course;

console.log(courseInstructor);
console.log(instructor);