/* Event listener for the mobile button */
const mb_button = document.getElementsByClassName('mb-button')[0];
const expand_inside_list_button = document.getElementsByClassName('expand-list-mb-button')[0];
const overlay = document.getElementById('mb-overlay');
mb_button.addEventListener('click', () => {
    mb_button.classList.toggle('active');
    const mb_menu = document.getElementById('nav-links-login');
    const mb_bar = mb_button.getElementsByClassName('mb-button-bar');

    mb_menu.classList.toggle('active');
    for(let i = mb_bar.length - 1; i >= 0; i--){
        mb_bar[i].classList.toggle('active');
    }

    /* Overlay effect on the body */
    overlay.classList.toggle('active');
    document.body.classList.toggle('active-overlay');
});

expand_inside_list_button.addEventListener('click', () => {
  mb_button.dispatchEvent(new Event('click'));
})

overlay.addEventListener('click', () => {
  mb_button.dispatchEvent(new Event('click'));
})



/* Desktop expand list item and the expand v icon 
   When click, it will open the clicked one and disable every other 
   This looks like it's not efficient enough I think but...This
   is very readable.
*/
const expand_item = document.getElementsByClassName('expand-item');
for(let i = expand_item.length - 1; i >= 0; i--){
    expand_item[i].addEventListener('click', () => {
        //The v icon
        const expand_v_container = expand_item[i].parentNode.getElementsByClassName('expand-v');
        expand_v_container[0].classList.toggle('active');
        expand_v_container[1].classList.toggle('active');

        //The expand inside list
        const expand_inside_list = expand_item[i].parentNode.getElementsByClassName('expand-item-list')[0];
        expand_inside_list.classList.toggle('active');

        //Disable the rest if active
        for(let j = expand_item.length - 1; j >= 0; j--){
            if(j != i){
              const other_expand_v_container = expand_item[j].parentNode.getElementsByClassName('expand-v');
              const other_expand_inside_list = expand_item[j].parentNode.getElementsByClassName('expand-item-list')[0];
              if(other_expand_v_container[0].classList.contains('active')){
                other_expand_v_container[0].classList.toggle('active');
              }
              if(other_expand_v_container[1].classList.contains('active')){
                other_expand_v_container[1].classList.toggle('active');
              }
              if(other_expand_inside_list.classList.contains('active')){
                other_expand_inside_list.classList.toggle('active');
              }
            }
        }
    });
}