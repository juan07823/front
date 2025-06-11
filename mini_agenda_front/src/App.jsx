import { useState, useEffect } from 'react'
import contactsService from './service/contacts'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    contactsService.getAll().then(initialContacts => {
      setContacts(Array.isArray(initialContacts) ? initialContacts : [])
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newContact = { name: newName, number: newNumber }
    const created = await contactsService.create(newContact)
    setContacts(contacts.concat(created))
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = async (id) => {
    await contactsService.remove(id)
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const handleEdit = async (id) => {
    const contactToEdit = contacts.find(c => c.id === id)
    const newNumberEdit = prompt('Nuevo número:', contactToEdit.number)
    if (newNumberEdit && newNumberEdit !== contactToEdit.number) {
      const updatedContact = { ...contactToEdit, number: newNumberEdit }
      const updated = await contactsService.update(id, updatedContact)
      setContacts(contacts.map(c => c.id === id ? updated : c))
    }
  }

  return (
    <div>
      <h1>Agenda de Contactos</h1>
      <ContactForm
        onSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Contactos</h2>
      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default App

