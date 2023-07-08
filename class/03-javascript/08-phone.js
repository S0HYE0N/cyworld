// 3자리 입력 시 다음 input으로 포커스 이동
const changeFocus1 = () => {

    let phone1 = document.getElementById('phone1').value

    if(phone1.length === 3) {
        document.getElementById('phone2').focus()
    }
}

// 4자리 입력 시 다음 input으로 포커스 이동
const changeFocus2 = () => {

    let phone2 = document.getElementById('phone2').value

    if(phone1.length === 4) {
        document.getElementById('phone3').focus()
    }
}