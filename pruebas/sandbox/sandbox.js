// function invocarMetodo(objeto, metodo) {
//   // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
//   // Invoca ese método
//   // No necesita un 'return'
//   // Tu código:
//   objeto[metodo]();
// }
// const object = {
//   x: 0,
//   incrementX: function () {
//     this.x++;
//   },
// };
// invocarMetodo(object, "incrementX");
// console.log(object.x);
// invocarMetodo(object, "incrementX");
// console.log(object.x);

// const user = {
//   usernombre: "Jhon Doe",
//   password: "JavaScript es genial!",
//   posts: [
//     {
//       id: "1",
//       title: "Aventuras en JS!",
//       likes: 10,
//     },
//     {
//       id: "2",
//       title: "Soy Cristian!",
//       likes: 100,
//     },
//     {
//       id: "3",
//       title: "Qué es un JavaScript?",
//       likes: 35,
//     },
//     {
//       id: "4",
//       title: "JS Objects for Dummies",
//       likes: 42,
//     },
//     {
//       id: "5",
//       title: "Educación online",
//       likes: 99,
//     },
//   ],
// };

// function sumarLikesDeUsuario(usuario) {
//   // "usuario" tiene una propiedad llamada "posts" que es un array
//   // "posts" es un array de objetos "post"
//   // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
//   // Suma todos los likes de todos los objetos "post"
//   // Devuelve la suma
//   // Tu código:
//   const likes = usuario.posts.map((elemento) => elemento.likes);
//   let suma = likes.reduce((a, b) => a + b);
//   return suma;
// }
// console.log(sumarLikesDeUsuario(user));

// class Usuario {
//   constructor({ usuario, nombre, email, password }) {
//     (this.usuario = usuario),
//       (this.nombre = nombre),
//       (this.email = email),
//       (this.password = password);
//   }
//   saludar() {
//     return "Hola, mi nombre es " + this.nombre;
//   }
// }

// const user = new Usuario({
//   usuario: "jssamuel",
//   nombre: "Samuel",
//   email: "samuel@email.com",
//   password: "LoveJS",
// });

// console.log(user.usuario);
// console.log(user.saludar());

String.prototype.reverse = function () {
  return String([...this].reverse().join(""));
};
let str = "Hello";

let arr = [...str];

console.log(String(arr.reverse().join("")));
console.log(str.reverse());
