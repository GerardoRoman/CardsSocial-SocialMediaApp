import axios from "axios"
import { useState, useEffect } from "react"

const Tokentime = ({ token } => {
    axios.get(`https://social-cards-app.onrender.com/auth/token/login/`,
        {
            headers: { Authorization: `Token ${token}` }
        }
    ).then(res => console.log(res.data))
}
    
    
    )

const Tokendestroy = ({} => {

}
    )