const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const fetchFollowers = async () => {
    const response = await fetch(url);
    return await response.json();
}

