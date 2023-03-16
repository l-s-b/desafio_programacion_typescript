enum Rol {
    ADMIN = 'admin',
    MIEMBRO = 'miembro',
    INVITADO = 'invitado',
}

interface Usuario {
    email: string;
    usuario: string;
    rol: Rol;
}

function esValido(value: string): value is Rol {
    return Object.values<string>(Rol).includes(value);
}

function getRole(rol: string) {
    if (!esValido(rol)) {
        throw new Error('El rol no es valido')
    } else return rol
}

function crearUsuario(email: string, usuario: string, rol: string): Usuario {
    return {
        email,
        usuario,
        rol: getRole(rol)
    }
}

console.log(crearUsuario('fuck@fuck.com', "QueEjercicioDeMierda", "admin"));