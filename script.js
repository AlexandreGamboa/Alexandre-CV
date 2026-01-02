const palavra = document.getElementById("typewriter");
const words = ["Desenvolvedor Full-Stack", "Analista de dados"];
let i = 0; // índice da palavra
let j = 0; // índice da letra
let currentWord = words[i];
let isDeleting = false;

function type() {
  if (!isDeleting && j <= currentWord.length) {
    palavra.textContent = currentWord.substring(0, j);
    j++;
    setTimeout(type, 200); // velocidade de digitação
  } else if (isDeleting && j >= 0) {
    palavra.textContent = currentWord.substring(0, j);
    j--;
    setTimeout(type, 100); // velocidade de deleção
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1500); // pausa antes de apagar
    } else {
      isDeleting = false;
      i = (i + 1) % words.length; // próxima palavra
      currentWord = words[i];
      setTimeout(type, 400); // pausa antes de escrever
    }
  }
}

type();