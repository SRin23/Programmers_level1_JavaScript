//최대공약수와 최소공배수
function solution(n, m) {
    var answer = [];
    if(n>m){
        var tmp = n;
        n = m;
        m = tmp;
    }
    
    var max;
    for(let i = 0;i<m; i++){
        if(n%i==0&&m%i==0){
            max = i;
        }
    }
    
    var min = n*m/max;
    
    answer[0] = max
    answer[1] = min
    return answer;
}