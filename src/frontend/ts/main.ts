
class Main implements EventListenerObject{
    
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
        
        this.framework.ejecutarRequest("GET", "http://localhost:8000/devices");
    }

    dibujarLista(lista:string){
        let listaDispositivos: Array<Device> = JSON.parse(lista);
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
    }

    cambiarEstadoDispositivosAlServidor(){ 

        let json = {id:1,state:0};
        this.framework.ejecutarRequest("POST", "http://localhost:8000/deviceChange", json);        
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
            let textArea = document.getElementById("textarea_1");
            //textArea.textContent = `Hola ${this.personas[1].getNombre()} otro botón`;
            textArea.innerHTML = `Hola ${this.personas[1].getNombre()} otro botón`;
            //alert(`Hola ${this.personas[1].getNombre()} otro botón`);

            this.consultarDispositivosAlServidor();//llamado a la función consultarDispositivosAlServidor
        }
    }
}

window.addEventListener("load",()=>{
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

    //btn.onclick = function(){
    //    alert("Hola");
    //};
    
    //btn.onclick = ()=>{//la misma funcion pero reecrita con arrow function
    //    alert("Hola");
    //};

    //btn.addEventListener ("",()=> { //es mejor escribirlo con un escuchador de eventos
    //    alert("Hola");
   // } )
    //btn.addEventListener ("click",()=> { 
    //    alert("Chau");
    //} )
});


function mostrar(main:Main){
    let personas = main.getPersona();
    let datosPersonas = "";
    for(let i in personas) {
        datosPersonas = datosPersonas + personas[i].toString();
    }

    //alert(datosPersonas);
}
