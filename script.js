function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "archivo1.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("serie"); 
    let table="<tr><th>Titulo</th><th>Categoria</th><th>Estreno</th><th>Fechas Inicio-Fin</th><th>Temporadas</th><th>Episodios</th><th>Productor</th><th>Autor</th><th>Reparto</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td> ";
      table += "<td>" + x[i].getElementsByTagName("categoria")[0].childNodes[0].nodeValue + "</td> ";
      table += "<td>" + x[i].getElementsByTagName("ano")[0].childNodes[0].nodeValue + "</td> ";
    
      table += "<td>";
      const a = x[i].getElementsByTagName("fechas");
      var maxLength=0;
      for(let y = 0; y < a[0].getElementsByTagName("fecha").length; y++){ 
        maxLength=y;
      }
  
      for(let y = 0; y < a[0].getElementsByTagName("fecha").length; y++){ 
        
        if(y==maxLength){
          table += a[0].getElementsByTagName("fecha")[y].childNodes[0].nodeValue;
          
        }else{
          table += a[0].getElementsByTagName("fecha")[y].childNodes[0].nodeValue + "-"; 
        }
      }
      table += "</td>";
      table += "<td>" + x[i].getElementsByTagName("temporadas")[0].childNodes[0].nodeValue + "</td>";
      table += "<td>" + x[i].getElementsByTagName("episodios")[0].childNodes[0].nodeValue + "</td>";
      table += "<td>" + x[i].getElementsByTagName("productor")[0].childNodes[0].nodeValue + "</td>";
      table += "<td>" + x[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue + "</td>";
      table += "<td>";
      const b = x[i].getElementsByTagName("reparto");
      var maxLength=0;
      for(let y = 0; y < b[0].getElementsByTagName("nombre").length; y++){ 
        maxLength=y;
      }
      for(let y = 0; y <b[0].getElementsByTagName("nombre").length; y++){
        if(y==maxLength){
          table += b[0].getElementsByTagName("nombre")[y].childNodes[0].nodeValue;
          
        }else{
          table += b[0].getElementsByTagName("nombre")[y].childNodes[0].nodeValue + ","; 
        }
      }
      table += "</td>";
    }
    document.getElementById("demo").innerHTML = table;
  }
  