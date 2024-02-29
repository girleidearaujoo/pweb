class Empresas {
    constructor(nome, tipo, horarios, datasIndispo) {
        this.nome = nome;
        this.tipo = tipo;
        this.horarios = horarios;
        this.datasIndispo = datasIndispo;
    }

    // Método para verificar se a empresa atende aos critérios
    atendeCritérios(tipo, dia) {
        // Verifica se o tipo da empresa é veterinário e se o turno está dentro dos horários disponíveis
        if (this.tipo === tipo) {
            // Verifica se o dia não está na lista de datas indisponíveis
            if (!this.datasIndispo.includes(dia)) {
                return true; // A empresa atende aos critérios
            }
        }
        return false; // A empresa não atende aos critérios
    }
}

// Criando objetos para diferentes tipos de empresas
let veterinario1 = new Empresas("Clínica Animal", "Veterinário", ["9:00-18:00", "9:00-18:00", "9:00-18:00", "9:00-18:00", "9:00-18:00"], ["2024-03-05", "2024-03-12"]);
let veterinario2 = new Empresas("PetCare", "Veterinário", ["10:00-19:00", "10:00-19:00", "10:00-19:00", "10:00-19:00", "10:00-19:00"], ["2024-03-06", "2024-03-13"]);
let veterinario3 = new Empresas("VetNow", "Veterinário", ["8:00-17:00", "8:00-17:00", "8:00-17:00", "8:00-17:00", "8:00-17:00"], ["2024-03-07", "2024-03-14"]);
let veterinario4 = new Empresas("AnimalClinic", "Veterinário", ["9:00-18:00"], ["2024-03-08", "2024-03-15"]);

let hotel1 = new Empresas("Pet Paradise", "Hotel", ["Check-in: 14:00, Check-out: 12:00"], ["2024-03-05", "2024-03-12"]);
let hotel2 = new Empresas("Dog's Haven", "Hotel", ["Check-in: 13:00, Check-out: 11:00"], ["2024-03-06", "2024-03-13"]);
let hotel3 = new Empresas("Paws Inn", "Hotel", ["Check-in: 15:00, Check-out: 10:00"], ["2024-03-07", "2024-03-14"]);
let hotel4 = new Empresas("Meow Manor", "Hotel", ["Check-in: 12:00, Check-out: 10:00"], ["2024-03-08", "2024-03-15"]);

let baba1 = new Empresas("BabyCare", "Babá", ["8:00-18:00"], ["2024-03-05", "2024-03-12"]);
let baba2 = new Empresas("TinyToes", "Babá", ["9:00-17:00"], ["2024-03-06", "2024-03-13"]);
let baba3 = new Empresas("NannyNest", "Babá", ["10:00-16:00"], ["2024-03-07", "2024-03-14"]);
let baba4 = new Empresas("ChildCherish", "Babá", ["12:00-20:00"], ["2024-03-08", "2024-03-15"]);

let petshop1 = new Empresas("FurryFriends", "Petshop", ["9:00-18:00"], ["2024-03-05", "2024-03-12"]);
let petshop2 = new Empresas("PawPalace", "Petshop", ["10:00-19:00"], ["2024-03-06", "2024-03-13"]);
let petshop3 = new Empresas("AnimalArk", "Petshop", ["8:00-17:00"], ["2024-03-07", "2024-03-14"]);
let petshop4 = new Empresas("CritterCraze", "Petshop", ["11:00-20:00"], ["2024-03-08", "2024-03-15"]);

// Armazenando os objetos em uma lista
let listaEmpresas = [veterinario1, veterinario2, veterinario3, veterinario4, hotel1, hotel2, hotel3, hotel4, baba1, baba2, baba3, baba4, petshop1, petshop2, petshop3, petshop4];

console.log(listaEmpresas);


// Função para verificar as empresas que atendem aos critérios
function verificarEmpresas(tipo, turno, dia) {
    let empresasAtendendo = [];
    for (let empresa of listaEmpresas) {
        if (empresa.atendeCritérios(tipo, turno, dia)) {
            empresasAtendendo.push(empresa);
        }
    }
    return empresasAtendendo;
}

function desenharCards(div, empresas) {
    div.innerHTML = ''
    for (const empresa of empresas) {
        div.innerHTML += `
        <div class="card" style="width: 18rem; margin: 5px; ">
  <div class="card-body">
    <h5 class="card-title">${empresa.nome}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${empresa.horarios}</h6>
    <a href="#" class="card-link">Email</a>
    <button class="" style="border: none;
    display: inline-block;
    background-color: #8c4b20;
    color: #ffffff;
    border-radius: 9px;" id="btnLS">Salvar</button>
  </div>
</div>
        `
    }

    let btnLS =  document.getElementById('btnLS')
    btnLS.addEventListener('click', () => {
        localStorage.setItem()
    })
}
// Verificando empresas que atendem ao critério de ser veterinário no turno "9:00-18:00" e no dia "2024-03-06"
let empresasAtendendoCritérios = verificarEmpresas("9:00-18:00", "2024-03-06");
console.log(empresasAtendendoCritérios);
