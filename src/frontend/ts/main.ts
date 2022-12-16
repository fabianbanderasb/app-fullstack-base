class Main{
    private per1:Persona;
    //private per2:Persona;
    constructor(per:Persona){
        this.per1 = per;
    }

    public getPersona():Persona {
        return this.per1;
    }
}



window.onload = inicio//para que ejecute luego de cargar la página

function inicio(){

    let per1 = new Persona("Fabian");
    per1.edad = 29;
    let main:Main = new Main(per1);
    
    //let nombre = main.getNombre();
    //alert("Hola "+ nombre + " tenés "+ main.edad + " años");
    mostrar(main);

    let btn = document.getElementById("btnSaludar");
    
    btn.onclick =  saludar;
}

function mostrar(main:Main){
    alert(main.getPersona().toString());
}

function saludar(){
    alert("Hola");
}