
interface Perfil {
    nombre: string;
    compania: string;
    fechaNacimiento: Date;
    direccion: string;
    acerca: string;
}

interface Acceso {
    id: string;
    email: string;
    usuario: string;
    contrasena: string;
}

type Usuario = Perfil & Acceso;

function crearUsuario(perfil: Perfil, acceso: Acceso) {
    const newUser: Usuario = {
        ...perfil,
        ...acceso
    }
    return newUser;
}

// Manual test

const dummyPerfil = {
    nombre: "Lucio",
    compania: "buena",
    direccion: "Santa Fe",
    fechaNacimiento: new Date(1994, 6, 11, 9, 10, 0),
    acerca: "La rompo en TS"
}

const dummyAcceso = {
    id: "00001",
    email: "luciosb100@gmail.com",
    usuario: "l-s-b",
    contrasena: "pwd123"
};

crearUsuario(dummyPerfil, dummyAcceso);
