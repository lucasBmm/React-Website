import './styles/Hero.scss'
import { Button } from './Button'
import video from '../videos/video-1.mp4'

export function Hero() {
    return(
        <div className="hero-container">
            <video src={video} autoPlay loop muted/>
            <div className="text-container">
            <h1>ADVENTURE AWAITS</h1>
            <h3>What are you waiting for?</h3>
            <Button size="btn-medium" style="btn-navbar">
                GET STARTED
            </Button>
            <Button size="btn-medium" style="btn-hero">
                WATCH TRAILER
            </Button>
            </div>
        </div>
    )
}