function Home(props) {
    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={props.onLogOut}>Log out</button>
        </div>
    )
}

export default Home;