const BtnToggleEleve = document.querySelector("#btn-toggle-eleve");
const BtnToggleMatiere = document.querySelector("#btn-toggle-matiere");
const BtnToggleNote = document.querySelector("#btn-toggle-note");
const BtnSubmitEleve = document.querySelector("#btn-submit-eleve");
const BtnSubmitMatiere = document.querySelector("#btn-submit-matiere");
const BtnSubmitNote = document.querySelector("#btn-submit-note");
const selectMatiereNote = document.querySelector('#form-select-matiere')
const selectMatiere = document.querySelector("#select-matiere");
const selectEleveNote = document.querySelector("#form-select-eleve");
const selectEleve = document.querySelector("#select-eleve");
const tableNotes = document.querySelector('#table-notes');

let eleves = [
]

let matieres = [
]

let notes = [
{
    nom : "Phil",
    prenom : "Spen",
    note : 7,
    intitule : "Math"
}
]

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

BtnSubmitEleve.addEventListener('click', () => {
    let nomEleve = document.getElementById("lastname").value;
    let prenomEleve = document.getElementById("firstname").value;

    eleves.push({
        nom : nomEleve,
        prenom : prenomEleve
    })

    eleveSelect();
    eleveSelectNote();
    console.table(eleves);
});

BtnSubmitMatiere.addEventListener('click', () => {
    let intituleMatiere = document.getElementById("intitule").value;

    matieres.push({
        intitule : intituleMatiere
    })

    MatiereSelect();
    MatiereSelectNote();
    console.table(matieres);
});


BtnSubmitNote.addEventListener('click', () => {
    let noteEleve = Number(document.getElementById("note").value);
    let nomEleve = document.getElementById('lastname').value;
    let prenomEleve = document.getElementById("firstname").value;
    let intituleMatiere = document.getElementById("intitule").value;


    notes.push({
        nom : nomEleve,
        prenom : prenomEleve,
        note : noteEleve,
        intitule : intituleMatiere
    })

    // tableauNoteEleve();
    console.table(notes);
})

const eleveSelect = () => {
    selectEleve.innerHTML = `<option value="0">Sélectionnez un élève</option>`;
    eleves.forEach(eleve => {
        selectEleve.innerHTML += `<option value="${eleves.indexOf(eleve)+1}">${eleve.nom} ${eleve.prenom}</option>`
    })
}

const eleveSelectNote = () => {
    selectEleveNote.innerHTML = `<option value="0">Sélectionnez un élève</option>`;
    eleves.forEach(eleve => {
        selectEleveNote.innerHTML += `<option value="${eleves.indexOf(eleve)+1}">${eleve.nom} ${eleve.prenom}</option>`
    })
}

const MatiereSelect = () => {
     selectMatiere.innerHTML =`<option value="0">Liste des matières</option>`;
     matieres.forEach(matiere => {
        selectMatiere.innerHTML += `<option value ="${matieres.indexOf(matiere)+1}">${matiere.intitule}</option>`;
     });
};

const MatiereSelectNote = () => {
     selectMatiereNote.innerHTML =`<option value="0">Selectionnez une matière</option>`;
     matieres.forEach(matiere => {
        selectMatiereNote.innerHTML += `<option value ="${matieres.indexOf(matiere)+1}">${matiere.intitule}</option>`;
     });
}

// const tableauNoteEleve = () => {
//     notes.forEach(note => {
//         tableNotes.innerHTML += `<tr><td>${note.nom}</td> <td>${note.prenom}</td> <td>${note.intitule}</td> <td>${note.note}</td><tr>`;
//     })
// }

tableNotes.addEventListener('change', () => {
    
    let nom = notes.nom.value;
    let prenom = notes.prenom.value;
    if(nom && prenom){      
        notes.forEach(note => {
            tableNotes.innerHTML += `<tr><td>${note.nom}</td> <td>${note.prenom}</td> <td>${note.intitule}</td> <td>${note.note}</td><tr>`;
        })
    } else {
        tableNotes.innerHTML += `<p>Bonjour vous êtes dans l'erreur</p>`
    }
})



onLoad = () => {
    eleveSelect();
    eleveSelectNote();
    MatiereSelect();
    MatiereSelectNote();
}

onLoad();