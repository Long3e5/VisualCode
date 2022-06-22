let a = prompt("Nhập a")
let b = prompt("Nhập b")
let c = prompt("Nhập c")

let delta = b * b - 4 * a * c

if (isNaN(a) && isNaN(b) && isNaN(c)) {
    console.log('Không hợp lệ')
} else if (delta > 0) {
    n1 = (-b + Math.sqrt(delta)) / (2 * a)
    n2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log('Nghiệm của phương trình là', n1, 'và', n2)
} else if (delta == 0) {
    n1 = n2 = -b / (2 * a)
    console.log('Nghiệm của phương trình là', n1, 'và', n2)
} else {
    console.log('Phương trình vô nghiệm')
}