import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import toast from 'react-hot-toast'
import { AuthContext } from '../provider/AuthProvider'

const MyBookings = () => {
  const { user } = useContext(AuthContext)
  const [books, setBooks] = useState([])

  useEffect(() => {
    getData()
  }, [user])

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/book/${user?.email}`)
    setBooks(data)
  }

  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>My Bookings Room</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {books.length} Book
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      <div className='flex items-center gap-x-3'>
                        <span>Room-Image</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      <span>Deadline</span>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      <button className='flex items-center gap-x-2'>
                        <span>Price-Per-Night</span>
                      </button>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Room-Name
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Cancel
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Update-Date
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Add-Review
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {books.map(book => (
                    <tr key={book._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        <img className='md:h-14' src={book.Room_Image} alt="" />
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {new Date(book.deadline).toLocaleDateString()}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        ${book.Price}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                            className={`px-3 py-1 ${book.Room_Name === 'Standard Room' &&
                              'text-blue-500 bg-blue-100/60'
                              } ${book.Room_Name === 'Classic Room' &&
                              'text-emerald-500 bg-emerald-100/60'
                              } ${book.Room_Name === 'Royal Class Room' &&
                              'text-pink-500 bg-pink-100/60'
                              } text-xs  rounded-full`}>
                            {book.Room_Name}
                          </p>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <Link to={`/update/${book._id}`}>
                            <button className='btn bg-red-500 text-white'>
                              Cancel
                            </button>
                          </Link>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <Link to={`/update/${book._id}`}>
                            <button className='btn bg-green-500 text-white'>
                              Update Date
                            </button>
                          </Link>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <Link to={`/update/${book._id}`}>
                            <button className='btn bg-yellow-500 text-white'>
                              Add Review
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBookings