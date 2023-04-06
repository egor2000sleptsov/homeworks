import './App.css'
import {useEffect, useState} from "react";
import User from "./components/User.jsx";

function App() {
		const usernames = ['egor2000sleptsov', 'Crack-Man']
		const [users, setUsers] = useState([])

		useEffect(() => {
				const getUsersFromGithub = async usernames => {
						const res = []
						for (const username of usernames) {
								let user = await fetch(`https://api.github.com/users/${username}`)
								user = await user.json()
								res.push(user)
						}
						setUsers(res)
				}
				getUsersFromGithub(usernames)
		}, [])

		return (
				<div className="App">
						{users.map((el, index) => <User key={index} user={el}/>)}
				</div>
		)
}

export default App
