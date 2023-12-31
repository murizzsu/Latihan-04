function createFilterBox() {
    createParentElement()

    let formGroup1 = document.getElementById("form-group1")
    let formGroup2 = document.getElementById("form-group2")
    let formGroup3 = document.getElementById("form-group3")
    let formGroup4 = document.getElementById("form-group4")
    let formGroup5 = document.getElementById("form-group5")

    let drivers = ["Pilih Tipe Driver", "Dengan Sopir", "Tanpa Sopir"]
    let options = []
    drivers.forEach((a, b) => {
        let option = document.createElement("option")
        if (b > 0) {
            option.value = a
        }
        option.text = a
        options.push(option)
    })

    // definisikan isi form-group 1 disini ...
    let labelDriver = document.createElement('label')
    labelDriver.innerText = "Tipe Driver"
    let selectorDriver = document.createElement('select')
    selectorDriver.id = "select-driver"
    selectorDriver.classList.add('form-control')
    formGroup1.append(labelDriver,selectorDriver)
    selectorDriver.append(...options)
    selectorDriver.onfocus = showBackdrop
    selectorDriver.onblur = hideBackdrop
    selectorDriver.onchange = hideBackdrop

    // definisikan isi form-group 2 disini ...
    let labelTanggal = document.createElement('label')
    labelTanggal.innerText = 'Tanggal'
    let inputTanggal = document.createElement('input')
    inputTanggal.id = "input-tanggal"
    inputTanggal.type = "date"
    inputTanggal.classList.add('form-control')
    inputTanggal.onfocus = showBackdrop
    inputTanggal.onblur = hideBackdrop
    formGroup2.append(labelTanggal, inputTanggal)


    // definisikan isi form-group 3 disini ...

    let labelJemput = document.createElement('label')
    labelJemput.innerText = "waktu Jemput/Ambil"
    let inputJemput = document.createElement('input')
    inputJemput.id = "input-jemput"
    inputJemput.type = "time"
    inputJemput.classList.add('form-control')
    inputJemput.onfocus = showBackdrop
    inputJemput.onblur = hideBackdrop

    formGroup3.append(labelJemput, inputJemput)

    // definisikan isi form-group 4 disini ...
    let labelPenumpang = document.createElement('label')
    labelPenumpang.innerText = "jumlah Penumpang"

    let inputGroupPenumpang = document.createElement("div")
    inputGroupPenumpang.classList.add("input-group")

    let inputPenumpang = document.createElement('input')
    inputPenumpang.id = "input-penumpang"
    inputPenumpang.type = "number"
    inputPenumpang.classList.add('form-control')
    inputPenumpang.placeholder = "Jumlah Penumpang"
    inputPenumpang.onfocus = showBackdrop
    inputPenumpang.onblur = hideBackdrop

    let iconUserContainer = document.createElement('div')
    iconUserContainer.classList.add('input-group-append')

    inputGroupPenumpang.append(inputPenumpang, iconUserContainer)

    let iconUserWrapper = document.createElement('div')
    iconUserWrapper.classList.add('input-group-text','bg-white')

    let iconUser = document.createElement('img')
    iconUser.src = "assets/img/user-icon.svg"
    iconUserWrapper.append(iconUser)

    iconUserContainer.append(iconUserWrapper)

    formGroup4.append(labelPenumpang, inputGroupPenumpang)

    // definisikan isi form-group 5 disini ...

    let labelButton = document.createElement('label')
    labelButton.innerHTML = "&nbsp;"

    let buttonCari = document.createElement('button')
    buttonCari.id = 'button-cari'
    buttonCari.type = 'button'
    buttonCari.classList.add('btn', 'btn-success', 'col-sm-12')
    buttonCari.innerText = "Cari Mobil"
    buttonCari.onclick = onButtonClicked

    formGroup5.append(labelButton, buttonCari)
}

function onSearch(props) {
    console.log(props)
}

createFilterBox()
