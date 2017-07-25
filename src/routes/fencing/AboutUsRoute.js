import React, { Component } from 'react';
import Slider from 'react-slick';
import FencingPicture1 from '../../images/fencing/fencing-action1.jpg';
import FencingPicture2 from '../../images/fencing/fencing-action2.jpg';
import '../../global.css';

class AboutUsRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasPointerEvents: false,
            slidesToShow: 2,
            carouselWidth: '50%'
        };
    }

    handleMapMouseDown = (event) => {
        this.setState({ hasPointerEvents: true });
    }

    handleMapMouseLeave = (event) => {
        this.setState({ hasPointerEvents: false });
    }

    updateCarousel = () => {
        if (window.innerWidth < 1000) {
            this.setState({carouselWidth: '80%', slidesToShow: 2});
        } else {
            this.setState({carouselWidth: '100%', slidesToShow: 2});
        }
    }

    componentDidMount() {
        this.updateCarousel();
        window.addEventListener("resize", this.updateCarousel);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateCarousel);
    }

    render() {
        var settings = {
            dots: true,
            speed: 750,
            infinite: true,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000,
            focusOnSelect: true,
            pauseOnHover: true,
            arrows: true,
            accessibility: true,
            swipeToSlide: true,
            centerPadding: '20px'
        };
        return (
            <div style={{textAlign: 'center'}}>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <div style={{margin: 'auto', width: '75%'}}>
                    <h1>General Information</h1>
                    <div>
                        Fencing is the Olympic Sport and modern-day form of swordsmanship. While it may seem like a single dimension sport, fencing is actually
                        comprised of 3 different weapons: foil, epee, and saber. Points are awarded to the fencers who are able to outmaneuver, attack, and ultimately
                        touch their opponents.

                        Often referred to as "physical Chess", fencing requires not only athletic finesse, but also intellectual acumen. To achieve success in
                        you must be able to master strategy, focus, and forethought. It truly is both a sport for the body and mind. Because fencing has such a
                        large intellectual component, Asians have consistently excelled at the sport. In the 2012 Olympics, Asian countries won medals in 8 of the 10
                        fencing events, including China winnning the Gold medal in Men's foil fencing.

                        There are many benefits to being a fencer. Not only can it sharpen one's mind, it can also provide a unique competitive edge to a
                        student's college application. All Ivy League colleges actively recruit fencers. As stated on the Columbia University website, "the college
                        applicant, who is also a fencer, becomes an athletic 'recruit'. A recruit certainly has many advantages over the non-fencer.
                        Being a fencer is a distinct advantage for the college applicant."
                    </div>
                    <br/>
                    <div style={{margin: 'auto', width: this.state.carouselWidth}}>
                        <Slider className="shadow" {...settings}>
                            <div><img className="slider-image shadow" src={FencingPicture1} alt={true}/></div>
                            <div><img className="slider-image shadow" src={FencingPicture2} alt={true}/></div>
                        </Slider>
                    </div>
                    <br/>
                </div>
                <div style={{marginBottom: '50px'}}>
                    <h1>Location</h1>
                    <div style={{
                        position: 'relative',
                        paddingBottom: '30%',
                        height: '0',
                        overflow: 'hidden'
                    }} onMouseDown={this.handleMapMouseDown} onMouseLeave={this.handleMapMouseLeave}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1924.3734731008076!2d-84.493488321495
                            08!3d34.01139995658294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5133c5f550225%3A0xc39eee62
                            91bdf73d!2sEC+Sports!5e0!3m2!1sen!2sus!4v1500768570114" className="shadow"
                            frameBorder="0"
                            style={{
                                position: 'absolute',
                                left: '25%',
                                width: '50%',
                                height: '100%',
                                pointerEvents: this.state.hasPointerEvents ? 'auto' : 'none'
                            }}
                            allowFullScreen
                        />
                    </div>
                </div>
          </div>
        );
    }
}

export default AboutUsRoute;