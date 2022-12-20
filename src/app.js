import React from 'react';
import Navbar from './navbar.js'
import Footer from './footer.js'
import Info from './info.js'
import About from './about.js'
import Contact from './contact.js'
import Localization from './localization.js';
import DownArrow from './downarrow.js';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    render() {
        
        return (
            <div className="h-full w-full scroll-smooth">
                <Navbar></Navbar>
                <About></About>
                <DownArrow onClick={() => {

                    this.myRef.current.scrollIntoView({behavior: "smooth"})
                    }}>

                </DownArrow>
                <Info ref={this.myRef}></Info>
                <Contact></Contact>
                <Localization></Localization>
                <Footer></Footer>
            </div>
            
        );
    }



}

export default App;