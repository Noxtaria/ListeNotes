const BtnToggleEleve = document.querySelector("#btn-toggle-eleve");
const BtnToggleMatiere = document.querySelector("#btn-toggle-matiere");
const BtnToggleNote = document.querySelector("#btn-toggle-note");

BtnToggleEleve.addEventListener("click", () => {
    
    if(BtnToggleEleve.textContent == "OFF"){
        BtnToggleEleve.textContent = "ON"
    } else {
        BtnToggleEleve.textContent = "OFF"
    }
    
});
BtnToggleMatiere.addEventListener("click", () => {
    if(BtnToggleMatiere.textContent == "OFF"){
        BtnToggleMatiere.textContent = "ON"
    } else {
        BtnToggleMatiere.textContent = "OFF"
    }
    
});
BtnToggleNote.addEventListener("click", () => {
    if(BtnToggleNote.textContent == "OFF"){
        BtnToggleNote.textContent = "ON"
    } else {
        BtnToggleNote.textContent = "OFF"
    }
    
});
