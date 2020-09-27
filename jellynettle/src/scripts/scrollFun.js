const onScroll = () => {
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

export default onScroll;