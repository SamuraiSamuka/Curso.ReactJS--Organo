import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [colaborador, setcolaborador] = useState({})
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado(colaborador) 
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={colaborador.nome}
                    aoAlterado={valor => setcolaborador(anterior => {
                        return {...anterior, nome: valor}
                    })}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={colaborador.cargo}
                    aoAlterado={valor => setcolaborador(anterior => {
                        return {...anterior, cargo: valor}
                    })}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={colaborador.imagemURL}
                    aoAlterado={valor => setcolaborador(anterior => {
                        return {...anterior, imagemURL: valor}
                    })}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={colaborador.time}
                    aoAlterado={valor => setcolaborador(anterior => {
                        return {...anterior, time: valor}
                    })}
                />
                <Botao onSubmit={aoSalvar}>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario