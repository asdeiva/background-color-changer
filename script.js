let colorId = document.querySelector('.colorcode')
let bg = document.querySelector('.bg')
let btn = document.getElementById('btn')

let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


btn.addEventListener('click',()=>{
    let colorHex='#'
    for (let i = 0; i < 6; i++) {
        colorHex += rndHex()
    }
    bg.style.backgroundColor = colorHex;
    colorId.innerHTML = colorHex
})

const rndHex = ()=>{
    let rndVal = Math.floor(Math.random()*16)
    return hex[rndVal]
}

// let hexColor = '#'
// for(let i=1;i<=6;i++){
//     hexColor += randHexValue()
// }
// wrap.style.backgroundColor = hexColor
// colortext.innerHTML = hexColor