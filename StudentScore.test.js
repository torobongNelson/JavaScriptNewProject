const{findingStudentScore} = require('./task');

test('filter scores >= 70', ()=>{

    const scores = [70,20,40,50,80,100]
    const answer = StudentSCore(scores);
    expect(answer).toEqual([70,80,100]);
    
})

