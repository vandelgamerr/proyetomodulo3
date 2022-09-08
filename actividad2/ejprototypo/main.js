let nombre = 'jesus';
nombre.constructor.prototype.saludar = function(){
    return (`${this}`);
}

console.log (nombre.saludar());