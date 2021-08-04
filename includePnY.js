//문자열 내 p와 y의 개수
function solution(s){
    var answer = false;
    let Pcnt = 0;
    let Ycnt = 0;
    for(let i = 0; i<s.length; i++){
        if(s.charAt(i)=='p'||s.charAt(i)=='P'){
            Pcnt++;
        }else if(s.charAt(i)=='y'||s.charAt(i)=='Y'){
            Ycnt++;
        }
    }
    if(Pcnt===Ycnt){
        answer = true
    }
    return answer;
}