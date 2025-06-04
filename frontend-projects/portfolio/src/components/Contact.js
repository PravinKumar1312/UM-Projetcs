export default function Contact () {
    
    const config ={
        email: 'mr.gladdenpravin@gmail.com',
        phone: '+91-9677605403'
    }

    return <section className='flex flex-col bg-color-6 px-5 py-32' id="contact">

        <div className='flex flex-col items-center text-black'>
                <h1 className='text-4xl font-bold font-main-font'>Contact</h1>
                <p className='pb-5'>Want to leave any comments or any suggestions contact me</p>
                <p className="py-2"><span className="font-bold">Email: </span>{config.email}</p>
                <p className="py-2"><span className="font-bold">Mobile: </span>{config.phone}</p>
        </div>

    </section>
}