const myName = () => {
    return "dike chinyere";
}

const span = document.createElement("span");

span.style.color = '#faca15';
span.style.fontWeight = 'bold';
span.style.fontSize = '50px';
span.style.textShadow = '2px 2px 3px red';


span.innerText = myName();

document.body.append(span);



