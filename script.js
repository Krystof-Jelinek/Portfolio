
// Select all portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
let activeItem = null;  // To keep track of the currently active (expanded) project

// Loop through each item and add a click event listener
portfolioItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // If we click on the already active item, we close it
        if (activeItem === item) {
            item.classList.remove('open');
            activeItem = null;
            return;
        }

        // Close the currently expanded item if any
        if (activeItem) {
            activeItem.classList.remove('open');
        }

        // Expand the clicked item and set it as the active item
        item.classList.add('open');
        activeItem = item;

        // Prevent propagation to prevent closing the clicked item immediately
        e.stopPropagation();
    });
});

// Close the expanded item when clicking anywhere outside
window.addEventListener('click', () => {
    if (activeItem) {
        activeItem.classList.remove('open');
        activeItem = null;
    }
});

const translations = {
    en: {
        about: "About Me",
        portfolio: "Portfolio",
        cv: "CV",
        contact: "Contact",
        welcome: "Welcome to My Portfolio",
        moto: "I’m Kryštof Jelínek, a student of software engineering passionate about creating innovative solutions.",
        connectbutton: "Let’s Connect",
        aboutText: "My name is Kryštof Jelínek, and I am currently a third-year student at the Faculty of Information Technology, Czech Technical University in Prague, pursuing a degree in Software Engineering. My portfolio primarily includes projects developed in Java, C++, Kotlin, and Scala, along with database and conceptual modeling work. These projects are an integral part of my academic curriculum and reflect my personal interests. I am set to graduate from CTU in 2026 and am actively seeking job opportunities that offer hands-on experience in software engineering, as well as support with my bachelor’s thesis. I am always excited to take on new challenges that allow me to grow and expand my skills (not only) in software development.",
        
        asciiShort: "A modular Scala application that converts different image formats into ASCII art, featuring customizable filters and clean command line interface. Designed with a strong focus on expandability and object-oriented principles for maintainable, extensible architecture.",
        asciiLong1: "As a part of my studies I developed a modular, highly scalable Scala application designed with an emphasis on clean architecture and extensibility. The system's design leverages object-oriented principles to create a flexible and maintainable codebase that easily accommodates future modifications and new features.",
        asciiLong2: "The smooth flow of the application is largely driven by its modular structure, which enables seamless integration of different image formats and conversion methods without disrupting the overall system. The design facilitates the easy addition of new filters and features, ensuring the app can evolve alongside user needs.",
        asciiLong3: "A robust and flexible command-handling system was integrated to decouple logic from user interaction, enhancing both maintainability and user experience. The application’s architecture prioritizes reusability and simplicity, ensuring that every component is independent and reusable in other projects or use cases.",
        asciiLong4: "This design-centric approach ensures the system remains easy to scale, modify, and maintain, laying a solid foundation for long-term use while promoting efficient development practices.",
        asciiLong5: "Here’s an example of the app in action. You can clone the repository and explore the full functionality for yourself.",
        asciiLong6: "Check out the project on GitHub:",

        akrmatShort: "Team-developed application for generating accreditation materials at the Faculty of Information Technology, designed to simplify the accreditation process by leveraging data from external application APIs and using LaTeX for efficient PDF document generation.",
        akrmatLong1: "Akrmat is a team project developed at the Faculty of Information Technology. The application’s goal is to streamline the process of generating accreditation materials, such as study plans and programs, using LaTeX to produce professional PDF documents for academic purposes.",
        akrmatLong2: "My main contribution was the development of a standalone microservice that compiles LaTeX code into PDFs. This service integrates with the Akrmat system, receiving LaTeX code via an API, processing it, and returning the generated PDF. I was also responsible for modifyng, expanding, debugging and troubleshooting the LaTeX generation, ensuring that the documents met the required standards.",
        akrmatLong3: "LaTeX was completely new to me, and working with it presented a valuable challenge. The LaTeX code in Akrmat is generated dynamically, taking inputs from various sources within the system to generate accurate accreditation documents. By separating PDF generation into a standalone service, we ensured a clean, modular architecture that allows for easy maintenance and expansion.",
        akrmatLong4: "This project was a great opportunity to work with external APIs and gain experience in LaTeX-based document generation, while also improving my teamwork and problem-solving skills.",
        akrmatLong5: "Please note that this project is a private, internal application used at the Faculty of Information Technology, and as such, I am unable to provide the source code or full details. However, if you are interested in learning more about this specific project, feel free to contact me, and I will be happy to provide further information.",

        carShort: "A Spring Boot Java application with REST API, ORM, and Azure database integration. Built during the 3rd semester, featuring full CRUD operations and custom frontend implementation. Designed with a 3-layer architecture, ensuring a clear separation of concerns.",
        carLong1: "This project is a robust, three-layer Java application built using Spring Boot, designed to handle car rental operations with integration to an Azure database. The application implements a clean, modular architecture with a clear separation of concerns, adhering to the principles of maintainability and scalability.",
        carLong2: "The backend is powered by Spring Boot, utilizing REST APIs to enable communication with the frontend. The application is fully connected to an Azure database, with complex SQL queries executed through Spring Data JPA annotations. Integrity constraints are enforced to ensure the consistency of the database, contributing to the overall reliability of the application.",
        carLong3: "The frontend, developed as a separate application, communicates with the backend via RESTful services, providing users with a dynamic and responsive interface. Both frontend and backend are designed to work together, offering a smooth user experience.",
        carLong4: "The application also leverages Gradle as the build automation tool, ensuring a streamlined development process. A fully configured Dockerfiles are included for both backend and frontend, making it easy to deploy and run the application in any environment.For testing, the project incorporates Mockito to mock dependencies and ensure the reliability of individual components.",
        carLong5: "Additionally, the project utilizes Swagger UI for automatic API documentation generation, providing developers with an up-to-date, interactive interface for testing and understanding the API endpoints.",
        carLong6: "Check out the project on GitHub:",

        excelShort: "This project implements an engine for a spreadsheet processor that simulates the behavior of a table (e.g., in Excel or Google Sheets) using an object-oriented approach in C++. The key element of the solution is the use of inheritance and polymorphism.",
        excelLong1: "This project implements a powerful engine for a spreadsheet processor that simulates the behavior of a table similar to tools like Excel or Google Sheets. Built using C++, the application focuses on accurately processing cells, formulas, and detecting cyclic dependencies between them. It is designed with an object-oriented approach, utilizing inheritance and polymorphism to model a variety of cell types and operations that can be performed on them.The core functionality revolves around:",
        excelLong2: "Cell Handling: Each cell in the spreadsheet can contain different types of data, including static values (such as numbers or text) or dynamic content (formulas that reference other cells).",
        excelLong3: "Formula Evaluation: The processor can parse and compute formulas using a sophisticated Abstract Syntax Tree (AST) stored in each cell. This allows for more efficient and accurate evaluations of formula results.",
        excelLong4: "Cyclic Dependency Detection: One of the key features of the engine is its ability to detect and manage cyclic dependencies between cells. This ensures that the processor does not enter an infinite loop when a formula relies on the value of a cell that in turn depends on the original cell.",
        excelLong5: "External Parser Integration: The engine integrates an external parser for formula input, ensuring a smooth and flexible way of reading and processing user-defined formulas.",
        excelLong6: "Unfortunately, I am unable to provide a public link to the project, as it is part of my academic work. This restriction is in place to prevent any potential misuse or plagiarism, ensuring the integrity of the project and its originality. However, if you are interested, feel free to contact me, and I can provide access to the project upon request.",

        sqlShort: "Collection of assignments focusing on PLSQL and PgPLSQL, covering packages, procedures, triggers, recursion, and execution plan optimization. Main emphasis is on PostgreSQL, but the collection also includes sections that explore Oracle-specific implementations.",
        sqlLong1: "This collection of assignments delves into advanced SQL concepts and practices, focusing on PLSQL and PgPLSQL. It encompasses a range of topics, including the creation and management of triggers, the use of I/O packages for data processing, execution plan optimization, and the implementation of SQL recursion for complex data queries.",
        sqlLong2: "While the primary emphasis is on PostgreSQL, the assignments also include sections exploring Oracle-specific features, providing a well-rounded perspective on database programming. Each task is designed to enhance practical skills and a deep understanding of advanced SQL functionalities.",
        sqlLong3: "If you'd like to explore the full set of assignments, including detailed implementations and examples, feel free to visit my GitHub repository. There, you’ll find all the materials and source code.",

        komShort: "Project modeling the auto repair service domain using OntoUML, UML, BPMN, and OCD diagrams. OntoUML captures core entities and the relationships between them, while BPMN maps concrete processes. The OCD showcases the system's workflow.",
        komLong1: "This project is centered around modeling the car repair service domain using various modeling languages, including OntoUML, UML, BPMN, and DEMO. The main goal was to design a comprehensive model of the domain, starting with the creation of an OntoUML diagram that identifies the core entities involved in the auto repair service and defines the relationships between them. The OntoUML model captures both the conceptual and structural aspects of the domain, providing a solid foundation for further analysis.",
        komLong2: "integrity constraints were defined using OCL (Object Constraint Language) to ensure the model’s consistency and correctness. The system automatically checked for potential antipatterns within the OntoUML model.",
        komLong3: "In addition to modeling the overall workflow, individual transactions were also modeled within the system using DEMO (Design & Engineering Methodology for Organizations). DEMO was used to capture the specific actions and interactions that occur in the system’s transactional processes, ensuring that these processes align with the defined business rules and organizational structure.",
        komLong4: "Finally, an OCD (Organization Conceptual Diagram) was created to represent the structure of the organization itself, outlining the roles, responsibilities, and relationships between different organizational entities. This diagram provided a clear and comprehensive view of the organizational hierarchy.",
        komLong5: "If you're interested in exploring the full details of the project, including all diagrams and models, feel free to check out the complete work.",

        cvText: "For a more detailed overview of my qualifications, skills, and experience, please view or download my CV using the links below:",
        cvView: "View",
        cvDownload: "Download",
        contactMe: "Contact Me",
        contactMeSentence: "Feel free to get in touch with me using any of these channels",

        intro: "Feel free to get in touch with me using any of these channels",
        email: "Email",
        phone: "Phone",
        linkedinSentence: "Visit my profile",
        thankYou: "Thank you for reviewing my profile. I look forward to hearing from you and will be happy to respond as soon as possible!"
    },
    cz: {
        about: "O mně",
        portfolio: "Portfolio",
        cv: "Životopis",
        contact: "Kontakt",
        welcome: "Vítejte v mém portfoliu",
        moto: "Jmenuji se Kryštof Jelínek, studuji softwarové inženýrství a zajímám se o tvorbu inovativních řešení.",
        connectbutton: "Kontaktujte mě",
        aboutText: "Jmenuji se Kryštof Jelínek a v současnosti jsem ve třetím ročníku studia na Fakultě informačních technologií Českého vysokého učení technického v Praze, kde studuji obor softwarové inženýrství. Moje portfolio obsahuje primárně projekty v jazycích Java, C++, Kotlin a Scala, dále také projekty související s databázemi a konceptuálním modelováním. Tyto projekty jsou nedílnou součástí mého akademického studia a současně odrážejí mé osobní zájmy. Plánuji absolvovat v roce 2026 a v současnosti hledám pracovní příležitosti, které mi nabídnou praktické zkušenosti v oblasti softwarového inženýrství, stejně jako podporu při vypracování bakalářské práce. Vždy se těším na nové výzvy, které mi umožní růst a rozvíjet mé dovednosti (nejen) v oblasti vývoje softwaru.",
        
        asciiShort: "Modulární aplikace v jazyce Scala která převádí různé formáty obrázků do ASCII artu, nabízí přizpůsobitelné filtry a uživatelské rozhraní v příkazovém řádku. Byla navržena s důrazem na rozšiřitelnost a objektově orientované principy pro udržitelnost a rozšiřitelnst.",
        asciiLong1: "V rámci svých studií jsem vytvořil modulární, vysoce škálovatelnou aplikaci v jazyce Scala, navrženou s důrazem na architekturu a rozšiřitelnost. Design systému využívá objektově orientované principy k vytvoření flexibilního a udržitelného kódu, který snadno umožňuje budoucí změny a přidávání nových funkcí.",
        asciiLong2: "Plynulý chod aplikace je do značné míry zajištěn její strukturou, která umožňuje bezproblémovou integraci různých formátů obrázků a metod konverze, aniž by došlo k narušení celkového systému. Design usnadňuje jednoduché přidávání nových filtrů a funkcí, což zajišťuje, že aplikace může růst a vyvíjet se podle potřeb uživatelů.",
        asciiLong3: "Byl implementován robustní a flexibilní systém pro zpracování příkazů, který odděluje logiku aplikace od interakce s uživatelem, čímž zlepšuje údržbu i uživatelskou zkušenost. Architektura aplikace upřednostňuje znovupoužitelnost a jednoduchost, což zajišťuje, že každý komponent je nezávislý a znovu použitelný v jiných projektech nebo scénářích.",
        asciiLong4: "Tento přístup zajišťuje, že systém zůstává snadno škálovatelný, modifikovatelný a udržovatelný, čímž vytváří pevný základ pro dlouhodobé použití a podporuje efektivní vývojové praktiky.",
        asciiLong5: "Zde je ukázka aplikace v akci. Můžete si stáhnout repozitář a aplikaci si sami vyzkoušet.",
        asciiLong6: "Odkaz na GitHub projektu:",

        akrmatShort: "Aplikace vyvíjená v týmu, sloužící pro generování akreditačních materiálů na Fakultě informačních technologií. Zjednodušuje akreditační proces díky integraci dat z externích API a využívá LaTeX pro efektivní tvorbu PDF dokumentů.",
        akrmatLong1: "Akrmat je týmový projekt vyvíjený na Fakultě informačních technologií. Cílem aplikace je zjednodušit proces generování akreditačních materiálů, jako jsou studijní plány a programy, přičemž LaTeX je využíván k vytváření profesionálních PDF dokumentů pro akademické účely.",
        akrmatLong2: "Můj hlavní příspěvek spočíval ve tvorbě samostatné mikroservisy, která kompiluje LaTeX kód do PDF. Tato služba je integrována do systému Akrmat, přijímá LaTeX kód prostřednictvím API, zpracovává ho a vrací vygenerovaný PDF. Také jsem měl na starosti úpravy, rozšiřování, ladění a řešení problémů s generováním LaTeX dokumentů, aby bylo zajištěno, že splňují požadované standardy.",
        akrmatLong3: "LaTeX byl pro mě do té doby zcela nový, a práce s ním mi dala cennou zkušenost. LaTeX v Akrmat je generován dynamicky, přičemž využívá vstupy z různých částí systému k vytváření akreditačních dokumentů. Oddělením generování PDF do samostatné služby jsme zajistili čistou, modulární architekturu, která umožňuje snadnou údržbu a rozšíření.",
        akrmatLong4: "Tento projekt mi nabídl skvělou příležitost pracovat s externími API a možnost získat zkušenosti s generováním dokumentů na bázi LaTeXu, zároveň jsem si tím vylepšil dovednosti v rámci práce v týmu a řešení problémů.",
        akrmatLong5: "Musím bohužel připomenout že, tento projekt je interní aplikace používaná na Fakultě informačních technologií, a proto nemohu poskytnout zdrojový kód ani konkrétní implementaci. Pokud máte zájem o více informací o tomto konkrétním projektu, neváhejte mě kontaktovat a rád vám poskytnu další informace.",

        carShort: "Spring Boot Java aplikace s REST API, integrací ORM a databáze Azure. Vytvořeno během 3. semestru, obsahující kompletní CRUD operace a vlastní implementaci front-endu. Využívá třístupňovou architekturu, která zajišťuje jasné oddělení zodpovědností.",
        carLong1: "Tento projekt je robustní, třívrstvá Java aplikace postavená na frameworku Spring Boot, navržená pro správu operací s půjčováním aut, s integrací do databáze Azure. Aplikace využívá modulární architekturu s jasným oddělením jednotlivých vrstev, což zajišťuje udržitelnost a škálovatelnost.",
        carLong2: "Backend je postaven na Spring Bootu, využívající REST API pro komunikaci s frontendem. Aplikace je plně propojena s databází Azure, přičemž složité SQL dotazy jsou vykonávány pomocí anotací Spring Data JPA. Integritní omezení jsou uplatněna k zajištění konzistence databáze, což přispívá k celkové spolehlivosti aplikace.",
        carLong3: "Frontend, vyvinutý jako samostatná aplikace, komunikuje s backendem prostřednictvím RESTful služeb, což uživatelům poskytuje dynamické a responzivní rozhraní. Jak frontend, tak backend jsou navrženy tak, aby spolupracovaly a nabízely hladkou uživatelskou zkušenost.",
        carLong4: "Aplikace také využívá Gradle jako nástroj pro automatizaci buildů, což zajišťuje efektivní vývojový proces. Plně nakonfigurovaný Dockerfile pro backend i frontend jsou součástí projektu, což usnadňuje nasazení a spuštění aplikace v jakémkoli prostředí. Pro testování projekt používá Mockito pro simulování závislostí a zajištění spolehlivosti jednotlivých komponent.",
        carLong5: "Dále projekt využívá Swagger UI pro automatickou generaci dokumentace API, což poskytuje vývojářům aktuální, interaktivní rozhraní pro testování a porozumění API endpointům.",
        carLong6: "Podívejte se na projekt na GitHubu:",

        excelShort: "Tento projekt implementuje engine pro tabulkový procesor, který simuluje chování tabulky (např. v Excelu nebo Google Sheets) pomocí objektově orientovaného přístupu v C++. Klíčovým prvkem řešení je použití dědičnosti a polymorfismu.",
        excelLong1: "Tento projekt implementuje výkonný tabulková engine, který simuluje chování tabulky podobně jako nástroje jako Excel nebo Google Sheets. Aplikace je postavena v C++ a zaměřuje se na přesné zpracování buněk, vzorců a detekci cyklických závislostí mezi nimi. Je navržena s objektově orientovaným přístupem, využívající dědičnost a polymorfismus k modelování různých typů buněk a operací, které je možné na nich provádět. Hlavní funkcionalita se zaměřuje na:",
        excelLong2: "Manipulace s buňkami: Každá buňka v tabulce může obsahovat různé typy dat, včetně statických hodnot (například čísla nebo text) nebo dynamického obsahu (vzorců, které odkazují na jiné buňky).",
        excelLong3: "Vyhodnocování vzorců: Procesor dokáže analyzovat a počítat vzorce pomocí sofistikovaného abstraktního syntaktického stromu (AST), který je uložen v každé buňce. To umožňuje efektivnější a přesnější vyhodnocení výsledků vzorců.",
        excelLong4: "Detekce cyklických závislostí: Jednou z klíčových funkcí tohoto enginu je schopnost detekovat a spravovat cyklické závislosti mezi buňkami. To zajišťuje, že procesor nevstoupí do nekonečné smyčky, když vzorec závisí na hodnotě buňky, která zase závisí na původní buňce.",
        excelLong5: "Integrace externího parseru: Engine využívá externí parser pro zadávání vzorců, čímž zajišťuje plynulý a flexibilní způsob čtení a zpracování uživatelsky definovaných vzorců.",
        excelLong6: "Bohužel nemohu poskytnout veřejný odkaz na tento projekt, protože je součástí mé akademické práce. Toto omezení je zavedeno, aby se předešlo případnému zneužití nebo plagiátorství, což zajišťuje integritu projektu a jeho originalitu. Pokud máte zájem, neváhejte mě kontaktovat a mohu vám projekt zpřístupnit na požádání.",

        sqlShort: "Sada úkolů zaměřených na PLSQL a PgPLSQL, pokrývající balíčky, procedury, triggery, rekurzi a optimalizaci vykonávacího plánu. Hlavní důraz je kladen na PostgreSQL, ale kolekce také zahrnuje sekce specifické pro Oracle.",
        sqlLong1: "Tato kolekce úkolů se zaměřuje na pokročilé SQL koncepty a praktiky, s důrazem na PLSQL a PgPLSQL. Pokrývá širokou škálu témat, včetně vytváření a správy triggerů, použití I/O balíčků pro zpracování dat, optimalizace vykonávacího plánu a implementace SQL rekurze pro složité datové dotazy.",
        sqlLong2: "Hlavní důraz je kladen na PostgreSQL, ale úkoly také obsahují sekce zkoumající funkce specifické pro Oracle, čímž poskytují ucelený pohled na databázové programování. Každý úkol je navržen tak, aby zlepšil praktické dovednosti a porozumění pokročilým SQL funkcionalitám.",
        sqlLong3: "Pokud byste se chtěli podívat na celý soubor úkolů, včetně konkrétních implementací a příkladů, navštívit můj GitHub repository. Tam najdete všechny materiály včetně zdrojových kódů.",

        komShort: "Projekt modelující doménu autoservisních služeb pomocí OntoUML, UML, BPMN a OCD diagramů. OntoUML zachycuje klíčové entity a vztahy mezi nimi, BPMN mapuje konkrétní procesy. OCD zobrazuje celkovou strukturu systému.",
        komLong1: "Tento projekt se zaměřuje na modelování domény autoservisu pomocí různých modelovacích jazyků, včetně OntoUML, UML, BPMN a DEMO. Hlavním cílem bylo navrhnout komplexní model této domény, počínaje vytvořením OntoUML diagramu, který identifikuje klíčové entity zapojené do autoservisních služeb a definuje vztahy mezi nimi. OntoUML model zachycuje jak koncepční, tak strukturální aspekty domény a poskytuje pevný základ pro další analýzu.",
        komLong2: "Integritní omezení byla definována pomocí OCL (Object Constraint Language), aby byla zajištěna konzistence a správnost modelu. Systém automaticky zkontroloval potenciální antipatterny v rámci OntoUML modelu.",
        komLong3: "Kromě modelování celkového pracovního postupu byly jednotlivé transakce také modelovány v rámci systému pomocí DEMO (Design & Engineering Methodology for Organizations). DEMO bylo použito k zachycení specifických akcí a interakcí, které se vyskytují v transakčních procesech systému, čímž se zajistilo, že tyto procesy jsou v souladu s definovanými obchodními pravidly a organizační strukturou.",
        komLong4: "Nakonec byl vytvořen OCD (Organizační koncepční diagram), který reprezentuje strukturu samotné organizace, vymezuje role, odpovědnosti a vztahy mezi různými organizačními entitami. Tento diagram poskytl jasný a komplexní pohled na organizační hierarchii.",
        komLong5: "Pokud máte zájem o prozkoumání kompletních detailů projektu, včetně všech diagramů a modelů, neváhejte se podívat na celou práci.",

        cvText: "Pro podrobnější přehled mých kvalifikací, dovedností a zkušeností si prosím prohlédněte nebo stáhněte můj životopis pomocí následujících odkazů:",
        cvView: "Zobrazit",
        cvDownload: "Stáhnout",
        contactMe: "Kontaktujte mě",
        contactMeSentence: "Neváhejte se se mnou spojit prostřednictvím některého z těchto kanálů",


        email: "E-mail",
        phone: "Telefon",
        linkedinSentence: "Navštivte můj profil",
        thankYou: "Děkuji, že jste si prohlédli můj profil. Těším se na vaši odpověď a ozvu se zpět co nejdříve!"
    }
};

// Obecná funkce pro překlad celé stránky
function switchLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Event listeners for the flag buttons
document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
document.getElementById("lang-cz").addEventListener("click", () => switchLanguage("cz"));

// Set default language on page load
window.addEventListener("DOMContentLoaded", () => switchLanguage("en"));