
const span=document.createElement('span');
span.classList.add('highlight');
document.body.appendChild(span);

highlightIt=(event)=>{

    let target=event.target.getBoundingClientRect();
    let coords={
        width:target.width,
        height:target.height,
        left:target.left,
        top:target.top + window.scrollY
    };
    span.style.transform=`translate(${coords.left}px,${coords.top}px)`;
    // span.style.transform=`translateY(${coords.top}px)`;
    
   span.style.width=`${coords.width}px`;
   span.style.height=`${coords.height}px`;


  

}

document.querySelectorAll('a').forEach(target=>target.addEventListener('mouseenter',highlightIt));

