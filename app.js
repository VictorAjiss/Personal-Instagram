import Bio from './modules/bio.js'
import Gallery from './modules/gallery.js'
import Nav from './modules/nav.js'

const App = () =>{
    return`
    ${Nav()}
        <div class="container">
        ${Bio()}
        ${Gallery()}  
    </div> 
    `
}

document.getElementById('root').innerHTML = App(); 
