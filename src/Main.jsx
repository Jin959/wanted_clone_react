import "./css/mian.css";
import Section1 from './components/main/MainSection1';
import Section2 from './components/main/MainSection2';
import Section3 from './components/main/MainSection3';
import Section4 from './components/main/MainSection4';
import Section5 from './components/main/MainSection5';
import Section6 from './components/main/MainSection6';
import Section7 from './components/main/MainSection7';
import Section8 from './components/main/MainSection8';


const Main = () => {
  return (
    <main className="Main">
      <Section1/>
      <Section2/>
      <Section3/>      
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    </main>
  );
}

export default Main;
