//제일 작은 수 제거하기
function solution(arr) {
    var answer = [];
    if(arr.length==1){
        answer[0] = -1
        return answer
    }else{
        let min = arr[0];
        let minidx;
        for(let i = 1; i<arr.length; i++){
            if(min > arr[i]){
                min = arr[i]
                minidx = i
            }
        }
        arr.splice(minidx, 1)
        answer = arr
    }
    
    return answer;
}