import Image from "next/image"

export const TestimonialsSection = () => {
    return (
        <section className="flex-grow w-full grid md:grid-cols-4 md:grid-rows-2 gap-6 text-white">
            <div className="bg-moderate-violet bg-quote bg-no-repeat bg-quote-position
            rounded-xl w-full h-full md:col-span-2
            flex flex-col p-5 px-10 gap-y-6 shadow-lg">
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

            <div className="bg-very-dark-grayish-blue w-full h-full rounded-xl flex flex-col py-5 px-10 gap-y-6 shadow-lg">
                <div className="flex flex-row gap-x-4 items-center">
                    <Image src={'/image-jonathan.jpg'} width={40} height={40} alt="jonathan profile" className="rounded-full border-2 border-[#7e8797]" />
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

            <div className="bg-white w-full h-full md:row-span-2 rounded-xl flex flex-col py-5 px-10 gap-y-6 text-gray-600 shadow-lg">
                <div className="flex flex-row gap-x-4 items-center">
                    <Image src={'/image-kira.jpg'} width={40} height={40} alt="kira profile" className="rounded-full border-2 border-[#7e8797]" />
                    <div className="flex flex-col">
                        <h2>Kira Whittle</h2>
                        <h3 className="opacity-50">Verified graduate</h3>
                    </div>
                </div>
                <h1 className="text-3xl">Such a life-changing experience. Highly recommended!
                </h1>

                <p className="opacity-50">&quot;
                    Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn
                    programming step by step. I was encouraged to enroll by a former student of theirs who only say powerful things about the program.
                    The entire curriculum and staff did not dissapoint. They were very hands-on and I never had to wait long for assistance. The agile
                    team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In
                    fact, I've often referred to it during interviews as an example of my developer experience. It certainly helped me land a job as a
                    full-stack developer after receiving multiple offers. 100% recommend!
                    &quot;
                </p>
            </div>

            <div className="bg-white  w-full h-full rounded-xl flex flex-col py-5 px-8 gap-y-6 text-gray-600 shadow-lg">
                <div className="flex flex-row gap-x-4 items-center">
                    <Image src={'/image-jeanette.jpg'} width={40} height={40} alt="jeanette profile" className="rounded-full border-2 border-[#7e8797]" />
                    <div className="flex flex-col">
                        <h2>Jeanette Harmon</h2>
                        <h3 className="opacity-50">Verified graduate</h3>
                    </div>
                </div>

                <h1 className="text-3xl">An overall wonderful and rewarding experience
                </h1>

                <p className="opacity-50">&quot;
                    Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while
                    doing something I love.
                    &quot;
                </p>
            </div>

            <div className="bg-very-dark-blackish-blue flex flex-col w-full h-full md:col-span-2 rounded-xl py-5 px-8 gap-y-6 shadow-lg">
                <div className="flex flex-row gap-x-4 items-center">
                    <Image src={'/image-patrick.jpg'} width={40} height={40} alt="jeanette profile" className="rounded-full border-2 border-[#baa0e3]" />
                    <div className="flex flex-col">
                        <h2>Patrick Abrams</h2>
                        <h3 className="opacity-50">Verified graduate</h3>
                    </div>
                </div>

                <h1 className="text-3xl">Awesome teaching experience support from TAs who did the bootcamp themselves.
                    Getting guidance from them and learning from their experience was easy.
                </h1>

                <p className="opacity-50">&quot;
                    The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me enough confidence
                    necessary to be able to go out in the world and present myself as a capable junior developer, The standard is above the rest.
                    You will get the personal attention you need from an incredible community of smart and amazing people.  
                    &quot;
                </p>
            </div>
        </section>
    )
}
