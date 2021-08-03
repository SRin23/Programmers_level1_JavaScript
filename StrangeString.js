//이상한 문자 만들기
function solution(s) {
    var answer = '';
    let cnt = 0;
    for(let i = 0; i<s.length; i++){
        if(s[i]==' '){
            //console.log(s[i]+"공백"+cnt)
            answer+=' '
            cnt = 0;
            continue
        }
        if(cnt%2==0){
            //console.log(s[i]+"짝수"+cnt)
            answer+=s[i].toUpperCase()
            cnt++;
        }else{
            //console.log(s[i]+"홀수"+cnt)
            answer+=s[i].toLowerCase()
            cnt++;
        }

    }
    return answer;
}