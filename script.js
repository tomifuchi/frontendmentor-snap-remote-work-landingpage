const expand_item = document.getElementsByClassName('expand-item');

for(let i = expand_item.length - 1; i >= 0; i--){
    expand_item[i].addEventListener('click', () => {
        const expand_container = expand_item[i].nextSibling.getElementsByClassName('expand-v');
        for(let j = expand_container.length - 1; j >= 0; j--){
            expand_container[j].classList.toggle('active');
        }
    });
}