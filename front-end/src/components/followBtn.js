// import useFollow from '../hooks/useFollow'
// import classNames from 'classnames'

// export default function FollowBtn({ userId }) {
//     const { isFollowing, toggleFollow } = useFollow(userId)

//     return (
//         <>
//             <button classname={classNames(isFollowing ? 'following' : 'not-following')} onClick={toggleFollow}>
//                 {isFollowing ? (
//                     <div className='follow-text'>
//                         <span className='follow-text_following'>Following</span>
//                         <span className='follow-text_unfollow'>Unfollow</span>
//                     </div>
//                 ) : (
//                     'Follow'
//                 )}
//             </button>
//         </>
//     )
// }