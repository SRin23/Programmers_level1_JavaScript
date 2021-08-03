//약수의 합 구하기
function solution(n) {
    var answer = 0;
    for(let i = 0; i<=n; i++){
        if(n%i==0){
            answer+=i
        }
    }
    /*
    answer = n.reduce(function(sum, item, idx, n){
        if(n)
    }, 0);
    */
    return answer;
}