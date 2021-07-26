//핸드폰 번호 가리기
function solution(phone_number) {
    var answer = '';
    for(let i = 0; i<(phone_number.length)-4; i++){
        answer+='*'
    }
    answer += phone_number.slice(phone_number.length-4, phone_number.length)
    return answer;
}