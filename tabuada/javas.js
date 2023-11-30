var numb1 = [1,2,3,4,5,6,7,8,9,10] //vermelho
var numb2 = [2,4,6,8,10,12,14,16,18,20]//amarelo
var numb3 = [3,6,9,12,15,18,21,24,27,30]//verde
var numb4 = [4,8,12,16,20,24,28,32,26,40]//azul
var numb5 = [5,10,15,20,25,30,35,40,45,50]//roxo

function corestab(){
    var numerotab = parseInt(document.getElementById("numSoz").value)
    console.log(numerotab)
    var box = document.getElementById("quadradovermelho") 
     for(var i = 0;i<numb1.length;i++) {
        console.log(numerotab==numb1[i])
        if(numerotab==numb1[i]){ console.log("ok")  
            box.style.borderColor="#f00" 
            break
     }
        else{box.style.borderColor="rgb(223, 213, 151)"}
        } 
    var box2 = document.getElementById("quadradoamarelo")
     for(var i = 0;i<numb2.length;i++) {
        if(numerotab==numb2[i]){
            box2.style.borderColor="rgb(255, 238, 0)"
            break
    }

        else{box2.style.borderColor="rgb(223, 213, 151)"}
        }
    var box3 = document.getElementById("quadradoverde")
     for(var i = 0;i<numb3.length;i++) {
        if(numerotab==numb3[i]){
            box3.style.borderColor="rgb(0, 255, 64)"
            break
    }

            else{box3.style.borderColor="rgb(223, 213, 151)"}
        }
    var box4 = document.getElementById("quadradoazul")
     for(var i = 0;i<numb4.length;i++) {
        if(numerotab==numb4[i]){
            box4.style.borderColor="rgb(0, 247, 255)"
            break
    }

            else{box4.style.borderColor="rgb(223, 213, 151)"}
        }
    var box5 = document.getElementById("quadradoroxo")
     for(var i = 0;i<numb5.length;i++) {
        if(numerotab==numb5[i]){
            box5.style.borderColor="rgb(0, 255, 64)"
            break
    }

            else{box5.style.borderColor="rgb(223, 213, 151)"}
        }

}


 
    
    