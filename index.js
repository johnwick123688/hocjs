const nameWork = document.querySelector('#inputwork')
const select = document.querySelector('select')

document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault();
    let nameW = nameWork.value;
    let idDate = document.querySelector(`#${select.value}`)

    let cong_viec = document.createElement('div')
    cong_viec.classList.add('work')
    cong_viec.innerHTML = nameW

    let xoa = document.createElement('button')
    xoa.classList.add('xoa')
    xoa.innerHTML = 'xoa'
    cong_viec.appendChild(xoa)
    xoa.addEventListener('click', function(e){
        e.preventDefault();
        cong_viec.remove()
    })

    let sua = document.createElement('button')
    sua.classList.add('sua')
    sua.innerHTML = 'sua'
    cong_viec.appendChild(sua)
    sua.addEventListener('click', function(e){
        e.preventDefault();
        
    })

    idDate.appendChild(cong_viec)

})


