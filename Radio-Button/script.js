const containerList = document.getElementById("radio-button-container-list");
const itens = document.getElementsByClassName("radio-button-item");
for (const item of itens) {
    item.addEventListener("click",rdBtn);
}







function rdBtn(event){
    const elementInnerCircle = this.firstElementChild.firstElementChild;   
    elementInnerCircle.classList.add('active');  

    for(const item of containerList.children){
        const element =  item.firstElementChild.firstElementChild;
        if(element !== elementInnerCircle){
            element.classList.remove('active');  
        }
    }

}