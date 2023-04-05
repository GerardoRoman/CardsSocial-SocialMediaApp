import { useState } from 'react';

export default function useFollow(userId) {
    const [isFollowing, setIsFollowing] = useState(false);

    async function toggleFollow() {
    const response = await fetch(`https://social-cards-app.onrender.com/cards/follow/${userId}`, {
    method: 'PATCH',
});

    if (response.ok) {
        setIsFollowing(!isFollowing);
    }
}

return { isFollowing, toggleFollow };
}