import './styles/button.scss'

export function Button(props) {
    return (
        <button className={`${props.size} ${props.style}`}>
            {props.children}
        </button>
    )
}