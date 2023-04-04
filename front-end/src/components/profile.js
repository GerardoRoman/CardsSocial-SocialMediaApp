import { useState } from 'react';


export default function Profile(username, token) {

    return (
        <>
            <div> username </div>
            <div> follow/unfollow button </div>
            <div> CARDS </div>
        </>
    )
}
// ternary that set followers to follow/ unfollow based on if 
// the profile being viewed is the users or not