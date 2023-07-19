import React, { useState } from 'react'

const WorkItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(false)

    const toggleTab = () => {
        setToggleState(!toggleState)
    }

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className='work__img' />
            <h3 className="work__title">{item.title}</h3>
            <span className="work__button" onClick={toggleTab}>
                View More <i className="ri-arrow-right-line work__button-icon"></i>
            </span>

            {toggleState && (
                <div className="work__modal">
                    <div className="work__modal-content">
                        <i className="ri-close-line work__modal-close" onClick={toggleTab}></i>

                        <img src={item.image} alt="" className='work__modal-img' />
                        <h3 className="work__modal-title">{item.title}</h3>
                        <p className="work__modal-description">{item.description}</p>

                        <div className='work__modal-tech-container'>

                        <span className='work__modal-tech-title'>Technologies: </span>
                        
                            {
                                item.technologies.map((tech) => {
                                    return <span className='work__modal-tech'>{tech}</span>
                                })
                            }
                        </div>


                        <div>
                        <a href={item.demo} className='work__modal-tech-button button__flex' target="_blank" rel="noopener noreferrer">
                            Demo
                        </a>
                        </div>


                    </div>
                </div>
            )}
        </div>
    )
}

export default WorkItems
