const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
      <form
        onSubmit={handleSubmitForm}
        className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-lg mt-6"
      >
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Nombre completo
          </label>
          <input
            type="text"
            value={dataForm.fullname}
            name="fullname"
            onChange={handleChangeInput}
            id="fullname"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
  
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Teléfono
          </label>
          <input
            type="number"
            value={dataForm.phone}
            name="phone"
            onChange={handleChangeInput}
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
  
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            value={dataForm.email}
            name="email"
            onChange={handleChangeInput}
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
  
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          Enviar orden
        </button>
      </form>
    );
  };
  
  export default FormCheckout;
  