//문자열 다루기
function solution(s) {
    var answer = false;
    if(s.length===4||s.length===6){
        if(!isNaN(s)){
            //지수("10e2")는 Number로 변환시, NaN이 아님
            //즉, e가 포함됨에도 true가 나오므로, 예외처리
            if(s.includes('e')||s.includes('E')){
                answer = false
            }
            else{
                answer = true;   
            }
        }
    }
    return answer;
}