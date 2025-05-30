import mainImg from '../assets/main.png';
import { AiOutlineInstagram, AiOutlineX, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'I\'m an App Developer',
        social: {
            x: 'https://x.com/Gladden1312',
            insta: 'https://www.instagram.com/mr_gladden/',
            facebook: 'https://www.facebook.com/profile.php?id=100027055761740',
            github: 'https://github.com/PravinKumar1312/',
            linkedin: 'https://www.linkedin.com/in/pravin-kumar-gs-50b348261/'
        }
    }
    
    return <section className='flex flex-col md:flex-row px-5 py-12 bg-color-2 justify-center'>
        {/* Need to make the py as 32 for the default */}

        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-amber-700 text-6xl font-main-font'>Hi, <br />I'm <span className='text-black'>Gladden</span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>

            <div className='flex py-10 '>
                <a href={config.social.insta} className='pr-5 hover:text-emerald-400' target='_blank'><AiOutlineInstagram size={30} /></a>
                <a href={config.social.x} className='pr-5 hover:text-emerald-400' target='_blank'><AiOutlineX size={30} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-emerald-400' target='_blank'><AiOutlineFacebook size={30} /></a>
                <a href={config.social.linkedin} className='pr-5 hover:text-emerald-400' target='_blank'><AiOutlineLinkedin size={30} /></a>
                <a href={config.social.github} className='hover:text-emerald-400' target='_blank'><AiOutlineGithub size={30}/></a>
            </div>
        </div>
        <img src={mainImg} className='md:w-1/3'></img>
    </section>
}