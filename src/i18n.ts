import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./static/languages/en.json"
import ua from "./static/languages/ua.json"
import es from "./static/languages/es.json"
import ca from "./static/languages/ca.json"

i18n.use(initReactI18next).init({
    resources: {
        ua: { translation: ua },
        en: { translation: en },
        es: { translation: es },
        ca: { translation: ca },
    },

    lng: "ua",
    fallbackLng: "en",
})

export default i18n
