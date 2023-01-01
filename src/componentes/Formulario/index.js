import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [colaborador, setColaborador] = useState({})
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado(colaborador) 
        setColaborador({nome: '', cargo: '', imagemURL: '', time: ''})
    }

    return (
        <section className="formulario__container">
            <form className="formulario" onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={colaborador.nome}
                    aoAlterado={valor => setColaborador(anterior => {
                        return {...anterior, nome: valor}
                    })}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={colaborador.cargo}
                    aoAlterado={valor => setColaborador(anterior => {
                        return {...anterior, cargo: valor}
                    })}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={colaborador.imagemURL}
                    aoAlterado={valor => setColaborador(anterior => {
                        return {...anterior, imagemURL: valor}
                    })}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={colaborador.time}
                    aoAlterado={valor => setColaborador(anterior => {
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