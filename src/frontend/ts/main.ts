
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

        console.log(object);
        alert(`Hola ${this.personas[0].getNombre()} estoy en el main`);
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
    let btn2 = document.getElementById("btnOtro");
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
});


function mostrar(main:Main){
    let personas = main.getPersona();
    let datosPersonas = "";
    for(let i in personas) {
        datosPersonas = datosPersonas + personas[i].toString();
    }

    alert(datosPersonas);
}
