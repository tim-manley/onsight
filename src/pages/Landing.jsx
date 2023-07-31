import { React, useState } from 'react';
import {ReactComponent as NotesSVG} from '../assets/NotesArtwork-07.svg'
import {ReactComponent as LogoSVG} from '../assets/officialLogo-06 1.svg'
import {ReactComponent as ArrowSVG} from '../assets/OnsightArrowGraphic-08 1.svg'
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { Navigate } from 'react-router-dom';
import UserSetupForm from '../components/UserSetupForm';

function LandingPage(props) {

    // Switch state
    const [landingState, setLandingState] = useState('login');

    const { user, newUser } = props;

    if (user && newUser && landingState !== 'setup') {
        setLandingState('setup')
    }

    return (
        <div id="landingPage" className='h-screen grid grid-cols-6' style={{width: '200%', height: '100vh', overflow: 'hidden'}}>
            <div className='h-screen col-span-2 px-12 py-24 flex flex-col justify-center'>
                <div>
                    <LogoSVG />
                </div>
                <div className='mt-10'>
                    <p className='text-black/60 text-xl font-adelle font-normal'>
                    Onsight is a novel learning platform that offers an <b className='font-bold text-primary'>immersive</b>,
                    <b className='font-bold text-primary'> personalized</b> sight reading experience for musicians of all levels. 
                    <br /><br />
                    Onsight’s lessons are tailored to <b className='font-bold text-primary'>your unique preferences</b> and skill level,
                    enabling you to progress at your own pace while enjoying the process. <br />
                    <b className='font-bold text-primary'> No two lessons in Onsight are the same, because no two learners are.</b>
                    </p>
                </div>
                <div className='mt-8 flex flex-row items-center'>
                    <a href="#login" className='flex flex-row items-center'>
                        <p className='text-primary font-primary font-normal text-6xl'>
                            Let's get started
                        </p> 
                        <ArrowSVG className='h-12 w-12 ml-4 inline fill-primary'/>
                    </a>
                </div>
            </div>
            <div className='h-screen col-span-2 grid grid-cols-1 items-center justify-center overflow-hidden'>
                <NotesSVG style={{width: '100%'}}/>
            </div>
            <div className='h-screen col-span-2 flex flex-col justify-center px-11 py-11' id="login">
                <div>
                    <LogoSVG style={{width: '649px', height: '194px'}} />
                </div>
                {landingState === 'sign up' && 
                    <div>
                        <SignUpForm />
                        <div className='mt-10'>
                            <p className='font-primary font-normal text-3xl text-stone-400'>already have an account? <button className='text-primary' onClick={() => setLandingState('login')}>log in.</button></p>
                        </div>
                    </div>
                }
                {landingState === 'login' &&
                    <div>
                        <LoginForm />
                        <div className='mt-10'>
                            <p className='font-primary font-normal text-3xl text-stone-400'>new here? <button className='text-primary' onClick={() => setLandingState('sign up')}>sign up, it's free.</button></p>
                        </div>
                        <div>
                            <a className='font-primary font-normal text-xl text-stone-400' href='#forgot'>forgot password</a>
                        </div>
                    </div>
                }
                {landingState === 'setup' &&
                    <UserSetupForm user={user} />
                }
            </div>
        </div>
        
    );
};

export default LandingPage;