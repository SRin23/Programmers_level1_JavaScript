//문자열 내림차순으로 정렬하기
function solution(s) {
    var answer = '';
    answer = s.split('').sort(compare).join('')
    return answer;
}

function compare(a, b) {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
}