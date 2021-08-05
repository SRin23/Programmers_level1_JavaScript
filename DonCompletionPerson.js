//완주하지 못한 선수(효율성낮음)
function solution(participant, completion) {
    var answer = '';
    for(let i = 0; i<participant.length; i++){
        if(completion.includes(participant[i])){
            for(let j = 0; j<completion.length; j++){
                if(completion[j]===participant[i]){
                    completion[j] = 'check';
                    break;
                }
            }
        }else{
            answer = participant[i]
            break;
        }
    }
    return answer;
}