import React from 'react'
import Main from '../components/Main/Main'
import './destination.scss'
import mars from './../assets/destination/image-mars.png'
import moon from './../assets/destination/image-moon.png'
import titan from './../assets/destination/image-titan.png'
import europa from './../assets/destination/image-europa.png'

function Destination({children}) {
    return (
        <div className='destination'>
            {children}
        <Main className='padding-destination'>

            <div className="destination__header ">
                <h5 className='destination__header-number'>01</h5>
                <h5>Pick your destination</h5>
            </div>

            <div className="destination__content ">
<img src={moon} alt="planet" className='destination__content__img j2' />
<div className="destination__content__tab">
    <div className="destination__content__tab-nav">
        <span className='destination__content__tab-nav__item'>
        <h5 className="tab-nav-item">moon</h5>
        </span>

        <span className='destination__content__tab-nav__item'>
        <h5 className="tab-nav-item">mars</h5>
        </span>

        <span className='destination__content__tab-nav__item'>
        <h5 className="tab-nav-item">europa</h5>
        </span>

        <span className='destination__content__tab-nav__item'>
        <h5 className="tab-nav-item">titan</h5>
        </span>
    </div>

    <h2 className="destination__content__tab__planet-name">Moon</h2>

    <p className="text-basic">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

    <hr />
        <div className="destination__content__tab__distance">
        <div className="destination__content__tab__distance_avg">
            <span className="destination__content__tab__distance_avg-header"></span>
            <span className="destination__content__tab__distance_avg-info"></span>
        </div>

        </div>

</div>
            </div>

        </Main>
        </div>
    )
}

export default Destination
