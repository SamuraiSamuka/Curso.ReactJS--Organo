import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    obrigatorio: boolean
    items: string[]
    valor: string
    aoAlterado: (valor: string) => void
}

const ListaSuspensa = ({label, items,  valor, aoAlterado, obrigatorio = false}:ListaSuspensaProps) => {
    return (
    <div className="lista-suspensa">
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa