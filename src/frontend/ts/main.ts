
class Main{
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
}

window.onload = inicio//para que ejecute luego de cargar la página

function inicio(){

    let user:Usuario = new Usuario("Juan", "jperez", "jperez@gmail.com");
    
    alert(user.toString());

    let per1 = new Persona("Fabian");
    per1.edad = 29;
    let main: Main = new Main(per1);
    
    main.addPersona(new Persona("Romyna"));
    
    mostrar(main);


    modificar(user);
    modificar(new Administrador());
    ver(user);
    ver(new Persona("Fabuco"));

    let btn = document.getElementById("btnSaludar");
    
    btn.onclick =  saludar;
}

function ver(ac:Persona){
    ac.toString();
}

function modificar(ac:Acciones){
    ac.modificarusuario();

}

function mostrar(main:Main){
    let personas = main.getPersona();
    let datosPersonas = "";
    for(let i in personas) {
        datosPersonas = datosPersonas + personas[i].toString();
    }

    alert(datosPersonas);
}

function saludar(){
    alert("Hola");
}