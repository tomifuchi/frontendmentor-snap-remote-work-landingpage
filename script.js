/*
const mb_button = document.getElementsByClassName('mb-button')[0];
mb_button.addEventListener('click', () => {
    const mb_bar = mb_button.getElementsByClassName('mb-button-bar');
    const mb_nav_links_login = document.getElementById('nav-links-login');

    mb_nav_links_login.classList.toggle('active');
    mb_button.classList.toggle('active'); 
    console.log(mb_bar);
    for(let i = mb_bar.length - 1; i >= 0; i--){
        mb_bar[i].classList.toggle('active');
    }

    //Overlay divs that reduces the opacity 
    const overlay = document.getElementById('mb-overlay');
    overlay.classList.toggle('active');
});
*/

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