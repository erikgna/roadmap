function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.vizu = 0,
        this.comentarios = [],
        this.estaAoVivo = false
}

let postagem = new Postagem('titulo', 'msg', 'autor')

console.log(postagem)