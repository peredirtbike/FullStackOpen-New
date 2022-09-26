const PersonForm = ({name, nameChangeHandler, number, numberChangeHandler, addPersonClickHandler}) => {
    return (
        <form>
            <div>
                name: <input value={name} onChange={nameChangeHandler}/>
            </div>
            <div>
                number: <input value={number} onChange={numberChangeHandler}/>
            </div>
            <div>
                <button type="submit" onClick={addPersonClickHandler}>add</button>
            </div>
        </form>
    )
}

export default PersonForm