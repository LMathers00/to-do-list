import "./List.scss"

const List = ({PlaceholderText , tasks = []}) => {
    if (tasks.length === 0 ) {
        return <p>{PlaceholderText}</p>
    }

    return (
        <ul className="List"></ul>
    )
}

export default List