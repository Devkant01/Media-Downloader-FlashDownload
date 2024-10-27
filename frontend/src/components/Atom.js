import { atom } from 'recoil';

export const Dark = atom({
    key: "isDark",
    default: true
})

export const sourceUrl = atom({
    key: "userInput",
    default: ""
})

export const Navbar = atom({
    key: "showNavbar",
    default: false
})

export const ShowFormat = atom({
    key: "showFormats",
    default: false
})

export const Data = atom({
    key: "fetched_data",
    default: {
        platform: "",
        url: "",
        size: "",
        title: "",
        description: "",
        height: "",
        msg: ""
    }
})

export const Loader = atom({
    key: "loader",
    default: false
})

export const Quality = atom({
    key: "videoQuality",
    default: {
        quality: null,
        format: null
    }
})