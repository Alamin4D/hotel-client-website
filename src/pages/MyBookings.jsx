import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AuthContext } from '../provider/AuthProvider'
import { Helmet } from 'react-helmet'
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext)
  const name = user?.displayName;
  const email = user?.email;
  const image = user?.photoURL;
  const [books, setBooks] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoomTitle, setSelectedRoomTitle] = useState('');

  useEffect(() => {
    getData()
  }, [user])

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/book/${user?.email}`)
    setBooks(data)
  }
  const handleReviewSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const comment_text = form.comment_text.value;
    const rating = form.rating.value;
    const timestamp = new Date().toISOString();

    // const roomTitel = items.title;
    const reviewData = {
      comment_text, rating, timestamp: timestamp, name, email, image, title: selectedRoomTitle,
    }
    console.log(reviewData);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/review`, reviewData)
      console.log(data)
      Swal.fire({
        title: 'Success!',
        text: ' Review Posted Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      setIsOpen(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCancel = async (id) => {
    console.log('hello', id)
    try {
      const confirmation = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
      if (confirmation.isConfirmed) {
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/book/${id}`)
        console.log(data)
        toast.success('Deleted Sucessfully!')
      }
      getData()
    } catch (err) {
      console.log(err)
      console.log('Hi, i am error', err.message)
    }
  }

  return (
    <section className='container px-4 mx-auto pt-12'>
      <Helmet>
        <title>My Bookings</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
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
                          <button onClick={() => handleCancel(book._id)} className='btn bg-red-500 text-white'>
                            Cancel
                          </button>
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
                          <button onClick={() => { setIsOpen(true); }} className='btn bg-yellow-500 text-white'>
                            Add Review
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                  Review Room
                </h3>
                <form onSubmit={handleReviewSubmit} className="mt-4" action="#">
                  <label className="block mt-3" htmlFor="email">User Name</label>
                  <input type="text" name="text" id="text" placeholder="user@email.xyz" value={name} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                  <label className="block mt-3" htmlFor="commentText">Write A Comment</label>
                  <textarea
                    name="comment_text"
                    id="commentText"
                    placeholder="Write Comment"
                    className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />

                  <label htmlFor="rating" className="text-sm text-gray-700 dark:text-gray-200">
                    Rating (1-5)
                  </label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    min="1"
                    max="5"
                    required
                    className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button type="button" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                      Cancel
                    </button>
                    <input type="submit" value="Submit Comment" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MyBookings