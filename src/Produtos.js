import React from 'react'
import Titulo from "./Titulo";
import Produto from "./Produto";
const Produtos = () => {
    const produtos = [
        {nome: "Notebook", propriedades: ["16gb RAM", '512gb']},
        {nome: "Smartphone", propriedades: ["2gb RAM", '128gb']},
      ]
    return (
        <div>
            <Titulo texto="Produtos" cor="red"/>
            {
                produtos.map(produto => (
                    <Produto {...produto}/>
                ))
            }
        </div>
    )
}

export default Produtos;