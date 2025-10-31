import HeadTitle from './HeadTitle'
import HomeCard from './HomeCard'
import StatsComponent from './StatsComponent'

const listOfFunctionalities = [
    {
        id:1,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-brain w-6 h-6 text-white" data-lov-id="src/components/FeaturesSection.tsx:83:18" data-lov-name="feature.icon" data-component-path="src/components/FeaturesSection.tsx" data-component-line="83" data-component-file="FeaturesSection.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>,
        title: "IA Intelligente",
        description: "Notre IA analyse l'offre d'emploi et adapte automatiquement votre lettre de motivation et CV.",
        options: ["Analyse sémantique avancée", "Personnalisation automatique", "Optimisation ATS"],
    },

    {
        id:2,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-file-text w-6 h-6 text-white" data-lov-id="src/components/FeaturesSection.tsx:83:18" data-lov-name="feature.icon" data-component-path="src/components/FeaturesSection.tsx" data-component-line="83" data-component-file="FeaturesSection.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>,
        title: "Lettres Personnalisées",
        description: "Générez des lettres de motivation uniques qui correspondent parfaitement à chaque offre.",
        options: ["Ton professionnel adaptatif", "Mots-clés optimisés", "Structure parfaite"],
    },

    {
        id:3,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-zap w-6 h-6 text-white" data-lov-id="src/components/FeaturesSection.tsx:83:18" data-lov-name="feature.icon" data-component-path="src/components/FeaturesSection.tsx" data-component-line="83" data-component-file="FeaturesSection.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>,
        title: "Génération Ultra-Rapide",
        description: "Obtenez vos documents en moins de 30 secondes, prêts à être envoyés.",
        options: ["Génération en 12s", "Export instantané", "Formats multiples"],
    },

    {
        id:4,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-download w-6 h-6 text-white" data-lov-id="src/components/FeaturesSection.tsx:83:18" data-lov-name="feature.icon" data-component-path="src/components/FeaturesSection.tsx" data-component-line="83" data-component-file="FeaturesSection.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>,
        title: "Export Professionnel",
        description: "Téléchargez vos lettres et CV aux formats PDF, DOCX avec une mise en page parfaite.",
        options: ["Formats standards", "Mise en page élégante", "Compatible ATS"],
    },

    {
        id:5,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-history w-6 h-6 text-white" data-lov-id="src/components/FeaturesSection.tsx:83:18" data-lov-name="feature.icon" data-component-path="src/components/FeaturesSection.tsx" data-component-line="83" data-component-file="FeaturesSection.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>,
        title: "Historique Complet",
        description: "Gardez une trace de toutes vos candidatures avec un système de gestion avancé.",
        options: ["Suivi des candidatures", "Statistiques détaillées", "Recherche avancée"],
    },

    {
        id:6,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-settings w-6 h-6 text-white" data-lov-id="src/components/FeaturesSection.tsx:83:18" data-lov-name="feature.icon" data-component-path="src/components/FeaturesSection.tsx" data-component-line="83" data-component-file="FeaturesSection.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
        title: "Personnalisation Avancée",
        description: "Ajustez le ton, le style et les détails selon vos préférences et le secteur visé.",
        options: ["Tons multiples", "Secteurs spécialisés", "Templates variés"],
    }
]

const Functionalities = () => {
  return (
    <div className='bg-gray-50 px-3.5 pt-20 mb-20' id='func'>
        <HeadTitle 
            headTitle={{
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-circle-check-big w-4 h-4" data-lov-id="src/components/FeaturesSection.tsx:60:12" data-lov-name="CheckCircle" data-component-path="src/components/FeaturesSection.tsx" data-component-line="60" data-component-file="FeaturesSection.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>,
                title: "Fonctionnalités Avancées",
                subtitle: "Tout ce dont vous avez besoin",
                spanElement:<span className='gradient-text'>réussir vos candidatures</span>,
                description: "Une suite complète d'outils IA pour optimiser chaque étape de votre recherche d'emploi"
            }}
        />
        <br />
        <section className=' grid grid-cols-12 place-items-stretch gap-6'>
            {
                listOfFunctionalities.map((functionality, index) => (
                    <HomeCard key={index} functionality={functionality} isProcess={false} />
                ))
            }
        </section>
        <StatsComponent />
    </div>
  )
}

export default Functionalities