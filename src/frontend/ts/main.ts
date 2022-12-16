
class Main implements EventListenerObject{
    private personas: Array<Persona> = new Array();
    constructor(per:Persona){
        this.personas.push(per);
    }
    public addPersona(per: Persona){
        this.personas.push(per);
    }
    public getPersona(){
        return this.personas;
    }

    handleEvent(object: Event): void {
        alert(`Hola ${this.personas[0].getNombre()} estoy en el main`);
    }
}

window.onload = inicio//para que ejecute luego de cargar la página

function inicio(){

    let user:Usuario = new Usuario("Juan", "jperez", "jperez@gmail.com");
    
    //alert(user.toString());

    let per1 = new Persona("Fabian");
    per1.edad = 29;
    let main: Main = new Main(per1);
    
    main.addPersona(new Persona("Romyna"));

    mostrar(main);
    let btn = document.getElementById("btnSaludar");
    btn.addEventListener("click", main);

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


}

function mostrar(main:Main){
    let personas = main.getPersona();
    let datosPersonas = "";
    for(let i in personas) {
        datosPersonas = datosPersonas + personas[i].toString();
    }

    alert(datosPersonas);
}
