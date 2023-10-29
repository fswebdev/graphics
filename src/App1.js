import React from 'react';
import './style.css';
import arkyd from './images/arkyd.jpg';
import artisticcommerce from './images/artistic commerce.jpg';
import bathroomcity from './images/bathroom city.jpg';
import chocolatebliss from './images/chocolate bliss.jpg';
import innovativetechsecond from './images/innovative tech-second.jpg';
import karouss from './images/karouss.jpg';
import websitedesignkarrathacom from './images/websitedesignkarratha.com.jpg';
import copper from './images/copper.jpg';
import doveproductions from './images/dove productions.jpg';
import supernova from './images/super nova.jpg';
import colorsplash from './images/color splash.jpg';
import light from './images/light.jpg';
import box from './images/box.jpg';
import imagingwork from './images/imaging work.jpg';
import imagingworkfourth from './images/imaging work - fourth.jpg';
import centgames from './images/centgames.com.jpg';


function App1() {

    return (
        <>
        <div align="center">
        <h1 className="h1">Graphics work portfolio</h1>
        <fieldset>
        <figure>
        <img src={arkyd} className="size" alt="arkyd.jpg"/>
        <figcaption>
        Arkyd telescope picture
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={artisticcommerce} className="size" alt="artisitic commerce.jpg"/>
        <figcaption>
        Artistic commerce logo
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={bathroomcity} className="size" alt="bathroom city.jpg"/>
        <figcaption>
        Bathroom city logo
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={chocolatebliss} className="size" alt="chocolate bliss.jpg"/>
        <figcaption>
        Chocolate bliss logo
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={innovativetechsecond} className="size" alt="innovative tech-second.jpg"/>
        <figcaption>
        Innovative tech logo
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={karouss} className="size" alt="karouss.jpg"/>
        <figcaption>
        Karouss logo
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={websitedesignkarrathacom} className="size" alt="websitedesignkarratha.com.jpg"/>
        <figcaption>
        Website design karratha logo
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={copper} className="size" alt="copper.jpg"/>
        <figcaption>
        Copper logo
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={doveproductions} className="size" alt="dove productions.jpg"/>
        <figcaption>
        Dove productions logo
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={supernova} className="size" alt="super nova.jpg"/>
        <figcaption>
        Super nova pattern
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={colorsplash} className="size" alt="color splash.jpg"/>
        <figcaption>
        Color splash pattern
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={light} className="size" alt="light.jpg"/>
        <figcaption>
        Light pattern
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={box} className="size" alt="box.jpg"/>
        <figcaption>
        Box pattern
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={imagingwork} className="size" alt="imaging work.jpg"/>
        <figcaption>
        Imaging work
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={centgames} className="size" alt="1centgames.com.jpg"/>
        <figcaption>
        1centgames.com logo
        </figcaption>
        </figure>
        </fieldset>
        <br />
        <fieldset>
        <figure>
        <img src={imagingworkfourth} className="size" alt="imaging work - fourth.jpg"/>
        <figcaption>
        Imaging work - second
        </figcaption>
        </figure>
        </fieldset>
        </div>
        </>
        );
}

export default App1;
