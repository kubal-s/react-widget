import { useEffect, useState } from "react";

const Route = ({path,children})=>{
    const [currentPath,setCurrentPath] = useState(window.location.pathname)
    useEffect(()=>{
        console.log("uuu")
        const onLocationChange = ()=>{
            // console.log("bjbjb")
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',onLocationChange)

        return ()=>{window.removeEventListener('popstate',onLocationChange)}
    },[])
    return window.location.pathname === path ? children:null
}
export default Route;