function findingStudentScore(score) {
    let result = score.filter(praise=> praise + 5);
    return result;
}

    const studentScores = [20, 50, 60,70,50, 40, 80, 90,100,60]
console.log(findingStudentScore(studentScores))
