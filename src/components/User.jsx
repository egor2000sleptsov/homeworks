import React from 'react';

function User({user}) {
		// console.log(user)
		return (
				<div>
						<div><img width={240} src={user.avatar_url} alt='photo'/></div>
						<div>
								<div><a href={user.html_url}>Login: {user.login}</a></div>
								<div>{user.bio}</div>
								<div>Count of public repositories: {user.public_repos}</div>
								<div>followers: {user.followers}, following: {user.following}</div>
						</div>
				</div>
		);
}

export default User;
