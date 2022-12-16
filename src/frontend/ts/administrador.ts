class Administrador implements Acciones{
    public modificarusuario(): string {
        return "Puede porque es admin";
    }
    public recuperarContrasena(): string {
        return "Puede recuperar contraseña porque es admin";
    }
}