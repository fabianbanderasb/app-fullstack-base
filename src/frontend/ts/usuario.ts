
class Usuario extends Persona implements Acciones{
    private username: string;
    private email:string;

    constructor(nombre:string, username:string, email:string){
        super(nombre);
        this.username = username;
        this.email = email;

    }

    public getUsernameYNombre(){
        //return this.username+super.getNombre();
        return this.username;
    }
    public toString(): string {
        //return super.toString()+" Username: "+this.username;
        return `${super.toString()} Username: ${this.username}`;
    }

    public recuperarContrasena(): string {
        return "Puede recuperar";
    }
    public modificarusuario(): string {
        return "No puede realizarlo";
    }
}