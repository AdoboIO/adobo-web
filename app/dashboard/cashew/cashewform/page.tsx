export default function Page() {

    return (
        <>
            <div className="block max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
      <form action="api/cashew" method="post">
          <div className="mb-6>">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" id="name" name="name"/>
          </div>
          <div className="mb-6>">
            <label htmlFor="contact">Contact Number</label>
            <input type="text" id="contact" name="contact"/>
          </div>
          <div className="mb-6>">
            <label htmlFor="alternateContact">Alternate Contact Number</label>
            <input type="text" id="alternateContact" name="alternateContact"/>
          </div>
          <button type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
          </button>
      </form>
            </div>
            </>
    );
}
