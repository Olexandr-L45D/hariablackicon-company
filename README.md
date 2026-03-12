# React + Vite

Project Hariablackicon-company This template provides a minimal setup to get
React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

# Project Structure (Modern Scalable Architecture)

src/ │ ├── app/ # App-level configuration │ ├── App.jsx │ ├── Providers.jsx #
Router / i18n / Redux / Theme │ └── routes.jsx │ ├── pages/ # Route-level pages
│ ├── HomePage/ │ │ ├── HomePage.jsx │ │ └── HomePage.module.css │ │ │ ├──
AboutUsPage/ │ │ ├── AboutUsPage.jsx │ │ └── AboutUsPage.module.css │ │ │ ├──
CompanyTermsPage/ │ │ ├── CompanyTermsPage.jsx │ │ └──
CompanyTermsPage.module.css │ │ │ ├── VentPageFilters/ │ │ ├──
VentPageFilters.jsx │ │ └── VentPageFilters.module.css │ │ │ └── NotFoundPage/ │
└── NotFoundPage.jsx │ ├── components/ # Reusable UI components │ ├── App/ │ ├──
Layout/ │ ├── Header/ │ ├── Footer/ │ ├── Navigation/ │ │ │ ├── CatalogGallary/
│ ├── FenDetails/ │ ├── Loader/ │ ├── ScrollToTopButton/ │ ├── SearchBoxFiltr/ │
│ │ ├── ConditionsMenu/ │ │ │ ├── ContactMap/ │ │ ├── ContactMap.jsx │ │ └──
ContactMapModal.jsx │ │ │ ├── Feedback/ │ │ ├── FeedbackMenu.jsx │ │ ├──
FeedbackForm.jsx │ │ ├── FeedbackFormPhone.jsx │ │ ├── FeedbackModalPhone.jsx │
│ └── FeedbackEmailModal.jsx │ │ │ └── ModalBasket/ │ ├── redux/ # Global state
management │ ├── store.js │ │ │ ├── campers/ │ │ ├── slice.js │ │ ├──
operations.js │ │ └── selectors.js │ │ │ ├── filters/ │ │ ├── slice.js │ │ └──
selectors.js │ │ │ └── basket/ │ ├── slice.js │ └── selectors.js │ ├──
locales/ # Internationalization │ ├── en/ │ │ └── translation.json │ │ │ ├── it/
│ │ └── translation.json │ │ │ └── pl/ │ └── translation.json │ ├── assets/ #
Static assets │ ├── images/ │ ├── icons/ │ └── fonts/ │ ├── hooks/ # Custom
React hooks │ ├── utils/ # Helper functions │ ├── constants/ # Global constants
│ ├── styles/ # Global styles │ ├── variables.css │ ├── reset.css │ └──
globals.css │ └── main.jsx # Application entry point

## стуркутра start comand

-`npm run lint` end after -`npm run build`

# в випадку якщо додав нові елементи і якщо хочу оновити переклади запускаю команди (прописані в скриптах)

<!-- added lenguage translate -->

public/locales/ ├── en/ │ └── common.json ← SOURCE OF TRUTH ├── it/ │ └──
common.json ← AUTO-GENERATED

- `npm run translate:it`
- `npm run translate:pl`

<!-- потім коли отримаю лінки на лінкедін та фейсбук додаю в скрипт -->
<!-- <script type="application/ld+json">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Haria Black Icon Srl",
  "url": "https://hariablackicon-company.vercel.app/",
  "logo": "https://hariablackicon-company.vercel.app/LogoHariaBlackIcon.png",
  "description": "Supplier of industrial systems including fans, air valves, and industrial heat exchangers for heating, cooling, and HVAC applications across Europe.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39 366 388 3621",
    "contactType": "sales",
    "areaServed": "Europe",
    "availableLanguage": ["English", "Italian", "Polish"]
  },
  "sameAs": [
    "https://www.linkedin.com/",
    "https://www.facebook.com/",
    "https://www.youtube.com/"
  ]
}
</script>
<!-- LinkedIn
Facebook
YouTube -->

<!-- перевіряю як шукає та СЕО в пошукових системах за посиланням
https://search.google.com/test/rich-results -->
