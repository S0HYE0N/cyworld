// 인증번호 생성 - 함수 선언식
function auth() {
    // 랜덤함수로 6자리 숫자 생성하고 6자리 미만일 경우 앞에서부터 0 추가
    const token = String ( Math.floor ( Math.random() * 1000000 ) ).padStart(6, '0')

    // token의 값으로 텍스트 변경
    document.getElementById('target').innerText = token;
}


// 인증번호 생성 및 색상 변경 - 화살표 함수
const auth2 = () => {

    const token = String( Math.floor( Math.random() * 1000000 ) ).padStart(6, '0')
 
    document.getElementById('target').innerText = token;

    // 텍스트 색상 변경 ( token 값을 hex코드로 사용 )
    document.getElementById('target').style.color = `#${token}`
}