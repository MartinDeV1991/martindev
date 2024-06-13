import React, { useState } from 'react';
import './CV.css';
import '@fortawesome/fontawesome-free/css/all.css';

const CV = () => {
    const [experienceItems, setExperienceItems] = useState([
        { title: "Software Development Trainee", company: "Youngcapital Next", date: "2023 - 2024", description: ["Ontwikkelen van fullstack applicaties met focus op Java voor backend en React voor frontend."] },
        // { title: "Sabbatical", date: "2020 - 2022", description: ["Skileraar, reizen, studie psychologie, ontwikkelen software development skills."] },
        { title: "Skileraar", company: "Skischule Serfaus", date: "2019 - 2020", description: ["Skiles geven aan groepen van verschillende niveau's en leeftijden."] },
        { title: "Senior Data Science Consultant", company: "RiskQuest", date: "2017 - 2019", description: ["Rabobank: Ontwikkelen en testen van applicaties om risicocijfers te berekenen.", "Leaseplanbank: Validatie van credit risk modellen en testen van code zodat deze voldoen aan wet- en regelgeving", "Rabobank: Data verzamelen en verwerken voor credit risk modellen."] },
        { title: "Risk Manager", company: "De Nederlandsche Bank", date: "2014 - 2017", description: ["Ontwikkelen van applicaties voor de berekening van risicocijfers. ", "Kwartaalrapportages maken om inzicht te geven in het krediet- en marktrisico van de bank."] },
    ]);

    const educationItems = [
        // { degree: "Bachelor psychologie (parttime)", school: "Open Universiteit", date: "2020 - heden" },
        { degree: "Propedeuse Psychologie (deeltijd)", school: "Open Universiteit", date: "2021 - 2024" },
        { degree: "Master physics and science based business", school: "Universiteit Leiden", date: "2012 - 2014" },
        { degree: "Bachelor natuurkunde", school: "Universiteit Leiden", date: "2009 - 2012" },
        { degree: "Bachelor sterrenkunde", school: "Universiteit Leiden", date: "2009 - 2012" },
    ];

    const skillsItems = [
        { name: "Java", image: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
        { name: "Spring Boot", image: "https://img.icons8.com/color/48/000000/spring-logo.png" },
        { name: "HTML/CSS", image: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
        { name: "JavaScript", image: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
        { name: "React", image: "https://img.icons8.com/color/48/000000/react-native.png" },
        { name: "Node.js", image: "https://img.icons8.com/color/48/000000/nodejs.png" },
        { name: "Python", image: "https://img.icons8.com/color/48/000000/python--v1.png" },
        { name: "Flask", image: "https://img.icons8.com/color/48/000000/flask.png" },
        { name: "SQL", image: "https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png" },
        { name: "MongoDB", image: "https://img.icons8.com/color/48/000000/mongodb.png" },
        { name: "Git", image: "https://img.icons8.com/color/48/000000/git.png" },
        { name: "Azure", image: "https://img.icons8.com/color/48/000000/azure-1.png" }
    ];

    const languages = [
        { name: "Nederlands", proficiency: 5 },
        { name: "Engels", proficiency: 5 },
        { name: "Duits", proficiency: 3 },
        { name: "Spaans", proficiency: 2 },
        { name: "Frans", proficiency: 2 },
    ];

    const [certificates, setCertificates] = useState([
        { title: 'Java OCA', organisation: 'Oracle', description: 'Het Oracle Certified Associate, Java SE 8 Programmer certificaat bevat de basis van Java-programmering, zoals objectgeoriënteerd programmeren, datatypen en error handling.' },
        { title: 'Agile Scrum Foundation', organisation: 'Exin ', description: 'Het Agile Scrum Foundation certificaat behandelt de principes van agile werken en methodologie van scrum' },
        { title: 'FRM', organisation: 'GARP', description: 'Het GARP FRM® certificaat is de wereldwijd erkende standaard voor risk professionals. Het FRM-certificaat behandelt een breed scala aan onderwerpen binnen risicomanagement, waaronder marktrisico, kredietrisico, operationeel risico, liquiditeitsrisico, renterisico, en regelgevings- en ethische standaarden. Daarnaast omvat het ook kwantitatieve analysemethoden, financiële markten en producten, en risicobeheersystemen en -processen.' },
        { title: 'CFA level 1', organisation: 'CFA Institute', description: 'Het Chartered Financial Analyst (CFA) programma omvat een uitgebreid curriculum dat zich richt op financiële analyse, portefeuillebeheer, investeringsbeslissingen, en ethische en professionele standaarden. Het behandelt onderwerpen zoals kwantitatieve methoden, economie, financiële rapportage en analyse, corporate finance, vermogensbeheer, beleggingsinstrumenten en markten, en risicobeheer.' },
    ]);

    const toggleItem = (itemIndex, sectionKey) => {
        const allExpandedExperience = experienceItems.every(item => item.expanded);
        const allExpandedCerticates = certificates.every(item => item.expanded);

        switch (sectionKey) {
            case "experience":
                setExperienceItems(prevItems => {
                    return prevItems.map((item, i) => {
                        if (i === itemIndex) {
                            return { ...item, expanded: !item.expanded };
                        } else if (itemIndex === null) {
                            return { ...item, expanded: !allExpandedExperience }
                        }
                        return item;
                    });
                });
                break;

            case "certificates":
                setCertificates(prevItems => {
                    return prevItems.map((item, i) => {
                        if (i === itemIndex) {
                            return { ...item, expanded: !item.expanded };
                        } else if (itemIndex === null) {
                            return { ...item, expanded: !allExpandedCerticates }
                        }
                        return item;
                    });
                });
                break;
            default:
                break;
        }
    };

    let sectionOrder = [
        { name: 'skillsSection', order: 1 },
        { name: 'experienceSection', order: 2 },
        { name: 'educationSection', order: 3 },
        { name: 'languagesSection', order: 5 },
        { name: 'certificatesSection', order: 4 },
    ];

    return (
        <div className="cv-container">
            <div className={`cv-section ${sectionOrder.find(section => section.name === 'skillsSection').order % 2 === 0 ? 'right' : 'left'}`}
                style={{ order: sectionOrder.find(section => section.name === 'skillsSection').order }}>

                <h2 style={{ fontWeight: '900', fontSize: '32px' }}>Tech stack</h2>
                <div className="skills">
                    {skillsItems.map((item, itemIndex) => (
                        <div className="skill" key={itemIndex}>
                            <img src={item.image} alt={item.name} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                            <span style={{ fontWeight: '900', fontSize: '16px', verticalAlign: 'middle' }}>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`cv-section clickable ${sectionOrder.find(section => section.name === 'experienceSection').order % 2 === 0 ? 'right' : 'left'}`}
                style={{ order: sectionOrder.find(section => section.name === 'experienceSection').order }}>

                <h2 style={{ fontWeight: '900', fontSize: '32px', cursor: 'pointer' }} onClick={() => toggleItem(null, "experience")}>Ervaring
                    <i className="fa-solid fa-chevron-down" style={{ fontSize: '20px', marginLeft: '10px' }}></i>
                </h2>
                <ul>
                    {experienceItems.map((item, itemIndex) => (
                        <li className="clickable" key={itemIndex} onClick={() => toggleItem(itemIndex, "experience")}>
                            <span style={{ fontWeight: '900', fontSize: '22px' }}>{item.title}</span>
                            <br />
                            {item.company && <div>{item.company} | <em>{item.date}</em></div>}
                            {!item.company && <div><em>{item.date}</em></div>}
                            {item.expanded &&
                                <div>
                                    <div>
                                        <ul className="disc">
                                            {item.description.map((description, index) => (
                                                <li key={index} style={{ color: 'rgb(188, 183, 183, 0.7)' }}>{description}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`cv-section ${sectionOrder.find(section => section.name === 'educationSection').order % 2 === 0 ? 'right' : 'left'}`}
                style={{ order: sectionOrder.find(section => section.name === 'educationSection').order }}>

                <h2 style={{ fontWeight: '900', fontSize: '32px' }}>Opleidingen</h2>
                <ul>
                    {educationItems.map((item, itemIndex) => (
                        <li key={itemIndex} onClick={() => toggleItem(itemIndex, "education")}>
                            <span style={{ fontWeight: '900', fontSize: '22px' }}>{item.degree}</span>
                            <br />
                            <div>{item.school}<em> | {item.date}</em></div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`cv-section ${sectionOrder.find(section => section.name === 'languagesSection').order % 2 === 0 ? 'right' : 'left'}`}
                style={{ order: sectionOrder.find(section => section.name === 'languagesSection').order }}>

                <h2 style={{ fontWeight: '900', fontSize: '32px' }}>Talen</h2>
                <ul>
                    {languages.map((language, index) => (
                        <li key={index}>
                            <span>{language.name}: </span>
                            <div className="bullets-container">
                                {[...Array(language.proficiency)].map((_, i) => (
                                    <i key={i} className="fas fa-circle" style={{ color: 'rgb(200,200,200,1)' }}></i>
                                ))}
                                {[...Array(5 - language.proficiency)].map((_, i) => (
                                    <i key={i + language.proficiency} className="fas fa-circle" style={{ color: 'rgb(200,200,200,0.2)' }}></i>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`cv-section clickable ${sectionOrder.find(section => section.name === 'certificatesSection').order % 2 === 0 ? 'right' : 'left'}`}
                style={{ order: sectionOrder.find(section => section.name === 'certificatesSection').order }}>

                <h2 style={{ fontWeight: '900', fontSize: '32px', cursor: 'pointer' }} onClick={() => toggleItem(null, "certificates")}>Certificaten
                    <i className="fa-solid fa-chevron-down" style={{ fontSize: '20px', marginLeft: '5px' }}></i>
                </h2>

                <ul>
                    {certificates.map((item, itemIndex) => (
                        <li className="clickable" key={itemIndex} onClick={() => toggleItem(itemIndex, "certificates")}>
                            <span style={{ fontWeight: '900', fontSize: '22px' }}>{item.title}</span>
                            <br />
                            <div>{item.organisation}</div>
                            {item.expanded &&
                                <div style={{ marginLeft: '20px', marginTop: '10px', color: 'rgb(188, 183, 183, 0.7)' }}>{item.description}</div>
                            }
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default CV;

