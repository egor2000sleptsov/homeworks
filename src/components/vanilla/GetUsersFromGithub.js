const getUsersFromGithub = async usernames => {
		const users = []
		for (const username of usernames) {
				let user = await fetch(`https://api.github.com/users/${username}`)
				user = await user.json()
				// console.log(user)
				users.push(user)
		}
		return users
}

const usernames = ['egor2000sleptsov']
getUsersFromGithub(usernames).then(res => console.log(res))
