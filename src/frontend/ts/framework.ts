class Framework{
    public ejecutarRequest(metodo:string, url:string, responseHandler:HandleResponse, data?:any){
        let xmlHttp = new XMLHttpRequest();


        xmlHttp.onreadystatechange = () =>{ //se va ejecutar cuando el servidor tenga la información disponible para mostrar
            if(xmlHttp.readyState==4){//una respuesta para procesar
                
                if(xmlHttp.status == 200){//respueta de que todo va bien

                    let listaDispositivos: Array<Device> = JSON.parse(xmlHttp.responseText);
                    responseHandler.cargarGrilla(listaDispositivos);
                       
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

    public mostrarCargando() {
        let imgLoading = document.getElementById("loading");
        imgLoading.hidden = false;
    }

    public ocultarCargando() {
        let imgLoading = document.getElementById("loading");
        imgLoading.hidden = true;
    }

}