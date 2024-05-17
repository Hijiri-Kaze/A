const story = [
    {
        text: "Você acorda em um quarto desconhecido. Há uma porta à sua frente.",
        choices: [
            { text: "Abrir a porta", nextScene: 1 },
            { text: "Olhar pela janela", nextScene: 2 }
        ],
        background: "images/room.jpg",
        character: ""
    },
    {
        text: "Você abre a porta e encontra um corredor escuro.",
        choices: [
            { text: "Andar pelo corredor", nextScene: 3 },
            { text: "Voltar para o quarto", nextScene: 0 }
        ],
        background: "images/corridor.jpg",
        character: ""
    },
    {
        text: "Você olha pela janela e vê um jardim bonito.",
        choices: [
            { text: "Sair pela janela", nextScene: 4 },
            { text: "Voltar para a cama", nextScene: 0 }
        ],
        background: "images/garden.jpg",
        character: ""
    },
    {
        text: "Você anda pelo corredor e encontra um estranho.",
        choices: [
            { text: "Falar com o estranho", nextScene: 5 },
            { text: "Ignorar e continuar", nextScene: 6 }
        ],
        background: "images/corridor.jpg",
        character: "images/stranger.png"
    },
    // Adicione mais cenas conforme necessário
];

let currentScene = 0;

function showScene(sceneIndex) {
    const scene = story[sceneIndex];
    document.getElementById("dialogue-text").innerText = scene.text;
    document.getElementById("background").style.backgroundImage = `url(${scene.background})`;
    document.getElementById("character").style.backgroundImage = `url(${scene.character})`;
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";
    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.classList.add("choice-button");
        button.addEventListener("click", () => showScene(choice.nextScene));
        choicesContainer.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showScene(currentScene);
});
