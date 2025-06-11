const ContactForm = ({ onSubmit, newName, setNewName, newNumber, setNewNumber }) => (
  <form onSubmit={onSubmit}>
    <div>
      Nombre: <input value={newName} onChange={e => setNewName(e.target.value)} required />
    </div>
    <div>
      Número: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} required />
    </div>
    <button type="submit">Agregar</button>
  </form>
)

export default ContactForm
