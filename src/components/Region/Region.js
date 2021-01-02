import React from 'react';
import ReactDOM from 'react-dom';
import SimpleSlider from '../Slider/Slider';


class Region extends React.Component {
    
    
    click(e) {
        let id = e.target.id;
        let sliderContent = document.querySelector(".slider__content");
        if(sliderContent){
            sliderContent.style.opacity = "1";
        }

        return (
            ReactDOM.render(
                <SimpleSlider id={id}/>,
                document.getElementById('slider')
            )
        )
    }
    render() {
        return (
            <g onClick={this.click} className="region" >
                <path d={this.props.d} id={this.props.id} />
            </g>
        )
    }
}


export default Region;
