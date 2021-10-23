import './styles/Body.scss'
import { Article } from './Article'

export function Body() {
    return (
        <div className="main-container">
            <h2>Check out these EPIC destinations!</h2>
            <Article 
            src="../images/img-1.jpg" 
            text="Lorem, ipsum dolor sit amet Officia 
            sint facere dolores iusto magnam."/>
            <Article 
            src="../images/img-2.jpg" 
            text="Lorem, ipsum dolor sit amet Officia 
            sint facere dolores iusto magnam."/>
            <Article 
            src="../images/img-3.jpg" 
            text="Lorem, ipsum dolor sit amet Officia 
            sint facere dolores iusto magnam."/>
            <Article 
            src="../images/img-4.jpg" 
            text="Lorem, ipsum dolor sit amet Officia 
            sint facere dolores iusto magnam."/>
            <Article 
            src="../images/img-5.jpg" 
            text="Lorem, ipsum dolor sit amet Officia 
            sint facere dolores iusto magnam."/> 
        </div>
    )
}