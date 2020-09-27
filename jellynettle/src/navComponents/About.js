import React from 'react';
import BaseNav from '../loginComponents/BaseNav';
import { NavLink } from 'react-router-dom'
// import onScroll from '../scripts/scrollFun'

class About extends React.Component {
    constructor(){
        super()
        this.myRef = React.createRef()
        this.state = { scrollTop: 0 }
    }
    onScroll = () => {
        const scrollTop = this.myRef.current.scrollTop
        this.setState({
            scrollTop: scrollTop
        })
        if(this.state.scrollTop >= 120){
            const divs = document.querySelectorAll('.divs-to-animate')
            divs.forEach(element => {
                if(element.classList.contains('animate')) return;
                element.classList.add('animate')
                // element.classList.remove('divs-to-animate')
            });
        } else if (this.state.scrollTop <= 40){
            const divs = document.querySelectorAll('.animate')
            divs.forEach(element => {
                element.classList.remove('animate')
                element.classList.add('divs-to-animate')
            });
        }

        if(this.state.scrollTop >= 320){
            const divs = document.querySelectorAll('.divs-to-animate2')
            divs.forEach(element => {
                if(element.classList.contains('animate2')) return;
                element.classList.add('animate2')
                // element.classList.remove('divs-to-animate')
            });
        } else if (this.state.scrollTop <= 280){
            const divs = document.querySelectorAll('.animate2')
            divs.forEach(element => {
                element.classList.remove('animate2')
                element.classList.add('divs-to-animate2')
            });
        }
    }
    render(){
        // const { scrollTop } = this.state
        return (
            <div className='main-background'
            ref={this.myRef}
            onScroll={this.onScroll}>
                <BaseNav />
                <h1 className='infoHeader'>Our Mission</h1>
                <p className='paragraphs'>JellyNettle aims to be a place for all gamers, of all backgrounds.</p>
                <p className='paragraphs'>Video games should be fun. We provide people a way to build safe and
                friendly communities, teams for competitive players, or just casual and informative groups.
                </p>
                <p className='paragraphs'>Find out how we work hard to make this platform safe.</p>
                <div className='safetyLinkBox'>
                    <NavLink exact to='/safety' className='safetyLink'>Safety</NavLink>
                </div>
                <h2 className='infoHeader2'>So what all can I do here?</h2>
                <div className='divs-to-animate'>
                    <h2 className='infoHeader3'>Build Teams</h2>
                    <p className='paragraphs'>With JellyNettle, you can build teams
                    with people who share in interest in the games you play!</p>
                </div>
                <div className='divs-to-animate2'>
                    <h2 className='infoHeader3'>Meet People</h2>
                    <p className='paragraphs'>With JellyNettle, you can build teams
                    with people who share in interest in the games you play!</p>
                </div>
                <div className='buffer'></div>
            </div>
        )
    }
}

export default About;