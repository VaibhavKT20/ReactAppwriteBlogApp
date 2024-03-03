import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../appwrite/auth";
import { logout } from "../../Feature/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    authservice
      .logout()
      .then((res) => {
        dispatch(logout(res));
      })
      .catch((err) => console.log("LOGOUT BTN ERROR :", err));
  };

  return (
    <button
      className="px-3 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
      onClick={logOutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
