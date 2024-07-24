const promt = require('prompt-sync')({sigint: true});
let targetnumber = Math.floor(Math.random() * 100) + 1;
let guess = null;

while (guess !== targetnumber)  {
    guess = parseint(promt("guess a number between 1 and 100:"));



// 만약에 타겟넘버보다 입력값이 크면 '그것보다 작아요!'라고 출력해주자
// 만약에 타겟넘보보다 입력값이 작으면 '그것보다는 커요!'라고 출력해주자(if else) {
// 만약에 타겟넘버와 입력값이 같으면 '정답이에요!'라고 출력하고 while을 종료 (else)


if (guess >targetnumber ) {
    console.log ('그것보다 작아요');
}else if(guess<targetnumber){
    console.log ('그것보다 커요!')
}else {
console.log (" 정답! ")
break;
}
}