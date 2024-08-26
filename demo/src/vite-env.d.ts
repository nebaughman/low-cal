/// <reference types="vite/client" />
interface ImportMetaEnv {
readonly VITE_APP_VERSION: string
// more env variables...
}

interface ImportMeta {
readonly env: ImportMetaEnv
}

declare const LOW_CAL_LIB_VERSION: string
