import {useState, useEffect} from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Person from './components/persons'
import personService from  './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
      personService
        .getAll()
        .then(response => {
          setPersons(response.data)
        })
    }, [])

    const resetNewState = () => {
      setNewName('')
      setNewNumber('')
    }

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

    const deletePerson = (person) => {
      const msg = `Delete ${person.name} ?`
      const confirm = window.confirm(msg)
      if (confirm) {
        personService
        .deletePerson(person.id)
        .then(persons =>
          setPersons(persons)
      )}
    }

    const updateName = (nameObject) => {
      const update_person = persons.find(p => p.name === nameObject.name)
      const update_id = update_person.id
      personService
      .update(update_id, nameObject)
      .then(returnedPerson =>
        setPersons(persons.map(person => person.id !== update_id ? person : returnedPerson))
      )}

    // function to create new name
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      // receives content from the components newName state
      name: newName,
      number: newNumber,
    }

    const existing_names = persons.map(person => person.name)

    if (existing_names.includes(newName)) {
      const msg = `${newName} is already added to the phonebook. Replace the old number with the new one?`
      const confirm = window.confirm(msg)
      if (confirm) {
        updateName(nameObject)
      }
    } else {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          resetNewState()
        })
    }
  }

  const personsToShow = filter ?
  persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) :
  persons
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} changeHandler={handleFilterChange}/>
            <h2>Add new</h2>
            <PersonForm name={newName} nameChangeHandler={handleNameChange} number={newNumber}
                        numberChangeHandler={handleNumberChange} addPersonClickHandler={addName}/>
            <h2>Numbers</h2>
            <ul>
            {personsToShow.map(person =>
            <Person
              key={person.name}
              person={person}
              deleteEntry={() => deletePerson(person)} />
            )}        </ul>
        </div>
    )
}

export default App