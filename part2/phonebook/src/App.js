import {useState} from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)

            return
        }

        const notePerson = {
            name: newName,
            number: newNumber
        }

        setPersons(persons.concat(notePerson))
        setNewName('')
        setNewNumber('')
    }

    let personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} changeHandler={handleFilterChange}/>
            <h2>Add new</h2>
            <PersonForm name={newName} nameChangeHandler={handleNameChange} number={newNumber}
                        numberChangeHandler={handleNumberChange} addPersonClickHandler={addPerson}/>
            <h2>Numbers</h2>
            <Persons persons={personsToShow}/>
        </div>
    )
}

export default App