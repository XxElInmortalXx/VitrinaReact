import { useState } from 'react'

function createId () {
  const a = Date.now().toString(30)
  const b = Math.random().toString(30).substring(2)
  return a + b
}

function App () {
  const [pacientes, setPacientes] = useState([])
  const [error, setError] = useState('')
  const [paciente, setPaciente] = useState({
    id: null,
    name: '',
    tel: '',
    email: '',
    msg: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (paciente.id) {
      const { id } = paciente
      const i = pacientes.findIndex((pacienteState) => pacienteState.id === id)
      const newPaciente = Object.fromEntries(new window.FormData(e.target))
      pacientes[i] = newPaciente
      pacientes[i].id = id
    } else {
      const newPaciente = Object.fromEntries(new window.FormData(e.target))

      if (!newPaciente.name || !newPaciente.tel || !newPaciente.email || !newPaciente.msg) {
        setError('Todos los campos son obligatorios')
        setTimeout(() => {
          setError('')
        }, 3000)
        return
      }

      newPaciente.id = createId()
      setPaciente(newPaciente)
      setPacientes((prevPacientes) => [...prevPacientes, newPaciente])
    }

    setPaciente({
      id: null,
      name: '',
      tel: '',
      email: '',
      msg: ''
    })
  }

  const handleEditPaciente = (id) => {
    const newPaciente = pacientes.filter((paciente) => paciente.id === id)[0]
    setPaciente(newPaciente)
  }

  const handleDeletePaciente = (id) => {
    const newPacientes = pacientes.filter((paciente) => paciente.id !== id)
    setPacientes(newPacientes)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      [name]: value
    }))
  }

  return (
    <main>
      <h1 className='text-center font-extrabold my-10 text-4xl text-blue-600'>CRUD Pacientes</h1>
      <section className='grid sm:grid-cols-2 gap-5 mx-auto w-[90%] container'>
        <form onSubmit={handleSubmit}>
          <fieldset className='flex flex-col justify-center gap-3'>
            <legend className='text-center text-xl font-medium mb-3'>Añade tus pacientes</legend>
            <input
              onChange={handleChange}
              value={paciente.name}
              name='name'
              placeholder='Nombre'
              className='border border-black rounded-lg text-lg p-2'
              type='text'
            />
            <input
              onChange={handleChange}
              value={paciente.tel}
              name='tel'
              placeholder='Telefono'
              className='border border-black rounded-lg text-lg p-2'
              type='tel'
            />
            <input
              onChange={handleChange}
              value={paciente.email}
              name='email'
              placeholder='Email'
              className='border border-black rounded-lg text-lg p-2'
              type='email'
            />
            <textarea
              onChange={handleChange}
              value={paciente.msg}
              name='msg'
              placeholder='Msg'
              className='resize-none border border-black rounded-lg text-lg p-2'
            />
          </fieldset>
          <button className='w-full p-2 bg-black mt-3 text-white rounded-lg font-medium text-lg'>{paciente.id ? 'Guardar Cambios' : 'Añadir paciente'}</button>
          {error && <p className='w-full p-2 bg-red-500 rounded-xl text-white font-medium mt-2 text-center'>{error}</p>}
        </form>
        <article>
          <h3 className='text-center text-xl font-medium mb-3'>Administra tus pacientes</h3>
          <div className='flex flex-col gap-2'>
            {
              pacientes.length > 0
                ? (
                    pacientes.map((paciente) => (
                      <section
                        className='border-2 border-black bg-gray-100 rounded-xl p-2'
                        key={paciente.id}
                      >
                        <p><span className='font-bold'>Id: </span>{paciente.id}</p>
                        <h3><span className='font-bold'>Nombre: </span>{paciente.name}</h3>
                        <p><span className='font-bold'>Tel: </span>{paciente.tel}</p>
                        <p><span className='font-bold'>Email: </span>{paciente.email}</p>
                        <p><span className='font-bold'>Msg: </span>{paciente.msg}</p>
                        <div className='flex justify-between items-center'>
                          <button onClick={() => handleEditPaciente(paciente.id)} className='block py-1 px-4 rounded-full mt-2 bg-blue-500 text-white'>Editar</button>
                          <button onClick={() => handleDeletePaciente(paciente.id)} className='block py-1 px-4 rounded-full mt-2 bg-red-500 text-white'>Eliminar</button>
                        </div>
                      </section>
                    ))
                  )
                : <p className='text-center text-red-500 font-medium'>Todavia no hay pacientes</p>
            }
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
