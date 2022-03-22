let dictionary = []
let sentence = document.getElementById('sentence')
let input = document.getElementById('addWord')
let search = document.getElementById('searchWord')

function addTheWord () {
    dictionary.push(input.value)
    input.value = ''
    sentence.innerHTML = '<div class="alert alert-info" role="alert">\n' +
        '  The word was added to the dictionary!\n' +
        '</div>'
}

function searchTheWord () {
    if (dictionary.indexOf(search.value) >= 0) {
        sentence.innerHTML = '<div class="alert alert-success" role="alert">\n' +
            '  The word was found in the dictionary!\n' +
            '</div>'
        search.value = ''
    } else {
        sentence.innerHTML = '<div class="alert alert-warning" role="alert">\n' +
            '  The word was not found in the dictionary, but you can add it using the box above!\n' +
            '</div>'
        search.value = ''
    }
}