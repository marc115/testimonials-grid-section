import Image from "next/image"

export const TestimonialsSection = () => {
    return (
        <section className="flex-grow w-full grid md:grid-cols-4 md:grid-rows-2 gap-6 text-white">
            <div className="bg-moderate-violet bg-quote bg-no-repeat bg-quote-position
            rounded-xl w-full h-full md:col-span-2
            flex flex-col p-5 px-8 gap-y-3">
                <div className="flex flex-row gap-x-4 items-center">
                    <Image src={'/image-daniel.jpg'} width={40} height={40} alt="daniel profile" className="rounded-full border-2 border-[#baa0e3]" />
                    <div className="flex flex-col">
                        <h2>Daniel Clifford</h2>
                        <h3 className="opacity-50">Verified graduate</h3>
                    </div>
                </div>

                <h1 className="text-3xl">I received a job offer mid-course, and the subjects I learned were current, if not more so, in
                    the company I joined. I honestly feel I got every penny's worth</h1>

                <p className="opacity-50">&quot;I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition
                    and have heard some people who had an amazing experience here. I signed up for the free intro course and fount it incredibly fun!
                    I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course,
                    I've successfully switched careers, working as a Software Engineer at a VR startup.&quot;
                </p>
            </div>

            <div className="bg-very-dark-grayish-blue w-full h-full rounded-xl flex flex-col py-5 px-8 gap-y-3">
                <div className="flex flex-row gap-x-4 items-center">
                    <Image src={'/image-jonathan.jpg'} width={40} height={40} alt="daniel profile" className="rounded-full border-2 border-[#7e8797]" />
                    <div className="flex flex-col">
                        <h2>Jonathan Walters</h2>
                        <h3 className="opacity-50">Verified graduate</h3>
                    </div>
                </div>
                <h1 className="text-3xl">The team was very supportive and kept me motivated
                </h1>

                <p className="opacity-50">&quot;I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big
                    company. This was one of the best investments I've made for myself.&quot;
                </p>
            </div>
            <div className="bg-red-500 w-full h-full md:row-span-2">

            </div>

            <div className="bg-red-500 w-full h-full">

            </div>
            <div className="bg-red-500 w-full h-full md:col-span-2">

            </div>
        </section>
    )
}
