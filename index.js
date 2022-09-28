
let resultField = $("#result")

function insertNumber(number) {
    let existingNumber = resultField.val()
    resultField.val(existingNumber + number)
}

function clearResult() {
    resultField.val('')
}

function calculate() {
    let result = eval(resultField.val())
    resultField.val(result)
}

function removeNumber() {
    let presentNumber = resultField.val()
    if(presentNumber != '') {
        resultField.val( presentNumber.slice(0, -1) )
    }
    
}