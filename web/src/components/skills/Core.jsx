import React from 'react'
import mern from '../../assets/mern.png'
import flutter from '../../assets/flutter.png'
import git from '../../assets/git.png'
import python from '../../assets/python.png'

const Core = () => {
    return (
        <div className='skills__core container grid'>
            <div className='skills__core__box grid'>                
                <img src={mern} alt="" className='skills__img'/>                
                <div>
                    <h1 className='skills__name'>MERN</h1>
                    <span className='skills__core__subtitle'>Well-versed in MERN stack development</span>
                </div>
            </div>

            <div className='skills__core__box grid'>                
                <img src={flutter} alt="" className='skills__img'/>                
                <div>
                    <h1 className='skills__name'>Flutter</h1>
                    <span className='skills__core__subtitle'>Familiar with Flutter app development</span>
                </div>
            </div>

            <div className='skills__core__box grid'>             
                <img src={git} alt="" className='skills__img'/>                
                <div>
                    <h1 className='skills__name'>Git</h1>
                    <span className='skills__core__subtitle'>Proficient in Git version control</span>
                </div>
            </div>

            <div className='skills__core__box grid'>             
                <img src={python} alt="" className='skills__img'/>                
                <div>
                    <h1 className='skills__name'>Python</h1>
                    <span className='skills__core__subtitle'>Familiar with Python programming</span>
                </div>
            </div>
        </div>
    )
}

export default Core
