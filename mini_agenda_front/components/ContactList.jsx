const ContactList = ({ contacts, handleDelete, handleEdit }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name} - {contact.number}
        <button type="button" onClick={() => handleDelete(contact.id)}>eliminar</button>
        <button type="button" onClick={() => handleEdit(contact.id)}>editar</button>
      </li>
    ))}
  </ul>
)

export default ContactList
