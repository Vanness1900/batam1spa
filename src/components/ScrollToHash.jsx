import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
    const { hash, pathname } = useLocation()

    useEffect(() => {
        if (hash) {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        } else {
        // Scroll to top when path changes and no hash is used
        window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [hash, pathname])

    return null
}

export default ScrollToHash