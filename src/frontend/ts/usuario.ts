
class Usuario extends Persona{
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
        return "Username "+this.username;
    }
}