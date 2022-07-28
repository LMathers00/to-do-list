import "./Title.scss"

const Title = () => {

const reset = () => {
    window.location.reload()
}

    return(
        <header className="title">
            <h1>My TODOS</h1>
            <button className="Title__reset-button" onClick={reset}>Reset</button>
        </header>
    )
}

export default Title