const Filter = ({filter, changeHandler}) => {
    return (
        <form>
            <div>
                filter shown with: <input value={filter} onChange={changeHandler}/>
            </div>
        </form>
    )
}

export default Filter