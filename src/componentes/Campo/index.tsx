import './Campo.css'

interface CampoProps {
    type?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color'
    label: string
    placeholder?: string
    valor: string
    obrigatorio?: boolean
    aoAlterado: (valor: string) => void
}
const Campo = ({label, placeholder = '', valor, aoAlterado, type = 'text', obrigatorio = false }:CampoProps) => {
    return (<div className={`campo campo__${type}`}>
        <label>{label}</label>
        <input 
            type={type} 
            value={valor} 
            onChange={(evento: React.ChangeEvent<HTMLInputElement>) => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            placeholder={placeholder}/> 
    </div>)
}

export default Campo