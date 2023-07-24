const search = ()=>{
    const searcInput = document.getElementById("input-search").value.toUpperCase();
    const productContainer = document.getElementById("product-container");
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h3");

    for(i=0; i<pname.length; i++){
        let match = product[i].getElementsByTagName("h3")[0];

        if(match){
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searcInput) > -1){
               product[i].style.display = 'flex';
            }
            else{
                product[i].style.display = "none";
            }
        }

        
    }
    
}