const params = new URLSearchParams(window.location.search)
const URL = params.get('url')
const gd = params.get('gd')

const box = document.createElement('div');
const para = document.createElement('p');
const btn = document.createElement('btn');

box.id = "link_box";
btn.id = "mail_btn";
btn.innerHTML = "Send";

para.innerHTML = URL+"&gd="+gd;

const all_links = document.getElementById('all_links')

all_links.append(box)
box.append(para)
box.append(btn)
