import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../../config'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'


const DashUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then(res => {
        if (!res.ok) throw new Error('Could not get users')
        return res.json()
      })
      .then(data => {
        console.log(data);
        setUsers(data.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1)
  return (
    <>
<div className=''>
      <div className="bg-gray-900 max-w-7xl mx-auto shadow-xl">
        <div className="mx-auto max-w-7xl ">
          <div className="bg-gray-900 py-10  ">
            <div className="px-4 sm:px-6 lg:px-8 ">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-white">Users</h1>
                  <p className="mt-2 text-sm text-gray-300">
                    A list of all the users in your Applicaiton including their name, Phone Number, email and role.
                  </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <button
                    type="button"
                    className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Add user
                  </button>
                </div>
              </div>
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead>
                        <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                            Name
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Phone Number
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Email
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Role
                          </th>
                          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {records.map((person) => (
                          <tr key={person.email}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {person.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">+216 {person.phoneNumber}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.email}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.role}</td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <div className='flex justify-end'>
                              <a href="#" className="text-indigo-400 hover:text-indigo-300 py-2 px-4">
                                Edit<span className="sr-only">, {person.name}</span>
                              </a>
                              <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                Delete
                              </button></div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-5">
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0  ">
          <div className="-mt-px flex w-0 flex-1">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Previous
            </a>
          </div>
          <div className="hidden md:-mt-px md:flex">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <a
                href="#"
                key={n}
                className={`${currentPage === n
                    ? 'inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600'
                    : 'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                onClick={() => setCurrentPage(n)}
              >
                {n}
              </a>
            ))}
          </div>
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div></div>
    </>
  )
}

export default DashUsers