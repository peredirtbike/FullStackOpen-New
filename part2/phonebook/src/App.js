import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/filter'
import Notification from "./components/notification";
import PersonForm from './components/personForm'
import Persons from './components/persons'

import './index.css'


const App = () => {
    const [notification, setNotification] = useState(null);
    const [style, setStyle] = useState(null);

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        personService
          .getAll()
          .then(initialNotes => {
            setPersons(initialNotes)
          })
      }, [])

    const notify = (msg, style) => {
      setNotification(msg);
      setStyle(style);
      setTimeout(() => {
        setNotification(null);
        setStyle(null);
      }, 3000);
    };

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

    const findPerson = (name) =>
    persons.find((p) => p.name.toLowerCase() === name.toLowerCase());

    const addPerson = (event) => {
        event.preventDefault()
        const duplicate = findPerson(newName)
        const person = { name: newName, number: newNumber };

        if (duplicate) {
          if (window.confirm(`${duplicate.name} exists. Update ?`)){
            personService.update(duplicate.id, person).then((updatedPerson) => {
              setPersons(
                persons.map((p) => (p.id !== duplicate.id ? p : updatedPerson))
              );
              notify(`${updatedPerson.name} has been updated`, "success");
              setNewName("");
              setNewNumber("");
            })
          }
        }else {
          personService
          .create(person)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            notify(`${returnedPerson.name} has been added to phonebook`, "success")
            setNewName("")
            setNewNumber("")
          })
        }
    }

    const handleRemovePerson = (person) => {
      console.log(person)
      if (window.confirm(`Delete ${person.name} ?`)){
        personService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== person.id));
          notify(`${person.name} has been removed !`, "success");
        })
        .catch(() => {
          setPersons(persons.filter((p) => p.id !== person.id));
          notify(`${person.name} has been already removed!`, "error");
        })
      }
    }



    let personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <Notification message={notification} style={style} />
            <h2>Phonebook</h2>
            <Filter filter={filter} changeHandler={handleFilterChange}/>
            <h2>Add new</h2>
            <PersonForm name={newName} nameChangeHandler={handleNameChange} number={newNumber} numberChangeHandler={handleNumberChange} addPersonClickHandler={addPerson} />
            <h2>Numbers</h2>
            <Persons persons={personsToShow} handleRemovePerson={handleRemovePerson}/>
        </div>
    )
}

export default App