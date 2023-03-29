 var nomesoo=[];
  function enviar(){
    var l1=document.getElementById("nome1").value;
    var l2=document.getElementById("nome2").value; 
    var l3=document.getElementById("nome3").value;
    var l4=document.getElementById("nome4").value;
    var l5=document.getElementById("nome5").value;
    console.log(l1,l2,l3,l4,l5)
    nomesoo.push(l1);
    nomesoo.push(l2);
    nomesoo.push(l3);
    nomesoo.push(l4);
    nomesoo.push(l5);
    console.log(nomesoo)
    document.getElementById("displaynames").innerHTML=nomesoo;
    document.getElementById("btenviar").style.display="none"
    document.getElementById("btorganizar").style.display="inline-block"                
  }
  function organizar(){
  nomesoo.sort()
  document.getElementById("displaynames").innerHTML=nomesoo;
  document.getElementById("btenviar").style.display="inline-block"  
  }
