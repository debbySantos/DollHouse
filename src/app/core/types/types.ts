export interface Bonecas{
    id?: number
    foto: string,
    nome: string,
    categoria: string,
    preco: number,
    estoque: boolean,
    quantidade:number,
    status: number,
    descricao: string
}

export interface Usuarios {
      id?: number,
      foto: string,
      nome: string,
      telefone: string,
      senha: string,
      cep : string,
      logradouro : string,
      numero: string,
      complemento: string,
      bairro: string,
      cidade: string,
      estado: string
}