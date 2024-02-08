function addingFivePointsInGrades(studentgrades){
    let newAray = [];
    studentgrades.map((grade) => {
        grade += 5
        newAray.push(grade)
    })
   
    console.log(newAray)
} 

const studentgrades = [85, 92, 78, 88,95]
addingFivePointsInGrades(studentgrades);



// Tom is a teacher who wants to increase the scores of his
// students by adding 5 points to each score in a list of exam
// grades: [85, 92, 78, 88, 95]. Using the map method, help
// Tom increase the scores of his students.