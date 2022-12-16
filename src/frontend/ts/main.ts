class Main{
    private nombre: string;
    public edad: number;

    constructor(nombre:string){
        this.nombre = nombre;
        
    }
    public getNombre():string{
        return this.nombre;
    }

    public toString():string{
        return "Nombre: "+this.nombre+ " Edad: "+this.edad; 
    }
}



window.onload = inicio//para que ejecute luego de cargar la página

function inicio(){

    let main:Main = new Main("Fabian");
    main.edad = 29;
    //let nombre = main.getNombre();
    //alert("Hola "+ nombre + " tenés "+ main.edad + " años");
    mostrar(main);
    let main2:Main = new Main("Romyna");
    main2.edad = 33;
    mostrar(main2);

    let btn = document.getElementById("btnSaludar");
    
    btn.onclick =  saludar;
}

function mostrar(main:Main){
    alert(main.toString());
}

function saludar(){
    alert("Hola");
}