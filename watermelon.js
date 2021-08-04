//수박수박수박수박수박수?
function solution(n) {
    var answer = '';
    let watermelon = ['수', '박']
    for(let i = 0; i<n; i++){
        if(i%2==0){
            answer += watermelon[0]
        }else{
            answer += watermelon[1]
        }
    }
    return answer;
}