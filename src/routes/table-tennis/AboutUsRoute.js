import React, { Component } from 'react';
import Slider from 'react-slick';
import ClubPicture1 from '../../images/table-tennis/club1.jpg';
import ClubPicture2 from '../../images/table-tennis/club2.jpg';
import BuildingPicture from '../../images/table-tennis/ecsports.jpg';
import GroupPicture1 from '../../images/table-tennis/group1.jpg';
import GroupPicture2 from '../../images/table-tennis/group2.jpg';
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
        this.setState({hasPointerEvents: true});
    }

    handleMapMouseLeave = (event) => {
        this.setState({hasPointerEvents: false});
    }

    updateCarousel = () => {
        if (this.props.screenWidth < 1000) {
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
            <div style={{textAlign: 'center', paddingBottom: '50px'}}>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <div style={{margin: 'auto', width: '75%'}}>
                    <h1>General Information</h1>
                    <div>
                        We offer table tennis coaching services, open play, and league play for all ages and skill levels.
                        Our organized league is every Saturday at 3 PM. We also sell equipment and clothing, and we can
                        arrange smaller or specialized events such as private parties or small tournaments. Typically, we
                        do not host USATT sanctioned events.
                    </div>
                    <br/>
                    <div style={{margin: 'auto', width: this.state.carouselWidth}}>
                        <Slider className="shadow" {...settings}>
                            <div><img className="slider-image shadow" src={ClubPicture1} alt={true}/></div>
                            <div><img className="slider-image shadow" src={ClubPicture2} alt={true}/></div>
                            <div><img className="slider-image shadow" src={BuildingPicture} alt={true}/></div>
                            {/*<div><img className="slider-image shadow" src={GroupPicture1} alt={true}/></div>*/}
                            <div><img className="slider-image shadow" src={GroupPicture2} alt={true}/></div>
                        </Slider>
                    </div>
                    <br/>
                </div>
                <div>
                    <h1>Location</h1>
                    <div style={{
                        paddingBottom: '20px',
                    }} onMouseDown={this.handleMapMouseDown} onMouseLeave={this.handleMapMouseLeave}>
                        {this.props.isMobileScreen ?
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1924.3734731008076!2d-84.493488321495
                                08!3d34.01139995658294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5133c5f550225%3A0xc39eee62
                                91bdf73d!2sEC+Sports!5e0!3m2!1sen!2sus!4v1500768570114"
                                className="shadow"
                                frameBorder="0"
                                width={0.6 * this.props.screenWidth}
                                height={0.7 * this.props.screenWidth}
                                style={{
                                    pointerEvents: this.state.hasPointerEvents ? 'auto' : 'none'
                                }}
                                allowFullScreen
                            />
                            : <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1924.3734731008076!2d-84.493488321495
                                08!3d34.01139995658294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5133c5f550225%3A0xc39eee62
                                91bdf73d!2sEC+Sports!5e0!3m2!1sen!2sus!4v1500768570114"
                                className="shadow"
                                frameBorder="0"
                                width={0.6 * this.props.screenWidth}
                                height={0.5 * this.props.screenHeight}
                                style={{
                                    pointerEvents: this.state.hasPointerEvents ? 'auto' : 'none'
                                }}
                                allowFullScreen
                            />
                        }
                    </div>
                </div>
          </div>
        );
    }
}

export default AboutUsRoute;