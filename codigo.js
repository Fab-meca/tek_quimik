//listener
document.querySelector("#b1").addEventListener("click", verifica1)

document.querySelector("#b2").addEventListener("click", verifica2)

document.querySelector("#b3").addEventListener("click", verifica3)



//funcoes
function verifica1(){
    if(document.querySelector("#p1o4").checked)
    {   document.querySelector("#resposta1").style.display="block";
        document.querySelector("#erro1").style.display="none";
        document.querySelector("#b1").style.display="none";
        document.querySelector("#p1o1").style.display="none";
        document.querySelector("#p1o2").style.display="none";
        document.querySelector("#p1o3").style.display="none";
        document.querySelector("#p1o5").style.display="none";
        document.querySelector("#pergunta2").style.display="block";
    }
    else
    {   document.querySelector("#erro1").style.display="block";
    }
}

function verifica2(){
    if(document.querySelector("#p2o2").checked)
        {   document.querySelector("#resposta2").style.display="block";
            document.querySelector("#erro2").style.display="none";
            document.querySelector("#b2").style.display="none";
            document.querySelector("#p2o1").style.display="none";
            document.querySelector("#p2o3").style.display="none";
            document.querySelector("#p2o4").style.display="none";
            document.querySelector("#p2o5").style.display="none";
            
            document.querySelector("#pergunta3").style.display="block";
        }
        else
        {   document.querySelector("#erro2").style.display="block";
        }
}

function verifica3(){
    if(document.querySelector("#p3o5").checked)
        {   document.querySelector("#resposta3").style.display="block";
            document.querySelector("#erro3").style.display="none";
            document.querySelector("#b3").style.display="none";
            document.querySelector("#p3o1").style.display="none";
            document.querySelector("#p3o3").style.display="none";
            document.querySelector("#p3o4").style.display="none";
            document.querySelector("#p3o2").style.display="none";
            
            
            document.querySelector("#parabens").style.display="block";
        }
        else
        {   document.querySelector("#erro3").style.display="block";
        }
}