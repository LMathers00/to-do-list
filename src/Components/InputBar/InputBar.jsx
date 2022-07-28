import "./InputBar.scss"

const InputBar = () => {
    return (
        <form className="InputBar__Field">
        <input type={"text"} placeholder="Whatcha doing??"/>
        <button className="InputBar__submit">SUBMIT</button>
        </form>
    )
}

export default InputBar