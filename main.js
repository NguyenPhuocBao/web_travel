/*Show form đăng ký */

const btn_dangky = document.querySelector('.button')
const modal_dangky = document.querySelector('.modal-dangki')
const close_dangky = document.querySelector('form i')

console.log(close_dangky)


function showModalDangKy() {
    modal_dangky.classList.add('open')
}

function closeModalDangKy() {
    modal_dangky.classList.remove('open')
}
btn_dangky.addEventListener('click', showModalDangKy)
close_dangky.addEventListener('click', closeModalDangKy)

/*Show Modal Hà Giang */

const items_hagiang = document.querySelector('.location-content-items')
const modal_hagiang = document.querySelector('.modal-hagiang')
const close_hagiang = document.querySelector('.close')
console.log(close_hagiang)


function showModalHaGiang() {
    modal_hagiang.classList.add('open')
}

function closeModalHaGiang() {
    modal_hagiang.classList.remove('open')
}

items_hagiang.addEventListener('click', showModalHaGiang)
close_hagiang.addEventListener('click', closeModalHaGiang)

/*Show Modal Hạ Long */
const items_halong = document.querySelector('.location-content-items-js')
const modal_halong = document.querySelector('.modal-halong')
const close_halong = document.querySelector('.close-halong')
console.log(close_halong)

function showModalHaLong() {
    modal_halong.classList.add('open')
}

function closeModalHaLong() {
    modal_halong.classList.remove('open')
}
items_halong.addEventListener('click', showModalHaLong)
close_halong.addEventListener('click', closeModalHaLong)

/* Show Modal Đà nẵng */
const items_danang = document.querySelector('.location-content-items-js-danang')
const modal_danang = document.querySelector('.modal-danang')
const close_danang = document.querySelector('.close-danang')
console.log(close_danang)

function showModalDaNang() {
    modal_danang.classList.add('open')
}

function closeModalDaNang() {
    modal_danang.classList.remove('open')
}

items_danang.addEventListener('click', showModalDaNang)
close_danang.addEventListener('click', closeModalDaNang)

/*Show Modal Thừa Thiên Huế */
const items_hue = document.querySelector('.location-content-items-js-hue')
const modal_hue = document.querySelector('.modal-hue')
const close_hue = document.querySelector('.close-hue')
console.log(close_hue)

function showModalHue() {
    modal_hue.classList.add('open')
}

function closeModalHue() {
    modal_hue.classList.remove('open')
}

items_hue.addEventListener('click', showModalHue)
close_hue.addEventListener('click', closeModalHue)