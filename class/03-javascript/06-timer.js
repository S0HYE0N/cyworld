// 인증번호 전송 및 타이머
let isStarted = false;

const auth = () => {

    if (isStarted === false) {
        // 타이머가 작동 중이 아닐 때
        isStarted = true
        document.getElementById('finish').disabled = false

        // 6자리 랜덤 수 생성 후 authNum에 대입
        let token = String( Math.floor( Math.random() * 1000000 ) ).padStart(6, "0")
        document.getElementById('authNum').innerText = token

        // 3분 타이머
        let time = 5
        let timer
        
        timer = setInterval(function() {
            if(time > 0) {
                time = time - 1

                let m = Math.floor( time / 60 )
                let s = String( time % 60 ).padStart(2, "0")

                document.getElementById('timer').innerText = `${m}:${s}`
            } else {
                document.getElementById('finish').disabled = true
                isStarted = false

                // setInterval 함수를 삭제
                clearInterval(timer)
            }
        }, 1000)
    } else {
        // 타이머 작동 중일 때
    }
}