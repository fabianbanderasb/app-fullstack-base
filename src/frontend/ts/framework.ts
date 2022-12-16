class Framework{
    public ejecutarRequest(metodo:string, url:string, data?:any){
        let xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = () =>{ //se va ejecutar cuando el servidor tenga la información disponible para mostrar
            if(xmlHttp.readyState==4){//una respuesta para procesar
                if(xmlHttp.status == 200){//respueta de que todo va bien

                    let listaDispositivos: Array<Device> = JSON.parse(xmlHttp.responseText);
                    console.log("Llegó info del servidor", listaDispositivos); 
                    let cajaDispositivos = document.getElementById("cajaDispositivos");
                    cajaDispositivos.innerHTML=`<h4>Dispositivos a mostrar: ${listaDispositivos.length} </h4>`;
                    for(let disp of listaDispositivos){
                        
                        //esta sería la forma correcta de escribir el código de cajaDispositivos.innerHTML += `<h5>${disp.id} - ${disp.name}</h5>`;
                        //let h5 = document.createElement("h5");
                        //h5.innerHTML = "${disp.id} - ${disp.name}";
                        //cajaDispositivos.appendChild(h5);


                        //console.log(disp.id, disp.name); // en consola
                        //cajaDispositivos.innerHTML = cajaDispositivos.innerHTML + disp.id + disp.name
                        cajaDispositivos.innerHTML += `<h5>${disp.id} - ${disp.name}</h5>`;//refactorizacion de codigo
                    }   
                }else{
                    alert("Error en la consulta");
                }
            }    
        }
        xmlHttp.open(metodo, url,true);
        if(data!=undefined){
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(JSON.stringify(data));
        }else{
            xmlHttp.send();
        }
        
    }

}