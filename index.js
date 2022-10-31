const prato1 = {
    nome: "Macarrão quatro queijos",
    quantidadeIngredientes: 8,
    queijo: true,
    visivel: true,
    quaisIngredientes: ["macarrão spaguetti", "manteiga", "leite integral", "noz-moscada", 
    "queijo prato", "queijo provolone", "queijo parmesão", "queijo gorgonzola"],
    imagem: "./macarrao-ao-molho-de-4-queijos.jpg",
}

const prato2 = {
    nome: "Crepioca",
    quantidadeIngredientes: 6,
    queijo: true,
    visivel: true,
    quaisIngredientes: ["goma de mandioca", "ovo", "queijo parmesão", "requeijão", 
    "presunto", "queijo mussarela"],
    imagem: "./crepioca.jpg",
}

const prato3 = {
    nome: "Arroz de camarão",
    quantidadeIngredientes: 8,
    queijo: false,
    visivel: true,
    quaisIngredientes: ["camarão", "cebola", "azeite", "molho de tomate", "coco", "coentro",
    "arroz", "sal"],
    imagem: "./arrozdecamarao.jpg",
}

//const valoresObjeto = ["Nome", "quantidadeIngredientes", "Queijo", "quaisIngredientes", "imagem"]



const busca = document.getElementById("nome")
function input (){
    if(prato1.quaisIngredientes.includes(busca.value)){
prato1.visivel = true
        console.log(prato1)
    } else {
        prato1.visivel = false
    }
    if(prato2.quaisIngredientes.includes(busca.value)){
        prato2.visivel = true
        console.log(prato2)
            } else {
                prato2.visivel = false
            }
            if(prato3.quaisIngredientes.includes(busca.value)){
                prato3.visivel = true
                console.log(prato3)
                    } else {
                        prato3.visivel = false
                    }

                    if(prato1.visivel === true){
                        for (let i in prato1) {
                            if (i === "quaisIngredientes") {
                                const tabela = document.getElementsByClassName("lista-1")
                                // console.log(tabela[0])
                                for(let k in prato1.quaisIngredientes){
                                    let linha = document.createElement("li")
                                    const conteudoNovo = document.createTextNode(prato1.quaisIngredientes[k])
                                    linha.appendChild(conteudoNovo)
                                    tabela[0].insertAdjacentElement("beforeend", linha)
                                    // console.log(linha)
                                    
                        
                                }
                                
                            }
                        }
                    }
                    
                    
                    if(prato2.visivel === true){
                    for (let i in prato2) {
                        if (i === "quaisIngredientes") {
                            const tabela = document.getElementsByClassName("lista-2")
                            // console.log(tabela[0])
                            for(let t in prato2.quaisIngredientes){
                                let linha = document.createElement("li")
                                const conteudoNovo = document.createTextNode(prato2.quaisIngredientes[t])
                                linha.appendChild(conteudoNovo)
                                tabela[0].insertAdjacentElement("beforeend", linha)
                                // console.log(linha)
                                
                    
                            }
                            
                        }
                    }
                    }
                    
                    if(prato3.visivel === true){
                    for (let i in prato3) {
                        if (i === "quaisIngredientes") {
                            const tabela = document.getElementsByClassName("lista-3")
                            // console.log(tabela[0])
                            for(let f in prato3.quaisIngredientes){
                                let linha = document.createElement("li")
                                const conteudoNovo = document.createTextNode(prato3.quaisIngredientes[f])
                                linha.appendChild(conteudoNovo)
                                tabela[0].insertAdjacentElement("beforeend", linha)
                                // console.log(linha)
                                
                    
                            }
                            
                        }
                    }
                    }







                }

























// const frutas = ["laranja", "limão", "uva"];
// const container = document.getElementById("fruta-1")
//     container.innerHTML = "laranja"
//     const container2 = document.getElementById("fruta-2")
//     container2.innerHTML = "limão"
//     const container3 = document.getElementById("fruta-3")
//     container3.innerHTML = "uva"

// const inclusao = () => {
//     const resposta1 = document.getElementById("texto").value
//     frutas.push(resposta1)
//     const fruta = document.getElementById("fruta-4")
//     fruta.innerHTML = frutas[3]

// }
// console.log(document.getElementById("texto").value)

// let resposta = document.getElementById("texto").value
// console.log(resposta)

// function adicionaItem(event){
//     let elementoNovo = document.createElement("article")
//     elementoNovo.innerHTML = "novo article"
//     let referencia = document.getElementById("container")
//     referencia.insertAdjacentElement("beforeend", elementoNovo)
//     elementoNovo.classList.add("item")
    
//     }
    
    

//     function removeItem(event){
//     const remover = event.target
//     console.log(event.target)
//     remover.remove()
//     }


   
