//Definition of data structures : A data structure is a specific way of organizing, storing, and accessing data.

//what is algorithm : A set of instuctions that  tells a computer how to do something, or you can also say step-by-step solution of the problem is called algorithm.
const studentDatabase = ["jordon","erick","john","michel"];//data structure

const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++){
        if(allStudents[i] === studentName){
        console.log(`Found $(studentName)`);
        }
    }
}

findStudent(studentDatabase, "erick");

//why should we use data structures? : Efficient Problem Solving, Algorithmic Awareness, Stronger Coding Skills, Interview Sucess, Coding 