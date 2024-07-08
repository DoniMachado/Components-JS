const checked = 'checked';
const semi_checked = 'semi-checked';
const unchecked = 'unchecked';

const check_box_all = document.querySelector('.check-box-all');
const check_box_list = document.querySelectorAll('.check-box');
for(const ckb of check_box_list){
    ckb.addEventListener('click',ckbClick);
}

check_box_all.addEventListener('click',ckbAllClick);



function ckbAllClick(event){
    const is_unchecked = this.classList.contains(unchecked);
    
    for(const ckb of check_box_list){
        if(ckb.classList.contains(unchecked) === is_unchecked){
            ckb.click();
        }
    }     
}


function ckbClick(event){
    const icon = this.children[0];
    if(this.classList.contains(unchecked)){ //unchecked
        resetElementClassList(icon);
        resetElementClassList(this);
        this.classList.add(checked);
        changeCkbAllIconAndStatus();
    }else{ //checked
        icon.classList.add('hide');  
        resetElementClassList(this);
        this.classList.add(unchecked);
        changeCkbAllIconAndStatus();        
    }
}


function changeCkbAllIconAndStatus(){
   const checked_icon =   check_box_all.children[0];
   const semi_checked_icon =   check_box_all.children[1];

   let all_checked = true;
   let all_unchecked = true;

   for( const ckb of check_box_list){
    if(ckb.classList.contains(checked)){
        all_unchecked = false;
    }else{
        all_checked = false;
    }
   }

   resetElementClassList(check_box_all);
   resetElementClassList(checked_icon);
   resetElementClassList(semi_checked_icon);
   if(all_checked){
    check_box_all.classList.add(checked);
    semi_checked_icon.classList.add('hide');
   }else if(all_unchecked){
    check_box_all.classList.add(unchecked);
    checked_icon.classList.add('hide');
    semi_checked_icon.classList.add('hide');
   }else{
    check_box_all.classList.add(semi_checked);
    checked_icon.classList.add('hide');
   }

}

function resetElementClassList(element){
    element.classList.remove(checked);
    element.classList.remove(semi_checked);
    element.classList.remove(unchecked);
    element.classList.remove('hide');
}