function solution(n) {
    let answer = 0;
    let arr = []
    arr = String(n).split("")
    arr.sort(compare);
    answer = +(arr.join(""));
    return answer;
  }

  //내림차순
 function compare(a, b) {
  if (a < b) return 1; 
  if (a == b) return 0; 
  if (a > b) return -1;
}