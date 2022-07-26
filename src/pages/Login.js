import { useState } from "react";
import logo from "../res/logo.jpg"

export default function Login({ useAuth }) {

  const [isValid, setIsValid] = useState(true);
  let auth = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let username = formData.get("username");

    if (!auth.signin(username)) {
      setIsValid(false);
    }
  }

  return (
    <section className="gradient-form bg-gray-200 h-screen flex justify-center items-center">

      <div className="flex justify-center items-center flex-wrap h-full w-full text-gray-800">
        <div className="block bg-white shadow-lg rounded-lg h-full w-full sm:w-auto sm:h-auto">
          <div className="p-12 mx-6">
            <div className="text-center">
              <img
                className="mx-auto w-48"
                src={logo}
                alt="logo"
              />
            </div>
            <form onSubmit={handleSubmit}>
            {
              !isValid &&
              <p className="text-red-700 text-xs text-center mb-4">نام کاربری یا رمز عبور نادرست است.</p>
            }
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  name="username"
                  placeholder="نام کاربری"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="رمز عبور"
                />
              </div>
              <div className="text-center pt-1 mb-12 pb-1">
                <button
                  className="grad inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  ورود
                </button>
                <a className="text-gray-500" href="#!">فراموشی رمز</a>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
  )
}