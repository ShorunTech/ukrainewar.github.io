import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
     <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                       <div className='colz'>
                           <div className='colz-icon'>
                                <a href='#'>
                                    <i className='fa fa-facebook-square'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-google-plus-square'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-instagram'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-youtube-square'></i>
                                </a>
                                <a href='#'>
                                    <i className='fa fa-twitter'></i>
                                </a>
                           </div>
                      </div>
           

                <div className='profile-details-name'>
                    <span className='primary-text'>
                    Hello🙋 , I'M 
                        {" "}
                       <span className='highlight-text'>ShorunTech</span>
                    </span>
                </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical 
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    "Self Taught⛹",
                                    1000,
                                    "Full Stack Developer💻",
                                    1000,
                                    "MERN stack Dev🚀",
                                    1000,
                                    "Cross Platform🌎",
                                    1000,
                                    "React/React Native Dev📱",
                                    1000,
                                ]}
                                />
                                
                            </h1>
                            <span className='profile-role-tagline'>
                                Building application with front and back end operations.
                            </span>
                        </span>
                        
                    </div>
                    <div className='profile-options'>
                          
                            <button className='btn primary-btn'>
                               
                                {" "}
                                SUPPORT   {" "}
                            </button>
                            <a href='ehizcv.pdf' download='Ehiedu ehizcv.pdf'>
                                <button className='btn highlighted-btn'>
                                    {" "}
                                    UKRAINE {" "}
                                </button>
                            </a>
                         
                    </div>
              </div>
               <div className='profile-picture'>
                   <div className='profile-picture-background'></div>
               </div>


          </div>
       </div>
    )
}
