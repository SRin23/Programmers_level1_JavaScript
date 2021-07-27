//자연수 뒤집어 배열로 만들기
function solution(n) {
    var answer = [];
    n = n.toString().split('').reverse()
    for(let i = 0; i<n.length; i++){
        answer[i] = Number(n[i])
    }
    return answer;
}