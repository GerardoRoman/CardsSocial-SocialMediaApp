import { CgProfile } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import "../styles/profile-icon.css"

const Avatar = () => {
    return (
        <IconContext.Provider value={{ style: {fontSize: '75px', color: "black"}}} >
        <div>
            <CgProfile />
        </div>
        </IconContext.Provider> 
    )
}

export default Avatar