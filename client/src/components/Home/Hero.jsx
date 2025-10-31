import MainBtn from '../MainBtn'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <main className=' mt-40 px-3.5 hero-bg'>
        <section className=' pb-16'>
            <div className='grid grid-cols-12 mt-10 pb-10 gap-x-3.5 gap-y-3.5 place-items-center'>
                <div className=' lg:col-span-6 col-span-12 w-full'>
                    <button className=' flex items-center bg-green-100 rounded-full border-[1.5px] border-solid border-green-200 pr-3.5 pl-1 cursor-pointer'>
                        <div className=' text-green-500 px-1.5 py-1.5 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-sparkles w-5 h-5"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                        </div>
                        <span className=' text-sm text-white'>
                            Optimisé par l'IA générative
                        </span>
                    </button>
                    <h1 className=' text-6xl font-extrabold text-gray-900 mt-10'>
                        Postulez <span className=' gradient-text'>10x plus vite</span> avec l'IA
                    </h1>
                    <br />
                    <p className=' max-w-lg w-full text-xl text-[#7588A3]'>Générez des lettres de motivation personnalisées et adaptez votre CV en quelques clics. L'IA s'occupe du reste.</p>
                    <br />
                    <div className=' flex items-center gap-x-2.5 text-[#7588A3] text-sm font-normal'>
                        <span className=' flex items-center gap-1.5'>
                            <div className=' text-green-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-clock w-4 h-4 text-accent" data-lov-id="src/components/HeroSection.tsx:41:16" data-lov-name="Clock" data-component-path="src/components/HeroSection.tsx" data-component-line="41" data-component-file="HeroSection.tsx" data-component-name="Clock" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20text-accent%22%7D"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                            95% de temps économisé
                        </span>
                        <span className=' flex items-center gap-1.5'>
                            <div className=' text-green-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-zap w-4 h-4 text-accent" data-lov-id="src/components/HeroSection.tsx:45:16" data-lov-name="Zap" data-component-path="src/components/HeroSection.tsx" data-component-line="45" data-component-file="HeroSection.tsx" data-component-name="Zap" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20text-accent%22%7D"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                            </div>
                            +40% de réponses positives
                        </span>
                    </div>
                    <br />
                    <div className=' grid grid-cols-12 place-items-stretch gap-x-3.5 mb-8 max-w-lg w-full'>
                        <MainBtn content={<div className=' flex items-center gap-x-2'>Commancer gratuitement <ArrowRight className=' w-5 h-5' /> </div>} />
                        <button className=' col-span-5 cursor-pointer w-full px-2.5 py-3 rounded-xl bg-white text-gray-950 flex items-center justify-center gap-x-1.5 hover:bg-[#26dba8] hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-play w-5 h-5 mr-2" data-lov-id="src/components/HeroSection.tsx:57:16" data-lov-name="Play" data-component-path="src/components/HeroSection.tsx" data-component-line="57" data-component-file="HeroSection.tsx" data-component-name="Play" data-component-content="%7B%22className%22%3A%22w-5%20h-5%20mr-2%22%7D"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>see the demo</button>
                    </div>
                    <p className=' text-sm text-[#7588A3] tracking-wider font-medium'>Déjà utilisé par plus de 10,000 candidats</p>
                    <ul className=' flex items-center gap-x-10 text-sm text-[#7588A3] tracking-wider py-3'>
                        <li>★★★★★ 4.9/5</li>
                        <li>Google Reviews</li>
                        <li>Trustpilot Excellent</li>
                    </ul>
                </div>
                <div className=" lg:col-span-6 col-span-12 w-full relative z-0">
                    <img className=' w-full h-full rounded-xl' src="/public/hero-ai-assistant.avif" alt="" loading='lazy' />
                    <div className=' absolute top-0 right-0 py-1.5 px-3.5 mt-4 mr-4 rounded-md bg-green-600 text-sm text-white'>
                        Lettre générée avec succés
                    </div>
                    <div className=' absolute mb-4 ml-4 bottom-0 left-0 flex flex-col gap-y-1.5 px-3.5 py-2.5 etiquette-bg text-[#7588A3] rounded-md'>
                        Temps de génération
                        <em className=' text-green-500 text-lg font-semibold'>12 s</em>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero