import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1
                            ? "qualification__button qualification__active button__flex"
                            : "qualification__button button__flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                        <i class="ri-graduation-cap-line qualification__icon"></i> Education
                    </div>

                    <div className={
                        toggleState === 2
                            ? "qualification__button qualification__active button__flex"
                            : "qualification__button button__flex"
                    }
                    onClick={() => toggleTab(2)}>
                        <i class="ri-briefcase-line qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={
                        toggleState === 1
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BTECH | CSE</h3>
                                <span className="qualification__subtitle">
                                    Punjab Engineering College | Sector 12, Chandigarh, India
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-line"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line">

                                </span>
                            </div>

                            <div>
                                <h3 className="qualification__title">XII | CBSE</h3>
                                <span className="qualification__subtitle">
                                Govt Model Sr Sec School | Sector 35, Chandigarh, India
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-line"></i> 2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">X | CBSE</h3>
                                <span className="qualification__subtitle">
                                Ashiana Public School | Sector 46, Chandigarh, India
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-line"></i> 2018 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>                        
                    </div>

                    <div className={
                        toggleState === 2
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IB Member</h3>
                                <span className="qualification__subtitle">
                                    Implementatin Body member of PEC ACM CSS
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-line"></i> Jan-May 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line">

                                </span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Team Lead</h3>
                                <span className="qualification__subtitle">
                                    Ideathon 2.0 conducted by PEC ACM CSS
                                </span>
                                <div className="qualification__calendar">
                                    <i class="ri-calendar-line"></i> Nov-Dec 2022
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
