const inputFile = document.querySelector('#inputFile');
const divUpload = document.querySelector('#divUpload');
const title = document.querySelector('#title');
const remove = document.querySelector('#remove');

divUpload.addEventListener('click',function (event){
    if(!divUpload.classList.contains('divUpload--selected')){
        inputFile.click();  
    } 
});

inputFile.addEventListener('change',function(event){
    const files = this.files;
    // for(const file of files){
    //     console.log('File: ',file);
    // }

    if(files.length == 1){
        const name = files[0].name;
        title.textContent = name;
        divUpload.classList.add('divUpload--selected');
        remove.classList.remove('hide');
    }
});

remove.addEventListener('click',function (event){
    event.stopPropagation();
    title.textContent = 'Selecione um arquivo';
    remove.classList.add('hide');
    divUpload.classList.remove('divUpload--selected');
    inputFile.value = '';
});

