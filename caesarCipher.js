//시저암호
function solution(s, n) {
    var answer = '';

    //A:65 Z:90, a:97, z:112
    let arr = []
    arr = s.split('');
    //console.log(arr)
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i]!=' '){
            if(arr[i].charCodeAt(0)>=65&&arr[i].charCodeAt(0)<=90){
                arr[i] = (arr[i].charCodeAt(0)+n)%65%26+65
                //console.log(arr[i])
            }
            else if(arr[i].charCodeAt(0)>=97&&arr[i].charCodeAt(0)<=122){
                arr[i] = (arr[i].charCodeAt(0)+n)%97%26+97
                //console.log(arr[i])
            }
            arr[i] = String.fromCharCode(arr[i]);
        }
        //console.log(arr[i])
    }
    answer = arr.join('')
    //console.log(answer)
    return answer;
}