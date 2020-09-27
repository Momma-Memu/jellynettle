import React from 'react';
import BaseNav from '../loginComponents/BaseNav';
import { NavLink } from 'react-router-dom'

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
        if(this.state.scrollTop >= 100){
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

        if(this.state.scrollTop >= 550){
            const divs = document.querySelectorAll('.divs-to-animate3')
            divs.forEach(element => {
                if(element.classList.contains('animate3')) return;
                element.classList.add('animate3')
                // element.classList.remove('divs-to-animate')
            });
        } else if (this.state.scrollTop <= 450){
            const divs = document.querySelectorAll('.animate3')
            divs.forEach(element => {
                element.classList.remove('animate3')
                element.classList.add('divs-to-animate3')
            });
        }

        if(this.state.scrollTop >= 850){
            const divs = document.querySelectorAll('.divs-to-animate4')
            divs.forEach(element => {
                if(element.classList.contains('animate4')) return;
                element.classList.add('animate4')
                // element.classList.remove('divs-to-animate')
            });
        } else if (this.state.scrollTop <= 750){
            const divs = document.querySelectorAll('.animate4')
            divs.forEach(element => {
                element.classList.remove('animate4')
                element.classList.add('divs-to-animate4')
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
                <div className ='bannerContainer'>
                    <div className='bannerBuffer'></div>
                    <h1 className='infoHeader4'>Our Mission</h1>
                </div>
                <p className='paragraphs'>JellyNettle aims to be a place for all gamers, of all backgrounds.
                 We want a place for gamers of color, gamers of all sexualities and genders, to share their love
                 of video games. </p>
                <p className='paragraphs'>Video games should be fun. We provide people a way to build safe and
                friendly communities, teams for competitive players, or just casual and informative groups.
                </p>
                <p className='paragraphs'>Find out how we work hard to make this platform safe.</p>
                <div className='safetyLinkBox'>
                    <NavLink exact to='/safety' className='safetyLink'>Safety</NavLink>
                </div>
                <h2 className='infoHeader2'>So, what all can I do here?</h2>
                <div className='divs-to-animate'>
                    <h2 className='infoHeader3'>Build Teams</h2>
                    <p className='paragraphs2'>With JellyNettle, you can build teams
                    with people who share an interest in the games you play!</p>
                </div>
                <div className='divs-to-animate2'>
                    <h2 className='infoHeader3'>Meet People</h2>
                    <p className='paragraphs2'>Join a community of gamers from
                    the casual to the serious competitive player.</p>
                </div>
                <div className='divs-to-animate3'>
                    <h2 className='infoHeader3'>Share Tips</h2>
                    <p className='paragraphs2'>Discuss your favorite games, share
                     tips and tricks. </p>
                </div>
                <div className='divs-to-animate4'>
                    <h2 className='infoHeader3'>Ready to sign up?</h2>
                    <div className='safetyLinkBox'>
                        <NavLink exact to='signup' className='safetyLink'>Sign up here.</NavLink>
                    </div>
                </div>
                <div className='buffer'></div>
            </div>
        )
    }
}

export default About;