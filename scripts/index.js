let quadrados = document.getElementsByTagName('li')
let gameover = true
let player = 1
var botao = document.querySelector("#but")
var jog1 = document.createElement('p')
var jogador1 = document.getElementById("tex1")
var jogador2 = document.getElementById("tex2")

botao.addEventListener("click", function clicar(){
    jogador1 = String(jogador1.value)
    jogador2 = String(jogador2.value)
    if((jogador1 != "undefined" && jogador2 != "undefined")&& (jogador1 != "" && jogador2 != "")){
        
        var left = document.getElementById('left')
        jog1.innerHTML = `${jogador1}: ▶️  <br> ${jogador2}:   `

        left.appendChild(jog1)
        gameover = false
    } else {
        alert('Insira nomes!')
        jogador1 = ""
        jogador2 = ""
    }
})

for (let quadrado of quadrados){
    quadrado.addEventListener('click', function quadradoClicado(){
        if (gameover == true){return}
        if(this.innerText == ""){
            if (player == 1){
                jog1.innerHTML = `${jogador1}:  <br> ${jogador2}: ▶️ `
                this.innerHTML = "X"
                this.setAttribute("jogada", 1)
                
                player = 2
            } else {
                jog1.innerHTML = `${jogador1}: ▶️ <br> ${jogador2}: `
                this.innerHTML = "O"
                this.setAttribute("jogada", 2)
                
                player = 1
            }
        }
        verificarVencedor()
    })
}
 async function verificarVencedor(){
    
   /*for (var i = 1; i < 10; i++){
        var arrai = []
        arrai = `li${i}.document.getElementById("${i}").getAttribute("jogada")`
        console.log(arrai)
    }
    console.log(arrai)*/
    var li1 = document.getElementById("1").getAttribute("jogada")
    var li2 = document.getElementById("2").getAttribute("jogada")
    var li3 = document.getElementById("3").getAttribute("jogada")
    var li4 = document.getElementById("4").getAttribute("jogada")
    var li5 = document.getElementById("5").getAttribute("jogada")
    var li6 = document.getElementById("6").getAttribute("jogada")
    var li7 = document.getElementById("7").getAttribute("jogada")
    var li8 = document.getElementById("8").getAttribute("jogada")
    var li9 = document.getElementById("9").getAttribute("jogada")
    var vencedor = ""
    
    if ((li1 == li2 && li1 == li3 && li1 != "") || (li1 == li4 && li1 == li7 && li1 != "" ) || (li1 == li5 && li1 == li9 && li1 != "") ){
        vencedor = li1
        
    } else if ((li5 == li2 && li5 == li8 && li5!= "") || (li5 == li4 && li5 == li6 && li5!= "") || (li5 == li3 && li5 == li7 && li5!= "" )){
        vencedor = li5
        
    } else {
        if ((li9 == li3 && li9 == li6 && li9 != "") || (li9 == li7 && li9 == li8 && li9 != "")){
            vencedor = li9
            
        } 
        
    }
    if((li1 != "")&&(li2 != "")&&(li3 != "")&&(li4 != "")&&(li5 != "")&&(li6 != "")&&(li7 != "")&&(li8 != "")&&(li9 != "")&&(vencedor=="")){
        gameover=true
        await espera(50)
        alert("Velha!")
        window.location.reload()
    }

    if (vencedor != ""){
        gameover = true
        // promise await
        await espera(50)
        if ( vencedor == 1 ){
            alert(`${jogador1} venceu!`)
            window.location.reload()
        } else if (vencedor == 2){
            alert(`${jogador2} venceu!`)
            window.location.reload()
        } 
    }
    
     
}
  
    
function espera(ms){
    //promise = objeto
    return new Promise(resolve => setTimeout(resolve, ms))
}
