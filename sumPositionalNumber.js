//자릿수 더하기
function solution(n)
{
    var answer = 0;

    let arr = []
    arr = n.toString().split('')
    for(let i = 0; i<arr.length; i++){
        arr[i] = Number(arr[i])
    }
    answer = arr.reduce((sum, current) => sum + current, 0);
    return answer;
}