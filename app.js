let word = []

function submit() {
    let input = document.getElementById("text").value
    if (input == '' || input == ' ' || input == '   ' || input[0] == '<') {
        alert("Error")
    }
    else {
        word.push(' ' + input)
        document.getElementById("display").innerHTML = word
        document.getElementById("text").value = null
    }
}
/*
function reveal() {
    let xhr = new XMLHttpRequest()
    let url = 'https://jsonplaceholder.typicode.com/posts'
    xhr.open('GET',url)
    xhr.send()
    document.write(xhr.response)
}*/

document.querySelector('#text').addEventListener('keydown', (e) => {
    if (e.key==='Enter') {
        submit()
    }
})