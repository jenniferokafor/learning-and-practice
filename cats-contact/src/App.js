import React from "react"
import Contact from "./contact"
import './index.css'
import mrwhis from './images/mr-whiskerson.png'
import fluffy from './images/fluffykins.png'
import felixo from './images/felix.png'
import pumpko from './images/pumpkin.png'

function App() {
    return (
        <div className="contacts">
            <Contact 
                img = {mrwhis}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img= {fluffy}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img= {felixo}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img= {pumpko}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App