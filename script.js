console.log("Milestone Build 240603");

(function(){
    window.addEventListener('load', init);

function init() {
    document.getElementById("title").addEventListener("click", weirdStuff);
    document.getElementById("back").addEventListener("click", back); 
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("close").addEventListener("click", closing);
    document.getElementById("cut").addEventListener("click", cutIt);
    document.getElementById("full").addEventListener("click", fullIt);

    





    document.getElementById("show").style.backgroundImage = "url('gallery/img1.png')";
    document.getElementById("show").style.backgroundRepeat = "no-repeat";
    document.getElementById("show").style.backgroundSize = "contain";
    document.getElementById("show").style.backgroundPosition = "center";

    document.getElementById("show").style.width = "900px";
    document.getElementById("show").style.height = "900px";
    document.getElementById("show").style.border = "3px white solid";
    document.getElementById("show").style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset";
    document.getElementById("show").style.marginLeft = "auto";
    document.getElementById("show").style.marginRight = "auto";
    document.getElementById("show").style.transition = "all";
    document.getElementById("show").style.transition = "linear 0.5s";

    


    



    }

function weirdStuff(){
        
}

let count = 1 
function back(){
    if (count < 1){
       console.log("limit");
       document.getElementById("show").style.backgroundColor = "aliceblue";  

    }
    else{
        count = count - 1;
        console.log(count);
        document.getElementById("show").style.backgroundImage = "url('gallery/img" + count + ".png')";
        document.getElementById("show").style.backgroundRepeat = "no-repeat";
        document.getElementById("show").style.backgroundSize = "contain";
        document.getElementById("show").style.transition = "all";
        document.getElementById("show").style.transition = "linear 0.5s";
    }
        
    
    }

function next(){
    if (count > 1){
        document.getElementById("show").style.backgroundColor = "none";  

    }
        count = count + 1;

        console.log(count);
        document.getElementById("show").style.backgroundImage = "url('gallery/img" + count + ".png')" ;
        document.getElementById("show").style.backgroundRepeat = "no-repeat";   
        document.getElementById("show").style.backgroundSize = "contain";
        document.getElementById("show").style.transition = "all";
        document.getElementById("show").style.transition = "linear 0.5s";

}

function closing(){
    var window = document.getElementById("window");
    document.getElementById("title").innerHTML = "<h1>Эээ куда?</h1> (Перезапусти страницу)";
    window.parentNode.removeChild(window);
}

function cutIt(){
    document.getElementById("show").style.backgroundSize = "cover";
    document.getElementById("show").style.transition = "linear 0.5s";
    document.getElementById("show").style.transition = "all";
    
    


}
function fullIt(){
    document.getElementById("show").style.backgroundSize = "contain";
    document.getElementById("show").style.transition = "linear 0.5s";
    document.getElementById("show").style.transition = "all";
}

})();