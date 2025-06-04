import ResumeImg from '../assets/resume.jpg';

export default function Resume () {

    const config = {
        link: 'https://github.com/PravinKumar1312/Resume/blob/main/Resume%20-%201.pdf'
    }

    return <section className='flex flex-col md:flex-row bg-color-7 px-5' id='resume'>

        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>

        <div className='md:w-1/2 flex justify-center py-5'>
            <div className='flex flex-col text-amber-700 justify-center'>
                <h1 className='text-4xl font-bold font-main-font'>Resume</h1>
                <p className='pb-5'>You can view my Resume <a href={config.link} className='btn' target='_blank'>Download</a></p>
            </div>
        </div>

    </section>
}