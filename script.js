const story = [
    {
        text: "Você chega na mansão do colecionador de arte. A cena do crime está à sua frente.",
        choices: [
            { text: "Investigar a cena do crime", nextScene: 1 },
            { text: "Interrogar a esposa", nextScene: 2 }
        ],
        background: "images/mansion.jpg",
        character: ""
    },
    {
        text: "Você encontra uma carta de ameaça no chão.",
        choices: [
            { text: "Ler a carta", nextScene: 3 },
            { text: "Ignorar a carta", nextScene: 4 }
        ],
        background: "images/crime_scene.jpg",
        character: ""
    },
    {
        text: "A esposa do colecionador parece nervosa.",
        choices: [
            { text: "Perguntar sobre o relacionamento deles", nextScene: 5 },
            { text: "Perguntar se ela viu algo suspeito", nextScene: 6 }
        ],
        background: "images/wife.jpg",
        character: "images/wife_character.png"
    },
    {
        text: "A carta de ameaça diz: 'Seu tempo acabou'.",
        choices: [
            { text: "Interrogar o rival de negócios", nextScene: 7 },
            { text: "Explorar a mansão", nextScene: 8 }
        ],
        background: "images/threat_letter.jpg",
        character: ""
    },
    {
        text: "Você decide ignorar a carta e continuar.",
        choices: [
            { text: "Interrogar o assistente pessoal", nextScene: 9 },
            { text: "Examinar os registros financeiros", nextScene: 10 }
        ],
        background: "images/room.jpg",
        character: ""
    },
    {
        text: "A esposa revela que o relacionamento deles estava em crise.",
        choices: [
            { text: "Investigar a pintura desaparecida", nextScene: 11 },
            { text: "Interrogar o artista desonrado", nextScene: 12 }
        ],
        background: "images/wife.jpg",
        character: "images/wife_character.png"
    },
    {
        text: "Ela menciona que viu alguém entrando pela janela.",
        choices: [
            { text: "Investigar a janela", nextScene: 13 },
            { text: "Interrogar o rival de negócios", nextScene: 7 }
        ],
        background: "images/window.jpg",
        character: ""
    },
    {
        text: "O rival de negócios parece calmo e confiante.",
        choices: [
            { text: "Perguntar sobre a rivalidade deles", nextScene: 14 },
            { text: "Perguntar onde ele estava na noite do crime", nextScene: 15 }
        ],
        background: "images/rival.jpg",
        character: "images/rival_character.png"
    },
    {
        text: "Explorando a mansão, você encontra uma pintura faltando na parede.",
        choices: [
            { text: "Perguntar sobre a pintura desaparecida", nextScene: 11 },
            { text: "Interrogar o assistente pessoal", nextScene: 9 }
        ],
        background: "images/mansion_hall.jpg",
        character: ""
    },
    {
        text: "O assistente pessoal está visivelmente abalado.",
        choices: [
            { text: "Perguntar sobre o comportamento recente do colecionador", nextScene: 16 },
            { text: "Perguntar onde ele estava na noite do crime", nextScene: 15 }
        ],
        background: "images/assistant.jpg",
        character: "images/assistant_character.png"
    },
    {
        text: "Os registros financeiros mostram grandes transações recentes.",
        choices: [
            { text: "Investigar transações suspeitas", nextScene: 17 },
            { text: "Interrogar o artista desonrado", nextScene: 12 }
        ],
        background: "images/financial_records.jpg",
        character: ""
    },
    {
        text: "A pintura desaparecida era um quadro valioso.",
        choices: [
            { text: "Investigar o paradeiro da pintura", nextScene: 18 },
            { text: "Interrogar o artista desonrado", nextScene: 12 }
        ],
        background: "images/painting.jpg",
        character: ""
    },
    {
        text: "O artista desonrado culpa o colecionador por arruinar sua carreira.",
        choices: [
            { text: "Perguntar sobre a noite do crime", nextScene: 15 },
            { text: "Perguntar sobre sua relação com o colecionador", nextScene: 19 }
        ],
        background: "images/artist.jpg",
        character: "images/artist_character.png"
    },
    {
        text: "A janela está quebrada, indicando uma possível entrada forçada.",
        choices: [
            { text: "Seguir as pistas fora da janela", nextScene: 20 },
            { text: "Interrogar o rival de negócios", nextScene: 7 }
        ],
        background: "images/window_broken.jpg",
        character: ""
    },
    // Cena: Interrogando o rival de negócios sobre a rivalidade
    {
        text: "O rival de negócios fala sobre sua rivalidade com o colecionador.",
        choices: [
            { text: "Perguntar sobre a última vez que eles se encontraram", nextScene: 21 },
            { text: "Perguntar sobre o que discutiram", nextScene: 22 }
        ],
        background: "images/rival.jpg",
        character: "images/rival_character.png"
    },
    // Cena: Descobrindo a verdade com o assistente pessoal
    {
        text: "O assistente pessoal revela informações cruciais sobre as finanças do colecionador.",
        choices: [
            { text: "Perguntar sobre transações suspeitas", nextScene: 23 },
            { text: "Perguntar sobre a relação com a esposa", nextScene: 24 }
        ],
        background: "images/assistant.jpg",
        character: "images/assistant_character.png"
    },
    // Final: Resolvendo o caso com base nas pistas
    {
        text: "Você conclui que o culpado é...",
        choices: [
            { text: "A esposa", nextScene: 25 },
            { text: "O rival de negócios", nextScene: 26 },
            { text: "O assistente pessoal", nextScene: 27 },
            { text: "O artista desonrado", nextScene: 28 }
        ],
        background: "images/office.jpg",
        character: ""
    },
    // Final: Acusando a esposa
    {
        text: "Você acusa a esposa e apresenta as provas. Ela confessa o crime.",
        choices: [
            { text: "Finalizar o caso", nextScene: 0 }
        ],
        background: "images/wife_confession.jpg",
        character: "images/wife_character.png"
    },
    // Final: Acusando o rival de negócios
    {
        text: "Você acusa o rival de negócios, mas ele tem um álibi sólido. Caso não resolvido.",
        choices: [
            { text: "Tentar novamente", nextScene: 0 }
        ],
        background: "images/rival.jpg",
        character: "images/rival_character.png"
    },
    // Final: Acusando o assistente pessoal
    {
        text: "Você acusa o assistente pessoal. Ele nega veementemente e parece genuinamente chocado.",
        choices: [
            { text: "Tentar novamente", nextScene: 0 }
        ],
        background: "images/assistant.jpg",
        character: "images/assistant_character.png"
    },
    // Final: Acusando o artista desonrado
    {
        text: "Você acusa o artista desonrado. Ele finalmente confessa, revelando todo o plano.",
        choices: [
            { text: "Finalizar o caso", nextScene: 0 }
        ],
        background: "images/artist_confession.jpg",
        character: "images/artist_character.png"
    }
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
             
