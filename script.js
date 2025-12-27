
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
        aboutText: "My name is Kryštof Jelínek, and I am currently a third-year student at the Faculty of Information Technology, Czech Technical University in Prague, pursuing a degree in Software Engineering. My portfolio primarily includes projects developed in Java, C++, Kotlin, and Python, along with database and conceptual modeling work. These projects are an integral part of my academic curriculum and reflect my personal interests. I am set to graduate from CTU in 2026 and am actively seeking job opportunities that offer hands-on experience in software engineering, as well as support with my bachelor’s thesis. I am always excited to take on new challenges that allow me to grow and expand my skills (not only) in software development.",
        
        asciiShort: "A modular Scala application that converts different image formats into ASCII art, featuring customizable filters and clean command line interface. Designed with a strong focus on expandability and object-oriented principles for maintainable, extensible code.",
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

        cfShort: "This project implements a movie recommendation system using collaborative filtering algorithms. The system is built with Python and Flask on the backend and features a dynamic user interface developed in React.",
        cfLong1: "This project implements a collaborative filtering–based recommendation system for suggesting movies to users based on their rating behavior. It uses Python for backend logic, React for the frontend interface, and SQLite for data persistence. The system is designed to work with real-world data and simulate personalized recommendation workflows.",
        cfLong2: "Similarity Functions: The engine supports multiple similarity metrics including cosine similarity, Pearson correlation, and Spearman rank correlation, allowing for flexible user similarity evaluations.",
        cfLong3: "Personalized Recommendations: Based on a selected similarity metric, the system identifies similar users, predicts ratings for unseen movies, and returns top recommendations.",
        cfLong4: "REST API: A Flask-based API enables dynamic recalculation of recommendations using parameters such as similarity function, neighbor count, number of suggested movies, or weighting factor (kappa). Results are returned in JSON format.",
        cfLong5: "Frontend & Testing: The frontend interface, built with React and powered via npm, allows real-time interaction and testing. The project also includes a test suite to validate functionality under various configurations.",
        cfLong6: "The full source code is available on GitHub:",


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

        aiShort: "A collection of classical AI problem solvers implemented in C++. Projects include search-based labyrinth solving with visualization, solving N-Queens and Sudoku puzzles using constraint-based reasoning and heuristics, and a PDDL-based planner moving agents.",
        aiLong1: "This set of projects demonstrates foundational artificial intelligence techniques through a series of classic problem-solving tasks. Each problem was solved using appropriate AI algorithms, including both uninformed and informed search, constraint satisfaction, and automated planning approaches.",
        aiLong2: "The Labyrinth Solver uses algorithms like BFS, DFS, Random Search, Greedy Search, and A* to find paths through mazes. A visualizer component animates the search step by step, allowing for direct comparison of algorithm behavior and efficiency.",
        aiExample: "Example:",
        aiLong3: "The N-Queens Solver explores backtracking and heuristics to place N queens on a chessboard such that no two threaten each other. Visual outputs clearly display successful placements and solution progress.",
        aiLong4: "The Sudoku Solver uses a combination of backtracking and constraint propagation with MRV heuristics to efficiently solve even highly complex puzzles with minimal initial clues. It supports domain filtering to reduce search space and includes a terminal-based output. If no puzzle is provided, the solver automatically fetches a random Sudoku puzzle from a public API.",
        aiLong5: "The PDDL Planning project solves the Multi-Agent Path Finding (MAPF) problem on an undirected graph. Agents must reach their goals without collisions, and the task is encoded in PDDL. An external planner computes valid, often optimal, solutions.",
        aiLong6: "The projects demonstrate fundamental approaches to problem-solving using artificial intelligence and showcase their practical application across various types of tasks.",

        osProjectsShort: "Assignments focusing on core OS concepts such as multithreading synchronization and file system design. Main emphasis on implementations of classical problems like producer-consumer, and the creation of a custom file system inspired by the FAT architecture.",
        osProjectsLong1: "This collection covers advanced operating systems topics through hands-on projects in C++. The first project tackled multithreading synchronization, implementing a classical producer-consumer problem. The solution required careful management of threads and synchronization primitives to ensure safe and efficient data exchange, demonstrating solid understanding of concurrency control.",
        osProjectsLong2: "The second project involved designing and implementing a simplified custom file system modeled similarly to the FAT architecture. This task required creating a working interface for file management, including allocation tables and file metadata handling, showcasing practical skills in low-level systems programming and file system internals.",
        osProjectsLong3: "Working on these projects helped me develop stronger problem-solving skills and a deeper understanding of essential OS concepts. Through practical application of C++ coding techniques, I gained valuable experience that I hope will be useful in future system-level development.",
        osProjectsLong4: "For more details and to explore the source code, you can visit my GitHub repository.",


        komShort: "Project modeling the car repair service domain using OntoUML, UML, BPMN, and OCD diagrams. OntoUML captures core entities and the relationships between them, while BPMN maps concrete processes. The OCD showcases the system's workflow.",
        komLong1: "This project is centered around modeling the car repair service domain using various modeling languages, including OntoUML, UML, BPMN, and DEMO. The main goal was to design a comprehensive model of the domain, starting with the creation of an OntoUML diagram that identifies the core entities involved in the auto repair service and defines the relationships between them. The OntoUML model captures both the conceptual and structural aspects of the domain, providing a solid foundation for further analysis.",
        komLong2: "integrity constraints were defined using OCL (Object Constraint Language) to ensure the model’s consistency and correctness. The system automatically checked for potential antipatterns within the OntoUML model.",
        komLong3: "In addition to modeling the overall workflow, individual transactions were also modeled within the system using DEMO (Design & Engineering Methodology for Organizations). DEMO was used to capture the specific actions and interactions that occur in the system’s transactional processes, ensuring that these processes align with the defined business rules and organizational structure.",
        komLong4: "Finally, an OCD (Organization Conceptual Diagram) was created to represent the structure of the organization itself, outlining the roles, responsibilities, and relationships between different organizational entities. This diagram provided a clear and comprehensive view of the organizational hierarchy.",
        komLong5: "If you're interested in exploring the full details of the project, including all diagrams and models, feel free to check out the complete work.",
        viewProjectLink: "View the project",

        tetrisShort: "A high-performance Python implementation of Tetris featuring LAN multiplayer and a modular ability system. The project focuses on clean architecture, asynchronous networking, and software quality standards.",
        tetrisLong1: "This project is an advanced Tetris application developed using Python and the Pyglet library for high-performance graphics rendering and input handling. The primary goal was to go beyond basic gameplay by creating a robust, extensible engine built on Object-Oriented Programming (OOP) principles, ensuring a strict separation between game logic, networking, and the user interface.",
        tetrisLong2: "The standout feature is the LAN multiplayer mode, allowing players to compete in real-time via socket communication. To enhance gameplay depth, I implemented a 'Modular Ability System.' This architecture allows for the seamless integration of unique player abilities and offensive modifiers (attacks) without altering the core engine, utilizing design patterns to maintain scalability.",
        tetrisExampleText: "Above is a preview of the game in action, showcasing the multiplayer interface and the active ability system. The clean UI is rendered efficiently using Pyglet's batch drawing capabilities.",
        tetrisLong3: "Code quality and stability were central to the development process. The project incorporates a comprehensive suite of unit tests using the Pytest framework, covering critical components like line-clearance logic and network packet synchronization. To ensure maintainability and professional standards, the entire codebase adheres to a strict codestyle enforced by Pylint.",
        tetrisLong4: "The system's modularity ensures that components such as the network handler, game state manager, and UI renderer are decoupled. This structure not only facilitates easier debugging but also allows for future expansions, such as new game modes or alternative rendering backends.",
        tetrisLong5: "If you want to try out the gameplay you can download the prepared exe file for windows here:",
        Download: "Download",
        tetrisLong6: "If you're interested in exploring the technical architecture, the implementation of the ability system, or the networking protocols or you just want to play the game, feel free to check out the full source code and documentation.",

        workShort: "Professional automation platform developed for Atos, featuring advanced web scraping, real-time data synchronization, and a robust data persistence layer.",
        workLong1: "During this professional engagement at Atos, I was responsible for the complete architectural overhaul of a web automation system. This included a large-scale refactoring of the codebase from a functional approach to a strict Object-Oriented Programming (OOP) model, significantly improving maintainability and scalability.",
        workLong2: "The technical core utilizes Python with Playwright for high-performance web scraping and data extraction. To ensure reliable data persistence, I implemented an automated management system using Alembic for database migrations and custom scripts for periodic database cleaning, ensuring the system remains optimized by removing legacy data.",
        workLong3: "On the frontend, I developed and refactored components in React, integrating WebSockets to provide users with dynamic, real-time data updates without page refreshes. I also managed and updated REST APIs to ensure seamless communication between the scraping engine and the user interface.",
        workLong4: "Beyond development, I contributed to the UI/UX design, creating an intuitive interface for monitoring automated tasks. My role involved ensuring data persistence across the entire lifecycle of the scraping process and maintaining the overall stability of the production environment.",
        workNDA: "Due to a Non-Disclosure Agreement (NDA), I cannot provide further technical documentation or source code for this project.",

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
        aboutText: "Jmenuji se Kryštof Jelínek a v současnosti jsem ve třetím ročníku studia na Fakultě informačních technologií Českého vysokého učení technického v Praze, kde studuji obor softwarové inženýrství. Moje portfolio obsahuje primárně projekty v jazycích Java, C++, Kotlin a Python, dále také projekty související s databázemi a konceptuálním modelováním. Tyto projekty jsou nedílnou součástí mého akademického studia a současně odrážejí mé osobní zájmy. Plánuji absolvovat v roce 2026 a v současnosti hledám pracovní příležitosti, které mi nabídnou praktické zkušenosti v oblasti softwarového inženýrství, stejně jako podporu při vypracování bakalářské práce. Vždy se těším na nové výzvy, které mi umožní růst a rozvíjet mé dovednosti (nejen) v oblasti vývoje softwaru.",
        
        asciiShort: "Modulární aplikace v jazyce Scala která převádí různé formáty obrázků do ASCII artu, nabízí přizpůsobitelné filtry a uživatelské rozhraní v příkazovém řádku. Byla navržena s důrazem na objektově orientované principy pro udržovatelnost a rozšiřitelnost.",
        asciiLong1: "V rámci svých studií jsem vytvořil modulární, vysoce škálovatelnou aplikaci v jazyce Scala, navrženou s důrazem na architekturu a rozšiřitelnost. Design systému využívá objektově orientované principy k vytvoření flexibilního a udržitelného kódu, který snadno umožňuje budoucí změny a přidávání nových funkcí.",
        asciiLong2: "Plynulý chod aplikace je do značné míry zajištěn její strukturou, která umožňuje bezproblémovou integraci různých formátů obrázků a metod konverze, aniž by došlo k narušení celkového běhu aplikace. Design usnadňuje jednoduché přidávání nových filtrů a funkcí, což zajišťuje, že aplikace může růst a vyvíjet se podle potřeb uživatelů.",
        asciiLong3: "Byl implementován robustní a flexibilní systém pro zpracování příkazů, který odděluje logiku aplikace od interakce s uživatelem, čímž zlepšuje údržbu i uživatelskou zkušenost. Architektura aplikace upřednostňuje znovupoužitelnost a jednoduchost, což zajišťuje, že každý komponent je nezávislý a znovupoužitelný v jiných projektech nebo scénářích.",
        asciiLong4: "Tento přístup zajišťuje, že systém zůstává snadno škálovatelný, modifikovatelný a udržovatelný, čímž vytváří pevný základ pro dlouhodobé použití a podporuje efektivní vývojové praktiky.",
        asciiLong5: "Zde je ukázka aplikace v akci. Samozřejmě si můžete repozitář stáhnout a aplikaci si sami vyzkoušet.",
        asciiLong6: "Odkaz na GitHub projektu:",

        akrmatShort: "Aplikace vyvíjená v týmu, sloužící pro generování akreditačních materiálů na Fakultě informačních technologií. Zjednodušuje akreditační proces díky integraci dat z externích API a využívá LaTeX pro efektivní tvorbu PDF dokumentů.",
        akrmatLong1: "Akrmat je týmový projekt vyvíjený na Fakultě informačních technologií. Cílem aplikace je zjednodušit proces generování akreditačních materiálů, jako jsou studijní plány a programy, přičemž LaTeX je využíván k vytváření profesionálních PDF dokumentů pro akademické účely.",
        akrmatLong2: "Můj hlavní příspěvek spočíval ve tvorbě samostatné mikroservisy, která kompiluje LaTeX kód do PDF. Tato služba je integrována do systému Akrmat, přijímá LaTeX kód prostřednictvím API, zpracovává ho a vrací vygenerovaný PDF soubor. Také jsem měl na starosti úpravy, rozšiřování, ladění a řešení problémů s generováním LaTeX dokumentů, aby bylo zajištěno, že splňují požadované standardy.",
        akrmatLong3: "LaTeX byl pro mě do té doby zcela nový, a práce s ním mi dala cennou zkušenost. LaTeX v Akrmat je generován dynamicky, přičemž využívá vstupy z různých částí systému k vytváření akreditačních dokumentů. Oddělením generování PDF do samostatné služby jsme zajistili čistou, modulární architekturu, která umožňuje snadnou údržbu a rozšíření.",
        akrmatLong4: "Tento projekt mi nabídl skvělou příležitost pracovat s externími API a možnost získat zkušenosti s generováním dokumentů na bázi LaTeXu, zároveň jsem si tím vylepšil dovednosti v rámci práce v týmu a řešení problémů.",
        akrmatLong5: "Musím bohužel připomenout že, tento projekt je interní aplikace používaná na Fakultě informačních technologií, a proto nemohu poskytnout zdrojový kód ani konkrétní implementaci. Pokud máte zájem o více informací o tomto konkrétním projektu, neváhejte mě kontaktovat a rád vám poskytnu další informace.",

        carShort: "Spring Boot Java aplikace s REST API, integrací ORM a databáze Azure. Vytvořeno během 3. semestru, obsahující kompletní CRUD operace a vlastní implementaci front-endu. Využívá třívrstvou architekturu, která zajišťuje jasné oddělení zodpovědností.",
        carLong1: "Tento projekt je robustní, třívrstvá Java aplikace postavená na frameworku Spring Boot, navržená pro správu operací s půjčováním aut, přičemž je napojena na Azure databázi. Aplikace využívá modulární architekturu s jasným oddělením jednotlivých vrstev, což zajišťuje udržitelnost a škálovatelnost.",
        carLong2: "Backend je postaven na Spring Bootu, využívající REST API pro komunikaci s frontendem. Aplikace je plně propojena s databází Azure, přičemž složité SQL dotazy jsou vykonávány pomocí anotací Spring Data JPA. Integritní omezení jsou uplatněna k zajištění konzistence databáze, což přispívá k celkové spolehlivosti aplikace.",
        carLong3: "Frontend, vyvinutý jako samostatná aplikace, komunikuje s backendem prostřednictvím RESTful služeb, což uživatelům poskytuje dynamické a responzivní rozhraní. Jak frontend, tak backend jsou navrženy tak, aby spolupracovaly a nabízely hladkou uživatelskou zkušenost.",
        carLong4: "Aplikace také využívá Gradle jako nástroj pro automatizaci buildů, což zajišťuje efektivní vývojový proces. Plně nakonfigurovaný Dockerfile pro backend i frontend jsou součástí projektu, což usnadňuje nasazení a spuštění aplikace v jakémkoli prostředí. Pro testování projekt používá Mockito pro simulování závislostí a zajištění spolehlivosti jednotlivých komponent.",
        carLong5: "Dále projekt využívá Swagger UI pro automatickou generaci dokumentace API, což poskytuje vývojářům aktuální, interaktivní rozhraní pro testování a porozumění API endpointům.",
        carLong6: "Podívejte se na projekt na GitHubu:",

        cfShort: "Tento projekt implementuje systém pro doporučování filmů pomocí algoritmů kolaborativního filtrování. Backend je postaven v Pythonu a Flasku, zatímco dynamické uživatelské rozhraní je vytvořeno v Reactu.",
        cfLong1: "Projekt implementuje systém pro doporučování filmů založený na kolaborativním filtrování, který doporučuje filmy na základě hodnocení uživatelů. Backendová logika je napsaná v Pythonu, frontendové rozhraní je vytvořeno v Reactu a data jsou uchovávána pomocí SQLite. Systém je navržen pro práci s reálnými daty a simulaci personalizovaného doporučování.",
        cfLong2: "Funkce podobnosti: Systém podporuje různé metriky podobnosti, včetně kosinové podobnosti, Pearsonovy korelace a Spearmanova pořadového koeficientu. To umožňuje flexibilní hodnocení podobnosti mezi uživateli.",
        cfLong3: "Personalizovaná doporučení: Na základě zvolené metriky podobnosti systém identifikuje podobné uživatele, predikuje hodnocení pro neviděné filmy a vrací nejvhodnější doporučení.",
        cfLong4: "REST API: Flaskové API umožňuje dynamický přepočet doporučení pomocí parametrů jako typ podobnosti, počet sousedů, počet doporučených filmů nebo váhový faktor (kappa). Výsledky jsou vraceny ve formátu JSON.",
        cfLong5: "Frontend a testování: Uživatelské rozhraní je postaveno v Reactu a provozováno pomocí npm. Umožňuje interaktivní testování v reálném čase. Projekt navíc obsahuje testovací sadu pro ověření funkcionality v různých konfiguracích.",
        cfLong6: "Zdrojový kód je dostupný na GitHubu:",


        excelShort: "Tento projekt implementuje engine pro tabulkový procesor, který simuluje chování tabulky (např. v Excelu nebo Google Sheets) pomocí objektově orientovaného přístupu v C++. Klíčovým prvkem řešení je použití dědičnosti a polymorfismu.",
        excelLong1: "Tento projekt implementuje výkonný tabulkový engine, který simuluje chování tabulky podobně jako nástroje jako Excel nebo Google Sheets. Aplikace je postavena v C++ a zaměřuje se na přesné zpracování buněk, vzorců a detekci cyklických závislostí mezi nimi. Je navržena s objektově orientovaným přístupem, využívající dědičnost a polymorfismus k modelování různých typů buněk a operací, které je možné na nich provádět. Hlavní funkcionalita se zaměřuje na:",
        excelLong2: "Manipulace s buňkami: Každá buňka v tabulce může obsahovat různé typy dat, včetně statických hodnot (například čísla nebo text) nebo dynamického obsahu (vzorců, které odkazují na jiné buňky).",
        excelLong3: "Vyhodnocování vzorců: Procesor dokáže analyzovat a počítat vzorce pomocí sofistikovaného abstraktního syntaktického stromu (AST), který je uložen v každé buňce. To umožňuje efektivnější a přesnější vyhodnocení výsledků vzorců.",
        excelLong4: "Detekce cyklických závislostí: Jednou z klíčových funkcí tohoto enginu je schopnost detekovat a spravovat cyklické závislosti mezi buňkami. To zajišťuje, že procesor nevstoupí do nekonečné smyčky, když vzorec závisí na hodnotě buňky, která zase závisí na původní buňce.",
        excelLong5: "Integrace externího parseru: Engine využívá externí parser pro zpracování vzorců, čímž zajišťuje plynulý a flexibilní způsob čtení a zpracování uživatelsky definovaných vzorců.",
        excelLong6: "Bohužel nemohu poskytnout veřejný odkaz na tento projekt, protože je součástí mé akademické práce. Toto omezení je zavedeno, aby se předešlo případnému zneužití nebo plagiátorství, což zajišťuje integritu projektu a jeho originalitu. Pokud máte zájem, neváhejte mě kontaktovat a mohu vám projekt zpřístupnit na požádání.",

        sqlShort: "Sada úkolů zaměřených na PLSQL a PgPLSQL, pokrývající balíčky, procedury, triggery, rekurzi a optimalizaci vykonávacího plánu. Hlavní důraz je kladen na PostgreSQL, ale kolekce také zahrnuje sekce specifické pro Oracle.",
        sqlLong1: "Tato kolekce úkolů se zaměřuje na pokročilé SQL koncepty a praktiky, s důrazem na PLSQL a PgPLSQL. Pokrývá širokou škálu témat, včetně vytváření a správy triggerů, použití I/O balíčků pro zpracování dat, optimalizace vykonávacího plánu a implementace SQL rekurze pro složité datové dotazy.",
        sqlLong2: "Hlavní důraz je kladen na PostgreSQL, ale úkoly také obsahují sekce zkoumající funkce specifické pro Oracle, čímž poskytují ucelený pohled na databázové programování. Každý úkol je navržen tak, aby zlepšil praktické dovednosti a porozumění pokročilým SQL funkcionalitám.",
        sqlLong3: "Pokud byste se chtěli podívat na celý soubor úkolů, včetně konkrétních implementací a příkladů, navštívit můj GitHub repository. Tam najdete všechny materiály včetně zdrojových kódů.",

        aiShort: "Sbírka solverů klasických AI problémů implementovaných v C++. Projekty zahrnují hledání cesty v bludišti s vizualizací, řešení úloh N-dam a Sudoku pomocí omezení a heuristik, a plánovač v PDDL pro pohyb agentů.",
        aiLong1: "Tato sada projektů demonstruje základní techniky umělé inteligence prostřednictvím klasických úloh. Každý problém byl řešen vhodnými AI algoritmy, včetně neinformovaného i informovaného prohledávání, úloh splnění omezení a automatického plánování.",
        aiLong2: "Solver bludišť využívá algoritmy jako BFS, DFS, náhodné prohledávání, hladové prohledávání a A*, aby nalezl cestu bludištěm. Vizualizační komponenta animuje postup hledání krok za krokem, což umožňuje přímé porovnání chování a efektivity jednotlivých algoritmů.",
        aiExample: "Příklad:",
        aiLong3: "Solver úlohy N-dám používá backtracking a heuristiky k umístění N dam na šachovnici tak, aby se žádné vzájemně neohrožovaly. Vizualizace jasně ukazuje úspěšná rozmístění a průběh hledání řešení.",
        aiLong4: "Solver Sudoku kombinuje backtracking a propagaci omezení s MRV heuristikami pro efektivní řešení i velmi složitých problémů s minimem počátečních čísel. Podporuje filtrování čísel pro zmenšení prostoru hledání a nabízí výstup v terminálu. Pokud žádné zadání není poskytnuto, automaticky stáhne náhodné Sudoku z veřejného API.",
        aiLong5: "Projekt plánování v PDDL řeší problém plánování pohybu více agentů (MAPF) na neorientovaném grafu. Agenti se musí dostat do cílových pozic bez kolizí a úloha je zapsána v jazyce PDDL. Externí plánovač vypočítává korektní, často i optimální řešení.",
        aiLong6: "Projekty demonstrují základní přístupy k řešení problémů pomocí umělé inteligence a ukazují jejich praktické využití v různých typech úloh.",


        komShort: "Projekt modelující doménu autoservisních služeb pomocí OntoUML, UML, BPMN a OCD diagramů. OntoUML zachycuje klíčové entity a vztahy mezi nimi, BPMN mapuje konkrétní procesy. OCD zobrazuje celkovou strukturu systému.",
        komLong1: "Tento projekt se zaměřuje na modelování domény autoservisu pomocí různých modelovacích jazyků, včetně OntoUML, UML, BPMN a DEMO. Hlavním cílem bylo navrhnout komplexní model této domény, počínaje vytvořením OntoUML diagramu, který identifikuje klíčové entity zapojené do autoservisních služeb a definuje vztahy mezi nimi. OntoUML model zachycuje jak koncepční, tak strukturální aspekty domény a poskytuje pevný základ pro další analýzu.",
        komLong2: "Integritní omezení byla definována pomocí OCL (Object Constraint Language), aby byla zajištěna konzistence a správnost modelu. Systém automaticky zkontroloval potenciální antipatterny v rámci OntoUML modelu.",
        komLong3: "Kromě modelování celkového pracovního postupu byly jednotlivé transakce také modelovány v rámci systému pomocí DEMO (Design & Engineering Methodology for Organizations). DEMO bylo použito k zachycení specifických akcí a interakcí, které se vyskytují v transakčních procesech systému, čímž se zajistilo, že tyto procesy jsou v souladu s definovanými obchodními pravidly a organizační strukturou.",
        komLong4: "Nakonec byl vytvořen OCD (Organizační koncepční diagram), který reprezentuje strukturu samotné organizace, vymezuje role, odpovědnosti a vztahy mezi různými organizačními entitami. Tento diagram poskytl jasný a komplexní pohled na organizační hierarchii.",
        komLong5: "Pokud máte zájem o prozkoumání kompletních detailů projektu, včetně všech diagramů a modelů, neváhejte se podívat na celou práci.",
        viewProjectLink: "Zobrazit projekt",

        osProjectsShort: "Úkoly zaměřené na základní principy operačních systémů, jako je synchronizace vláken a návrh souborového systému. Hlavní pozornost je věnována řešení klasických problémů, například producent-konzument, a tvorbě vlastního souborového systému inspirovaného architekturou FAT.",
        osProjectsLong1: "Tato sada projektů se věnuje pokročilým tématům operačních systémů formou praktických úkolů v C++. První projekt řešil synchronizaci vláken a implementaci klasického problému producent-konzument. Bylo potřeba pečlivě řídit vlákna a synchronizační nástroje, aby byla zajištěna bezpečná a efektivní výměna dat, což ukazuje dobré porozumění problematice paralelního zpracování.",
        osProjectsLong2: "Druhý projekt spočíval v návrhu a implementaci jednoduchého vlastního souborového systému, který byl modelován podobně jako architektura FAT. Úkolem bylo vytvořit funkční rozhraní pro správu souborů včetně alokačních tabulek a metadat, což předvedlo praktické znalosti nízkoúrovňového programování a fungování souborových systémů.",
        osProjectsLong3: "Práce na těchto projektech mi pomohla zlepšit schopnosti řešit problémy a lépe pochopit základní principy operačních systémů. Díky praktickému využití programování v C++ jsem získal cenné zkušenosti, které doufám využiju při další práci na systémovém softwaru.",
        osProjectsLong4: "Pro více informací a ke shlédnutí zdrojového kódu můžete navštívit můj GitHub repozitář.",

        tetrisShort: "Výkonná implementace Tetrisu v Pythonu s LAN multiplayerem a modulárním systémem schopností. Projekt se zaměřuje na čistou architekturu, asynchronní síťovou komunikaci a dodržení vysoké kvality softwaru.",
        tetrisLong1: "Tento projekt je pokročilá aplikace Tetrisu vyvinutá v Pythonu s využitím knihovny Pyglet pro vysoce výkonné vykreslování grafiky a zpracování vstupů. Primárním cílem bylo jít nad rámec základní hratelnosti vytvořením robustního, rozšiřitelného enginu postaveného na principech objektově orientovaného programování (OOP), což zajišťuje striktní oddělení herní logiky, síťové komunikace a uživatelského rozhraní.",
        tetrisLong2: "Klíčovým prvkem je režim LAN multiplayeru, který umožňuje hráčům soupeřit v reálném čase prostřednictvím socketové komunikace. Pro zpestření hratelnosti jsem implementoval modulární systém schopností. Tato architektura umožňuje bezproblémovou integraci unikátních hráčských schopností a útočných modifikátorů (útoků) bez zásahu do jádra enginu, přičemž využívá návrhové vzory pro zachování rozšiřitelnosti a škálovatelnosti.",
        tetrisExampleText: "Výše je náhled hry v akci, který ukazuje rozhraní pro více hráčů a aktivní systém schopností. Uživatelské rozhraní je efektivně vykreslováno pomocí batch drawing v knihovně Pyglet.",
        tetrisLong3: "Kvalita kódu a stabilita byly ústředním bodem vývojového procesu. Projekt obsahuje sadu unit testů s využitím frameworku Pytest, které pokrývají kritické komponenty, jako je logika odstraňování řádků a synchronizace síťových paketů. Pro zajištění udržitelnosti a standardů celý kód dodržuje přísný styl (codestyle) kontrolovaný nástrojem Pylint.",
        tetrisLong4: "Modularita systému zajišťuje, že komponenty jako síťový handler, správce stavu hry a renderer UI jsou oddělené. Tato struktura nejen usnadňuje ladění, ale také umožňuje budoucí rozšíření, jako jsou nové herní režimy nebo alternativní vykreslovací backendy.",
        tetrisLong5: "Pokud si chcete vyzkoušet hru, můžete si stáhnout připravený .exe soubor pro Windows zde:",
        Download: "Stáhnout",
        tetrisLong6: "Pokud vás zajímá technická architektura, implementace systému schopností, síťové protokoly, nebo si jen chcete hru zahrát, neváhejte si prohlédnout kompletní zdrojový kód a dokumentaci.",

        workShort: "Profesionální automatizační platforma vyvinutá pro společnost Atos, zahrnující pokročilý web scraping, synchronizaci dat v reálném čase a robustní vrstvu pro persistenci dat.",
        workLong1: "Během tohoto projektu ve společnosti Atos jsem byl zodpovědný za kompletní architektonickou revizi systému pro automatizaci webu. To zahrnovalo rozsáhlý refaktoring z funkcionálního přístupu na striktní objektově orientovaný model (OOP), což výrazně zlepšilo udržovatelnost a škálovatelnost.",
        workLong2: "Technické jádro využívá Python s knihovnou Playwright pro vysoce výkonný web scraping a extrakci dat. Pro zajištění spolehlivé persistence dat jsem implementoval systém automatizované správy s využitím nástroje Alembic pro databázové migrace a vlastní skripty pro periodické čištění databáze, což zajišťuje optimalizaci systému odstraňováním zastaralých dat.",
        workLong3: "Na frontendu jsem vyvíjel a refaktoroval komponenty v Reactu a integroval WebSockety, které uživatelům poskytují dynamické aktualizace dat v reálném čase bez nutnosti obnovovat stránku. Také jsem spravoval a aktualizoval REST API, aby byla zajištěna bezproblémová komunikace mezi scraping enginem a uživatelským rozhraním.",
        workLong4: "Kromě vývoje jsem se podílel na návrhu UI/UX a vytvořil intuitivní rozhraní pro monitorování automatizovaných úloh. Moje role zahrnovala zajištění persistence dat v průběhu celého životního cyklu procesu scrapingu a udržování celkové stability produkčního prostředí.",
        workNDA: "Vzhledem k dohodě o mlčenlivosti (NDA) nemohu k tomuto projektu poskytnout další technickou dokumentaci ani zdrojový kód.",

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