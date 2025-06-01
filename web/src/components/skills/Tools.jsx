import React from 'react'

const Tools = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Technologies</h3>

            <div className='skills__box'>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="ri-sparkling-fill"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="ri-sparkling-fill"></i>
                        <div>
                            <h3 className="skills__name">Inkscape</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="ri-sparkling-fill"></i>
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
                
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="ri-sparkling-fill"></i>
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="ri-sparkling-fill"></i>
                        <div>
                            <h3 className="skills__name">Postman</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="ri-sparkling-fill"></i>
                        <div>
                            <h3 className="skills__name">Linux</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    )
}

export default Tools
