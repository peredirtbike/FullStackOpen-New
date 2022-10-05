const Persons = ({persons, handleRemovePerson }) => {
    return (
        persons.map(person =>
            <div>
            <p key={person.name}>{person.name} {person.number} </p>
            <button onClick={() => handleRemovePerson (person)}>delete</button>


            </div>
        )
    )
}

export default Persons