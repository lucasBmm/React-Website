export function Article(props) {
    return (
        <div className="section">
            <div className="section-container">
                <img src={props.src} />
                <div className="section-text">
                <h3>{props.text}</h3>
                </div>
            </div>
        </div>
    )
}