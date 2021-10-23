import './styles/Article.scss'

export function Article(props) {
    return (
        <div className="section">
            <div className="section-container">
                <div className="image-container">
                    <img src={props.src} />
                </div>
                <div className="section-text">
                <h3>{props.text}</h3>
                </div>
            </div>
        </div>
    )
}