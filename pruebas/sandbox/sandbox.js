function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // No necesita un 'return'
  // Tu código:
  objeto[metodo]();
}
const object = {
  x: 0,
  incrementX: function () {
    this.x++;
  },
};
invocarMetodo(object, "incrementX");
console.log(object.x);
invocarMetodo(object, "incrementX");
console.log(object.x);
