import { SortBy } from '../utils'

export function UsersList ({ switchBackground, users, handleDeleteUser, handleChangeSort }) {
  return (
    <table className='text-black w-full text-center border-2 border-black rounded-xl p-5 shadow-2xl font-medium '>
      <thead>
        <tr className='bg-black text-white'>
          <th className='py-5'>Photo</th>
          <th onClick={() => handleChangeSort(SortBy.NAME)} className='py-5 cursor-pointer'>Name</th>
          <th onClick={() => handleChangeSort(SortBy.LAST)} className='py-5 cursor-pointer'>LastName</th>
          <th onClick={() => handleChangeSort(SortBy.COUNTRY)} className='py-5 cursor-pointer'>Country</th>
          <th className='py-5'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => {
            const backgroundColor = index % 2 ? 'bg-gray-300' : 'bg-gray-400'
            const styleTableBody = switchBackground ? backgroundColor : 'bg-transparent'
            return (
              <tr key={user.email} className={styleTableBody}>
                <td>
                  <img className='mx-auto' src={user.picture.medium} />
                </td>
                <td>
                  {user.name.first}
                </td>
                <td>
                  {user.name.last}
                </td>
                <td>
                  {user.location.country}
                </td>
                <td>
                  <button
                    className='bg-red-500 py-1 px-4 rounded-full text-white'
                    onClick={() => handleDeleteUser(user.email)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
