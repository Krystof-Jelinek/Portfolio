export default {
    "short": "Bakalářská práce zaměřená na rozšíření a refaktoring produkční aplikace Akrmat, která na FIT ČVUT spravuje generování akreditačních materiálů.",
    "long1": "V rámci své bakalářky jsem se podílel na vývoji nové generace systému Akrmat. Jde o aplikaci, která kompletně automatizuje přípravu akreditačních materiálů na FIT ČVUT a aktuálně už běží v ostrém provozu. Vývoj probíhal v úzké spolupráci s dalšími vývojáři a uživateli z fakulty, abychom zajistili, že systém zvládne reálnou akademickou agendu.",
    "long2": "Bylo nutné se zorientovat v existující a poměrně rozsáhlé distribuované codebase a naimplementovat chybějící funkcionalitu. Mimo jiné jsem navrhl flexibilní správu pro dosud nepodporované akreditační formuláře (A-I, B-I, C-II až C-V, D-I a E). Využil jsem k tomu koncept přímé manipulace s LaTeX zdrojáky v bezpečném a izolovaném prostředí.",
    "long3": "Velkou výzvou bylo i řešení technického dluhu v sázecí mikroslužbě napsané v Javě. Kompletně jsem ji zrefaktoroval a zmodularizoval. Tím se vyřešily zásadní produkční chyby, jako například race conditions při souběžných requestech (řešeno přes unikátní pracovní adresáře pomocí UUID), a celkově se stabilizovala vícenásobná kompilace dokumentů.",
    "long4": "Kromě toho jsem přidal systém pro agregaci personálního zabezpečení napříč celým studijním programem a zavedl nový Markdown export pro sylaby předmětů. Díky těmto úpravám teď systém generuje kompletní a formálně správné akreditační dokumenty, do kterých už není potřeba ručně zasahovat.",
    "long5": "Pokud vás zajímá jakákoli část práce, nebo si chcete pročíst detailní implementaci, dole najdete všechny důležité odkazy.",
    "linksHeader": "Dokumenty a odkazy:",
    "downloadPdf": "Stáhnout bakalářskou práci (PDF)",
    "dspaceLink": "Detail práce v repozitáři DSpace ČVUT"
}   