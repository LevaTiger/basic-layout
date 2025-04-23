import './homepage.css'

const Homepage=()=>{

    return(
        <div className="container">
            <div className="home-layout">
                <h2 className='primary-gradient'>Főcím</h2>
                <figure>
                    <img width={'100%'} src="https://picsum.photos/700/300" alt="hero-img" />
                    <small>Hero Image helye</small>
                </figure>

                <h2 className="primary-gradient">Második rész</h2>

            {/* itt kezdődhet valami tartalom... */}
                <article>
                    <p>
                        Ezt az oldalt azért hoztam létre, hogy ne kerüljek trébe.
                        
                    </p>
                    <p>
                        Az eredeti oka valójában az, hogy folyamatosan létre kell hoznom react-routerrel a komponens fát, amivel az időmet vesztegetem a valós feladat készítése helyett. Így amikor egy új projektet vállalok, mindig van egy alap-om, amiből ki tudok indulni React-el.
                    </p>
                </article>

                <h2 className="primary-gradient">Harmadik rész</h2>
            </div>
        </div>
    )
}

export default Homepage;