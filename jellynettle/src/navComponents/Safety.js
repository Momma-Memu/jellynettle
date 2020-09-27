import React from 'react';
import BaseNav from '../loginComponents/BaseNav';

const Safety = () => {

    return (
        <div>
            <BaseNav />
            <h1 className='infoHeader'>We take safety seriously</h1>
            <p className='paragraphs'>JellyNettle is designed around privacy and open-mindedness.</p>
            <p className='paragraphs'>That means with every account name, username, message, post, comment, reply, group name
            created, we run a check on those words to find hate speech.</p>
            <p className='paragraphs'>We aren't perfect, but we work hard to lessen the damage words can cause.
            Our AI does not pick up every instance of hate speech, we rely on you when that happens.
            By reporting anything that you believe violates our community standards, we can pick up the slack
            ourselves!</p>
            <h3 className='infoHeader'>Privacy</h3>
            <p className='paragraphs'>We encrypt all of your messages, your email address, password
             and promise to do our best to protect that sensitive information.
             It's important you also take the time to the time to carefully choose your password.
             Not sure what a good password is? Checkout the link below to learn more about
             strong passwords.</p>
            <div className='safetyLinkBox'>
                <a href='https://haveibeenpwned.com/' className='safetyLink'>haveibeenpwned.com</a>
            </div>
        </div>
    )
}

export default Safety;