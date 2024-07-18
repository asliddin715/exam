import React from 'react'

const Navbar = () => {
    return (
        <div className='cont'>
            <div className='container'>
                <div className='content-logo'>
                    <img src="/GG.png" alt="loading" />
                    <button className='btn'>
                        <img src="/tel.png" alt="laoding" />
                        +4904-049-950
                    </button>
                </div>

                <div className='content-option'>
                    <p>Get 50% Off on the Selected items </p>
                    <img src="/line.png" alt="loading" />
                    <p>Shop now</p>
                </div>

                <div className='content-btns'>
                    <button>
                        <img src="/bot.png" alt="loading" />
                        English
                        <img src="/aqsh.png" alt="loading" />
                    </button>
                    <button>
                        <img src="/planet.png" alt="loading" />
                        Location
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar