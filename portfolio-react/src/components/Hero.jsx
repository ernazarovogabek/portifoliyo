import { useState, useEffect } from 'react';

function Hero() {
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [descText, setDescText] = useState('');
  
  const fullName = "Ernazarov Og'abek";
  const titles = [
    'Frontend Developer',
    'React Developer',
    'UI/UX Enthusiast',
    'Web Designer'
  ];
  const descriptions = [
    'Zamonaviy va foydalanuvchilarga qulay veb-ilovalar yarataman',
    'React va TypeScript bilan professional ilovalar yasayman',
    'Figma dizaynlarini hayotga tatbiq etaman',
    'Responsive va interaktiv veb-saytlar quraman'
  ];

  useEffect(() => {
    let nameIndex = 0;
    let titleIndex = 0;
    let descIndex = 0;
    let currentTitleSet = 0;
    let isDeleting = false;

    const typeName = () => {
      if (nameIndex < fullName.length) {
        setNameText(fullName.substring(0, nameIndex + 1));
        nameIndex++;
        setTimeout(typeName, 100);
      } else {
        setTimeout(typeTitle, 500);
      }
    };

    const typeTitle = () => {
      const currentTitle = titles[currentTitleSet];
      if (titleIndex < currentTitle.length) {
        setTitleText(currentTitle.substring(0, titleIndex + 1));
        titleIndex++;
        setTimeout(typeTitle, 100);
      } else {
        setTimeout(typeDesc, 500);
      }
    };

    const typeDesc = () => {
      const currentDesc = descriptions[currentTitleSet];
      if (descIndex < currentDesc.length) {
        setDescText(currentDesc.substring(0, descIndex + 1));
        descIndex++;
        setTimeout(typeDesc, 50);
      } else {
        setTimeout(deleteAll, 2000);
      }
    };

    const deleteAll = () => {
      if (descText.length > 0) {
        setDescText(prev => prev.substring(0, prev.length - 1));
        setTimeout(deleteAll, 30);
      } else if (titleText.length > 0) {
        setTitleText(prev => prev.substring(0, prev.length - 1));
        setTimeout(deleteAll, 30);
      } else if (nameText.length > 0) {
        setNameText(prev => prev.substring(0, prev.length - 1));
        setTimeout(deleteAll, 30);
      } else {
        nameIndex = 0;
        titleIndex = 0;
        descIndex = 0;
        currentTitleSet = (currentTitleSet + 1) % titles.length;
        setTimeout(typeName, 500);
      }
    };

    setTimeout(typeName, 500);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Salom, men <span className="highlight typing-name">{nameText}</span></h1>
          <h2 className="typing-text">{titleText}</h2>
          <p className="typing-description">{descText}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Loyihalarim</a>
            <a href="#contact" className="btn btn-secondary">Bog'lanish</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
