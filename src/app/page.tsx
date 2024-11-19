// pages/_app.js
import PersonalStatement from './components/PersonalStatement/page';
import SkillsList from './components/SkillsList/page';
import LandingSection from './components/LandingSection/page';
import ContactForm from './components/Contact/page';

export default function MyApp() {
  return (
    <>
      <LandingSection/>
     <PersonalStatement/>
     <SkillsList/>
     <ContactForm/>
    
    </>
  );
}
