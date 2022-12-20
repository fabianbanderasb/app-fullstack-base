declare const M;

class Main implements EventListenerObject, HandleResponse{
    
    private framework:Framework = new Framework();
    private personas: Array<Persona> = new Array();
    constructor(per:Persona){
        this.personas.push(per);

        console.log(this);
    }
    public addPersona(per: Persona){
        this.personas.push(per);
    }
    public getPersona(){
        return this.personas;
    }

    consultarDispositivosAlServidor(){ //capturar los dispositivos del servidor
        
        this.framework.ejecutarRequest("GET", "http://localhost:8000/devices",this);
    }

    cambiarEstadoDispositivosAlServidor(){ 

        let json = {id:1,state:0};
        this.framework.ejecutarRequest("POST", "http://localhost:8000/deviceChange",this, json);        
    }

    cargarGrilla(listaDispositivos: Array<Device>){
        console.log("Llegó info del servidor", listaDispositivos); 
        let cajaDispositivos = document.getElementById("cajaDispositivos");
        let grilla:string ="<ul class='collection'>";
        for(let disp of listaDispositivos){

            grilla += `<li class="collection-item avatar">`;

            if(disp.type == 1){
                grilla+=`<img src="static/images/lamp.png" alt="" class="circle">`;
            }else{
                grilla+=`<img src="static/images/louver.png" alt="" class="circle">`;
            }

            grilla+=`<span class="title negrita">${disp.name}</span>
            <p>${disp.description}
            </p>
              <a href="#!" class="secondary-content">
                  <div class="switch">
                      <label>
                          Off`;
                        if(disp.state){
                            grilla+=`<input id="cb_${disp.id}" type="checkbox" checked>`;
                        }else{
                            grilla+=`<input id="cb_${disp.id}" type="checkbox">`;
                        }
                              
                          grilla+= `<span class="lever"></span>
                          On
                      </label>
                  </div>
              </a>
            </li>`;//refactorizacion de codigo
        }
        grilla += "</ul>";

        cajaDispositivos.innerHTML = grilla;
        
        for(let disp of listaDispositivos){
            let cb = document.getElementById("cb_"+disp.id);
            cb.addEventListener("click",this);
        }

        this.framework.ocultarCargando();

    }


    handleEvent(object: Event): void {

        //console.log(object.type);
        //console.log(object.target);
        let tipoEvento: string = object.type;
        let objEvento: HTMLElement;
        objEvento = <HTMLElement>object.target;
        
        if(objEvento.id == "btnOtro"){
            console.log(objEvento.id, objEvento.textContent);

            let iNombre = <HTMLInputElement>document.getElementById("iNombre");
            //objEvento.textContent = "Cambiar el nombre";
            objEvento.textContent = iNombre.value;
            alert(`Hola ${this.personas[0].getNombre()} estoy en el main`);
        }else if(objEvento.id == "btnSaludar"){
            this.framework.mostrarCargando();

            this.consultarDispositivosAlServidor();//llamado a la función consultarDispositivosAlServidor


        }else if(objEvento.id.startsWith("cb_")){
            let idDisp = objEvento.id.substring(3);
            
            alert("Se cambio el estado de un dispositivo "+ idDisp + " - cambiando a " + (<HTMLInputElement> objEvento).checked);
            //this.framework.ejecutarRequest("POST", "http:", this, js);

        
        }else{
            objEvento = <HTMLElement>objEvento.parentElement;

            if (objEvento.id == "btnAdd") {
                //alert("Se agregó");
                //M.toast({html: 'I am a toast!', classes: 'rounded'});
                M.toast({html: 'Se agrego!', classes: 'rounded'});

                let elementTxtNombre = <HTMLInputElement>document.getElementById("txtNombre");
                console.log(elementTxtNombre.value);

                let elementoSelectColor = <HTMLSelectElement>document.getElementById("selectColores");
                var instance = M.FormSelect.getInstance(elementoSelectColor);
                console.log(instance.getSelectedValues());



            }
            
        }
    }
}

window.addEventListener("load",()=>{

    //document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    //let options = {};
    var instances = M.FormSelect.init(elems, "");
    M.updateTextFields();
    //});
    var elemsM = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elemsM, "");

    let user:Usuario = new Usuario("Juan", "jperez", "jperez@gmail.com");
    let per1 = new Persona("Fabian");
    per1.edad = 29;
    let main: Main = new Main(per1);
    main.addPersona(new Persona("Romyna"));
    mostrar(main);
    let btn = document.getElementById("btnSaludar");
    btn.addEventListener("click", main);
    let btn2 = document.getElementById("btnOtro");
    btn2.addEventListener("click", main);

    let btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", main);


});


function mostrar(main:Main){
    let personas = main.getPersona();
    let datosPersonas = "";
    for(let i in personas) {
        datosPersonas = datosPersonas + personas[i].toString();
    }

    //alert(datosPersonas);
}
