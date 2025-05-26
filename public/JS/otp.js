function moveToNext(input, index) {
    const inputs = document.querySelectorAll('.otp-inputs input');
    if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
    }
}

function handleBackspace(e, index) {
    const inputs = document.querySelectorAll('.otp-inputs input');
    setTimeout(() => {
        if (e.key === "Backspace" && inputs[index].value === '' && index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = '';
        }
    }, 1);
}

// function verifyOTP() {
//     const inputs = document.querySelectorAll('.otp-inputs input');
//     const otp = Array.from(inputs).map(i => i.value).join('');
//     if (otp.length === 4) {
//         alert("Verifying OTP: " + otp);
//     } else {
//         alert("Please enter all 4 digits of the OTP.");
//     }
// }

function resendOTP() {
    alert("OTP has been resent to your Email ID!");
}
