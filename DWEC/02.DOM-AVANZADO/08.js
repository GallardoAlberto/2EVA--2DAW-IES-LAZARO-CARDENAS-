let enlaces = document.getElementsByTagName('a');

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].style.backgroundColor = 'yellow';    
    enlaces[i].removeAttribute('style');
    console.log(enlaces[i].getAttribute);
}

