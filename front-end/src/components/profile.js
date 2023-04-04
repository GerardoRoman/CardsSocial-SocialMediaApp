import Avatar from './profile-icon.js'
export default function Profile() {

    return (
        <>
        <Avatar />
            <div> follow/unfollow button </div>
            <div> CARDS </div>
        </>
    )
}
// ternary that set followers to follow/ unfollow based on if 
// the profile being viewed is the users or not