function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Pedro', 'Admin');
usuarios.set('Rubens', 'Admin');
usuarios.set('Luiz', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));
