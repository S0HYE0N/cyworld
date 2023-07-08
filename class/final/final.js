// 3자리 입력 시 입력칸 포커스 이동
const changePhoneFocus1 = () => {
    let phone1 = document.getElementById('phone1').value

    if( phone1.length === 3 ) {
        document.getElementById('phone2').focus()
    }
}

// 4자리 입력 시 입력칸 포커스 이동
const changePhoneFocus2 = () => {
    let phone1 = document.getElementById('phone2').value

    if( phone1.length === 4 ) {
        document.getElementById('phone3').focus()
    }
}

// 인증번호전송 버튼 활성화
const changePhoneFocus3 = () => {
    let phone1 = document.getElementById('phone1').value
    let phone2 = document.getElementById('phone2').value
    let phone3 = document.getElementById('phone3').value
    
    if( phone1.length === 3 && phone2.length === 4 && phone3.length === 4 ) {
            document.getElementById('token_button').disabled = false
            document.getElementById('token_button').classList.add('enabled_button')

    } else {
        document.getElementById('token_button').disabled = true
        if (document.getElementById('token_button').classList.contains('enabled_button')) {
            document.getElementById('token_button').classList.remove('enabled_button')
        }
    }
}

let isStarted = false
let time = 5
let timer

const getToken = () => {
    if( isStarted === false ) {

        isStarted = true

        // 인증번호 생성
        let tokenNumber = String( Math.floor( Math.random() * 1000000 ) ).padStart(6, '0')
        document.getElementById('token').innerText = tokenNumber

        // 인증번호 전송 버튼 비활성화
        document.getElementById('token_button').disabled = true
        if (document.getElementById('token_button').classList.contains('enabled_button')) {
            document.getElementById('token_button').classList.remove('enabled_button')
        }

        // 인증확인 버튼 활성화
        document.getElementById('token_timer_confirm_button').disabled = false
        document.getElementById('token_timer_confirm_button').classList.add('token_timer_button_enabled')

        // 3분 타이머
        timer = setInterval(function() {
            if( time > 0) {
                time = time - 1
                let minute = Math.floor( time / 60 )
                let sec = String( time % 60).padStart(2, '0')

                document.getElementById('token_timer').innerText = `${minute}:${sec}`
            } else {
                // 3분이 지났을 경우 토큰정보, 타이머, 버튼 초기화
                clearInterval(timer)
                document.getElementById('token').innerText = '000000'
                document.getElementById('token_timer').innerText = '3:00'
                document.getElementById('token_timer_confirm_button').disabled = true
                document.getElementById('token_timer_confirm_button').classList.remove('token_timer_button_enabled')
                
                // 인증번호 전송 버튼 활성화
                document.getElementById('token_button').disabled = false
                document.getElementById('token_button').classList.add('enabled_button')
            }
        }, 1000)
    }
}


const getTokenTimerConfirm = () => {
    // 타이머 제거
    clearInterval(timer)

    // 인증완료 알림창 띄우기
    alert('인증이 완료되었습니다.')

    // 인증확인 버튼 텍스트 변경 및 비활성화 
    document.getElementById('token_timer_confirm_button').innerText = '인증완료'
    document.getElementById('token_timer_confirm_button').disabled = true
    document.getElementById('token_timer_confirm_button').classList.remove('token_timer_button_enabled')

    // 가입하기 버튼 활성화
    document.getElementById('signup_button').disabled = false
    document.getElementById('signup_button').classList.add('enabled_button')
}

const signup = () => {
    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const pw1 = document.getElementById('pw1').value
    const pw2 = document.getElementById('pw2').value
    const location = document.getElementById('location').value
    const gender_woman = document.getElementById('gender_woman').checked
    const gender_man = document.getElementById('gender_man').checked

    console.log(`${email}, ${name}, ${pw1}, ${pw2}, ${location}, ${gender_woman}, ${gender_man}, `)

    let isVaild = true
    if( email.includes('@') === false ) {
        isVaild = false
        document.getElementById('error_email').innerText = "이메일이 올바르지 않습니다."
    } else {
        document.getElementById('error_email').innerText = "" 
    }

    if( name === "") {
        isVaild = false
        document.getElementById('error_name').innerText = "이름이 올바르지 않습니다."
    } else {
        document.getElementById('error_name').innerText = "" 
    }

    if( pw1 === "") {
        isVaild = false
        document.getElementById('error_pw1').innerText = "비밀번호를 입력해 주세요."
    } else {
        document.getElementById('error_pw1').innerText = "" 
    }

    if( pw2 === "") {
        isVaild = false
        document.getElementById('error_pw2').innerText = "비밀번호를 입력해 주세요."
    } else {
        document.getElementById('error_pw2').innerText = "" 
    }

    if( pw1 !== "" && pw2 !== "") {
        if( pw1 !== pw2 ) {
            isVaild = false
            document.getElementById('error_pw2').innerText = "비밀번호가 일치하지 않습니다."
        } else {
            document.getElementById('error_pw2').innerText = "" 
        }
    }

    if( location === "0" ) {
        isVaild = false
        document.getElementById('error_location').innerText = "지역을 선택해 주세요."
    } else {
        document.getElementById('error_location').innerText = "" 
    }

    if( gender_woman === false && gender_man === false ) {
        isVaild = false
        document.getElementById('error_gender').innerText = "성별을 선택해 주세요."
    } else {
        document.getElementById('error_gender').innerText = "" 
    }

    if( isVaild === true ) {
        alert("가입을 축하합니다.")
    }
}