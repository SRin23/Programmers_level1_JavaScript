//정수 제곱근 판별
function solution(n) {
    var answer = -1;
    console.log(Math.sqrt(n))
    if(Math.sqrt(n)%1===0){
        answer = Math.pow((Math.sqrt(n)+1),2)
    }
    return answer;
}