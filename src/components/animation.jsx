import React, { Component } from 'react';
import animationData from "./logo_animation.json";
import lottie from "lottie-web";

class LogoAnimated extends Component {
    constructor(props) {
        super(props)
        this.container = React.createRef();

    }
    componentDidMount() {

        const animation = lottie.loadAnimation({
            container: this.container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: animationData,
        });
        
        document.querySelector("svg").setAttribute("viewBox", "500 150 900 300");
        animation.play();
        animation.addEventListener("complete", () => {
            setTimeout(() => {
                animation.stop();
                animation.play();
            }, 10000);
        });
    }

    render() {
        return (

            <div className="logo" ref={this.container}></div>

        )
    }

}

export default LogoAnimated;

