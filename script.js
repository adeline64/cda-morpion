function carre1() {
    let newParagraph = document.getElementById('carre-1'); // je créé une balise p
    newParagraph.innerText = "X";

}
function carre2() {
    let newParagraph = document.getElementById('carre-2'); // je créé une balise p
    newParagraph.innerText = "X";
}

function carre3() {
    let newParagraph = document.getElementById('carre-3'); // je créé une balise p
     newParagraph.innerText = "X";
}

function carre4() {
    let newParagraph = document.getElementById('carre-4'); // je créé une balise p
        newParagraph.innerText = "X";
}

 function carre5() {
        let newParagraph = document.getElementById('carre-5'); // je créé une balise p
            newParagraph.innerText = "X";
}

function carre6() {
    let newParagraph = document.getElementById('carre-6'); // je créé une balise p
     newParagraph.innerText = "X";

}
function carre7() {
    let newParagraph = document.getElementById('carre-7'); // je créé une balise p
    newParagraph.innerText = "X";

}
function carre8() {
    let newParagraph = document.getElementById('carre-8'); // je créé une balise p
    newParagraph.innerText = "X";

}
function carre9() {
    let newParagraph = document.getElementById('carre-9'); // je créé une balise p
    newParagraph.innerText = "X";

}
    var joueur1 = "x";
    var joueur2 = "o"

switch (joueur1) {
  case 'carre-1':
    console.log('btn1 ligne 21');
    document.getElementById('btn1').onclick();
  case 'carre-2':
    console.log('btn2 ligne 24');
    document.getElementById('btn2').onclick();
  case 'care-3':
    console.log('btn3 ligne 27');
    document.getElementById('btn3').onclick();
    case 'care-4':
        console.log('btn4 ligne 30');
        document.getElementById('btn4').onclick();
    case 'care-5':
        console.log('btn5 ligne 33');
        document.getElementById('btn5').onclick();
    case 'care-6':
        console.log('btn6 ligne 36');
        document.getElementById('btn6').onclick();
    case 'care-7':
        console.log('btn7 ligne 39');
        document.getElementById('btn7').onclick();
    case 'care-8':
        console.log('btn8 ligne 42');
        document.getElementById('btn8').onclick();
    case 'care-9':
        console.log('btn9 ligne 30');
        document.getElementById('btn9').onclick();
  default:
    console.log(`Merci de choisir une case.`);
    alert ("Merci de choisir une case.")
}

switch (joueur2) {
    case 'carre-1':
      console.log('btn1 ligne 21');
      document.getElementById('btn1').onclick();
    case 'carre-2':
      console.log('btn2 ligne 24');
      document.getElementById('btn2').onclick();
    case 'care-3':
      console.log('btn3 ligne 27');
      document.getElementById('btn3').onclick();
      case 'care-4':
          console.log('btn4 ligne 30');
          document.getElementById('btn4').onclick();
      case 'care-5':
          console.log('btn5 ligne 33');
          document.getElementById('btn5').onclick();
      case 'care-6':
          console.log('btn6 ligne 36');
          document.getElementById('btn6').onclick();
      case 'care-7':
          console.log('btn7 ligne 39');
          document.getElementById('btn7').onclick();
      case 'care-8':
          console.log('btn8 ligne 42');
          document.getElementById('btn8').onclick();
      case 'care-9':
          console.log('btn9 ligne 30');
          document.getElementById('btn9').onclick();
    default:
      console.log(`Merci de choisir une case.`);
      alert ("Merci de choisir une case.")
  }