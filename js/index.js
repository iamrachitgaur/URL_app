
const params = new URLSearchParams(window.location.search)
const URL = params.get('URL')
const gd = params.get('gd')

const para = document.createElement('p');
para.innerHTML = URL+"&gd="+gd;

const all_links = document.getElementById('all_links')

all_links.append(para)
