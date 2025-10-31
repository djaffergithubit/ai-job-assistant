import HeadTitle from './HeadTitle'
import HomeCard from './HomeCard'

const ProcessPipeline = [
    {
        id:1,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-upload w-8 h-8 text-white" data-lov-id="src/components/HowItWorksSection.tsx:60:20" data-lov-name="step.icon" data-component-path="src/components/HowItWorksSection.tsx" data-component-line="60" data-component-file="HowItWorksSection.tsx" data-component-name="step.icon" data-component-content="%7B%22className%22%3A%22w-8%20h-8%20text-white%22%7D"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>,
        title: "Uploadez votre CV",
        description: "Glissez-déposez votre CV ou collez votre profil. Notre IA l'analyse automatiquement.",
        options: ["Formats PDF, DOC, TXT supportés", "Extraction automatique des données", "Aperçu instantané"],
    },

    {
        id:2,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-file-text w-8 h-8 text-white" data-lov-id="src/components/HowItWorksSection.tsx:60:20" data-lov-name="step.icon" data-component-path="src/components/HowItWorksSection.tsx" data-component-line="60" data-component-file="HowItWorksSection.tsx" data-component-name="step.icon" data-component-content="%7B%22className%22%3A%22w-8%20h-8%20text-white%22%7D"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>,
        title: "Collez l'offre d'emploi",
        description: "Copiez l'annonce qui vous intéresse. L'IA identifie les compétences et mots-clés importants.",
        options: ["Analyse sémantique avancée", "Détection des compétences", "Correspondance automatique"],
    },
    {
        id:3,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-download w-8 h-8 text-white" data-lov-id="src/components/HowItWorksSection.tsx:60:20" data-lov-name="step.icon" data-component-path="src/components/HowItWorksSection.tsx" data-component-line="60" data-component-file="HowItWorksSection.tsx" data-component-name="step.icon" data-component-content="%7B%22className%22%3A%22w-8%20h-8%20text-white%22%7D"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>,
        title: "Obtenez vos documents",
        description: "Récupérez votre lettre personnalisée et votre CV optimisé, prêts à envoyer.",
        options: ["Génération en 12 secondes", "Formats professionnels", "Personnalisation avancée"],
    } 
]

const ProcessComponent = () => {
  return (
    <div className='bg-gray-50 px-3.5 pt-20 mb-20' id='process'>
        <HeadTitle 
            headTitle={{
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-right w-4 h-4" data-lov-id="src/components/HowItWorksSection.tsx:36:12" data-lov-name="ArrowRight" data-component-path="src/components/HowItWorksSection.tsx" data-component-line="36" data-component-file="HowItWorksSection.tsx" data-component-name="ArrowRight" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>,
                title: 'Processus Simple',
                subtitle: 'Comment ça marche ?',
                description: "Trois étapes simples pour transformer votre recherche d'emploi",
            }}
        />
        <br />
        <section className=' grid grid-cols-12 place-items-stretch gap-6'>
            {
                ProcessPipeline.map((step, index) => (
                    <HomeCard key={index} functionality={step} isProcess={true} />
                ))
            }
        </section>
        <div className=' mt-10 lg:py-14 md:py-9 py-7 px-1.5 bg-button flex flex-col items-center sm:justify-center justify-evenly rounded-2xl w-full'>
            <h2 className=' mb-2 text-3xl font-bold text-white text-center'>Prêt à accélérer votre recherche d'emploi ?</h2>
            <p className=' text-lg text-teal-100 font-medium text-center'>Rejoignez les milliers de candidats qui ont déjà trouvé leur emploi de rêve</p>
            <br />
            <div className=' flex sm:flex-row flex-col items-center justify-center gap-y-2.5 gap-x-2.5 w-full'>
                <button className=' px-7 py-4 bg-white text-gray-900 text-base font-medium rounded-xl cursor-pointer hover:bg-green-100 sm:w-auto w-full'>Commencer maintenant</button>
                <button className=' px-7 py-4 bg-white text-white text-base font-medium rounded-xl cursor-pointer hover:bg-teal-500 sm:w-auto w-full'>Voir des exemples</button>
            </div>
        </div>
    </div>
  )
}

export default ProcessComponent