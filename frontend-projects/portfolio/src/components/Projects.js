import projectsImg1 from '../assets/image-slider.jpeg';
import projectsImg2 from '../assets/expense-tracker.png';
import projectsImg3 from '../assets/to-do-list.jpeg';

export default function Projects () {

    const config = {
        projects : [
            {
                image: projectsImg1,
                description: 'A Image-Slider website. Built with HTML, CSS & JS..!',
                link: 'https://github.com/PravinKumar1312/UM-Projetcs/tree/main/frontend-projects/portfolio/image-slider'
            },

            {
                image: projectsImg2,
                description: 'A Expence-Tracker website. Built with HTML, CSS & JS..!',
                link: 'https://github.com/PravinKumar1312/UM-Projetcs/tree/main/frontend-projects/portfolio/expense-tracker'
            },

            {
                image: projectsImg3,
                description: 'A To-Do-List website. Built with HTML, CSS & JS..!',
                link: 'https://github.com/PravinKumar1312/UM-Projetcs/tree/main/frontend-projects/portfolio/to-do-list-website'
            }
        ]
    }

    return <section className="flex flex-col py-20 px-5 justify-center bg-color-4 text-amber-700" id='projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl border-b-5 border-[#797979] mb-5 font-bold font-main-font'>Projects</h1>
                <p>Some basic projects.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                        
                        <div className='relative'>
                            <img className='h-[200px] w-[300px]' src={project.image} />
                            <div className='project-desc opacity-0 duration-500 hover:opacity-100'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                            
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                            </div>
                        </div>
                ))}
                

            </div>
        </div>
    </section>
}