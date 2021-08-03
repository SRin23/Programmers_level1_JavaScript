//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    var answer = [];
    for(let i= 0; i<arr.length; i++){
        if(arr[i]%divisor==0){
            answer.push(arr[i])
        }
    }
    if(answer.length==0){
        answer.push(-1)
    }else{
        answer.sort(compare)
    }

    return answer;
}


function compare(a, b) {
  if (a > b) return 1; 
  if (a == b) return 0; 
  if (a < b) return -1; 
}