import {useEffect} from 'react'
import useLocalStorage from './useLocaleStorage'

function useDarkMode() {
    const [darkMode,setDarkMode] = useLocalStorage('darkmode')
    useEffect(()=>{
        let body = document.querySelector('body').classList
        console.log(body)
        if (body[0] !== 'dark-mode') body.add('dark-mode')
        else body.remove('dark-mode')
    },[darkMode])
    return [darkMode,setDarkMode]
}

export default useDarkMode
