function activeElements(c){
    let elements = document.getElementsByClassName("all");
    for(var i=0; i<elements.length;i++){
        elements[i].style.display = "none";
    }
    
    let required = document.getElementsByClassName(c);
    for(var i=0; i<required.length;i++){
        required[i].style.display = "block";
    }
}

let filters = document.getElementsByClassName("filters");
for(var i=0; i<filters.length; i++){
    console.log(filters[i]);
    filters[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active-filter");
        current[0].className = current[0].className.replace(" active-filter", "");
        this.className += " active-filter";
        activeElements(this.id);
    })
}