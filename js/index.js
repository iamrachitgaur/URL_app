
const params = new URLSearchParams(window.location.search)
const URL = params.get('URL')

const para = document.createElement('p');
para.innerHTML = URL;

const all_links = document.getElementById('all_links')

all_links.append(para)

console.log(URL)
