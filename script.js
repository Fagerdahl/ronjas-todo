
function createNew(){
    const inputValue=document.getElementById("myInput").value;
    if(inputValue==""){
        alert("You must add something more");
    }else{
        const li = document.createNew("li");
        li.textString=inputValue;

        document.getElementById("myUl").appendChild("li"); //Gör ett "barn" till grenen
        document.getElementById("myInput").value=""; //Tömmer input delen
    }
}


/*Min listas ID är UL. Det är alltså en osorterad lista. Jag kan anropa metoden querySelector
för att hämta olika element, helt fritt i form av klasser, id:n eller specifika taggar.
såhär: let element=document.querySelector("ul"); */

let elementList=document.querySelector("ul");
let i;
 for (i=0; i < myNodeList.length; i++);{ //Jämför med antalet element i listan

}

