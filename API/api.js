const search = document.getElementById("search");
const procura = document.getElementById("procura");
const demonSlayer = document.getElementById("demonSlayer");
const slayerName = document.getElementById("slayerName");
const slayerAge = document.getElementById("slayerAge");
const slayerGender = document.getElementById("slayerGender");
const slayerRace = document.getElementById("slayerRace");
const slayerId = document.getElementById("slayerId");
const aviso = document.getElementById("aviso");

procura.addEventListener("click", () => {
    fetch(`https://www.demonslayer-api.com/api/v1/characters?`)
        .then((res) => res.json())
        .then((data) => {
            const personagem = data.content.find(p => p.name.toLowerCase() === search.value.toLowerCase() || p.id === Number(search.value));

            if (personagem) {
                demonSlayer.src = personagem.img
                slayerName.innerText = personagem.name;
                slayerAge.innerText = personagem.age;
                slayerGender.innerText = personagem.gender;
                slayerRace.innerText = personagem.race;
                slayerId.innerText = `Id do personagem: ${personagem.id}`;
            } else {
                demonSlayer.src = "";
                slayerName.innerText = "";
                slayerAge.innerText = "";
                slayerGender.innerText = "";
                slayerRace.innerText = "";
                slayerId.innerText = "";
                aviso.innerText = `Personagem ou ID errado! (Digite ID de 1 a 5!)`;
            }
        })

        .catch((erro) => {
            aviso.innerText = "Erro ao buscar os dados da API!";
    });

});