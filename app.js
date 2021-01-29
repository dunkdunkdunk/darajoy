let word = []

function submit() {
    word.push(' ' + document.getElementById("text").value)
    document.getElementById("display").innerHTML = word
}