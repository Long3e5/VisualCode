let can_nang = prompt('Nhập cân nặng')
let chieu_cao = prompt('Nhập chiều cao')
if (isNaN(can_nang) && isNaN(chieu_cao)) {
    console.log('mẹ mày béo')
} else {
    let bmi = can_nang / (chieu_cao * 2)

    if (bmi < 16) {
        console.log('gầy độ 3')
    } else if (16 <= bmi && bmi < 17) {
        console.log('gầy độ 2')
    } else if (17 <= bmi && bmi < 18.5) {
        console.log('gầy độ 1')
    } else if (18.5 <= bmi && bmi < 25) {
        console.log('bình thường')
    } else if (25 <= bmi && bmi < 30) {
        console.log('thừa cân')
    } else if (30 <= bmi && bmi < 35) {
        console.log('béo phì độ 1')
    } else if (35 <= bmi && bmi < 140) {
        console.log('béo phì độ 2')
    } else {
        console.log('béo phì độ 3')
    }
}