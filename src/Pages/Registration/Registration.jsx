import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { FaRegHandPointDown } from "react-icons/fa";
import { AuthContext } from "../../provides/AuthProvide";

const Register = () => {
  const { createUser, user, myTheme, logOut } = useContext(AuthContext);
  const [passData, setPassData] = useState("");
  const [showPass, setShowPass] = useState("");

  const handleInput = (e) => {
    setPassData(e.target.value);
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const name = form.name.value;
    // console.log(email, photo, password, confirm, name);

    if (password != confirm) {
      Swal.fire({
        icon: "error",
        text: "Passwords Don't Match",
      });
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      Swal.fire({
        icon: "error",
        text: "Password should have at least an uppercase , a lowercase and 6 characters",
      });
      return;
    }
    // console.log(email, name, photo, password, confirm);

    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        const userCredential = res.user;
        updateProfile(userCredential, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // console.log("Profile Updated");
            // console.log("Creaetd user : ", userCredential);
            Swal.fire("Registration Successful");
            logOut();
            form.reset();
          })
          .catch((err) => {
            // console.log("Error while updating profile: ", err);
            Swal.fire("Profile is not updated");
            return;
          });

        form.reset();
      })
      .catch((err) => {
        // console.log("Err: ", err);
        Swal.fire("Registration Failed! Your email is already in use");
        return;
      });
  };
  return (
    <div className="mx-2 min-h-screen">
      <div
        className={`hero min-h-screen ${
          myTheme == "light" ? "bg-white" : "bg-black -my-2"
        } `}
      >
        <div className="flex lg:rounded-2xl flex-col lg:flex-row lg:shadow-2xl shadow-blue-900">
          <div
            className={`lg:text-left  lg:h-[550px] lg:w-[900px] flex flex-col items-center justify-center py-2 px-10 ${
              myTheme == "light" ? "bg-red" : "bg-black"
            }  text-white`}
          >
            <p className="text-xl lug font-bold tracking-widest border-b-2 mb-4">
              Who we are?
            </p>
            <div className="md:text-xl lug  space-y-4">
              <p className="tracking-wider leading-7">
                At StudySync, we believe that education is the cornerstone of
                personal growth and professional development. Our platform is
                designed to empower learners of all ages and backgrounds to
                achieve their educational goals through innovative and
                interactive learning experiences.
              </p>
              <p className="tracking-wider  leading-7">
                Our mission is to provide a supportive and engaging learning
                environment where students can thrive and reach their full
                potential. We strive to make learning accessible, enjoyable, and
                rewarding for everyone, regardless of their location or
                circumstances.
              </p>
            </div>
            <Link to="/login">
              <button className="btn btn-outline text-lg border-white lg:rounded-bl-none lg:rounded-tr-none text-white font-semibold btn-wide">
                Have an account
              </button>
            </Link>
          </div>
          <div
            className={`card mx-auto shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100 lg:rounded-none lg:rounded-r-2xl ${
              myTheme == "light" ? "" : "bg-gray-800 -my-2"
            } `}
          >
            <form
              onSubmit={handleRegister}
              className="card-body bg-gradient-to-tl from-[#0000ff2e]  w-full"
            >
              <div className="form-control">
                <p className="text-xl text-red tracking-wider  font-semibold mb-5 px-4 flex gap-2 items-center">
                  Register To StudySync <FaRegHandPointDown />
                </p>

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input border border-success "
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input border border-success "
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input border border-success "
                  required
                />
              </div>
              {/* passwords */}
              <div className="form-control relative">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="input border border-success"
                  defaultValue=""
                  onChange={handleInput}
                  required
                />
                <span className="text-grany-200 absolute right-4 bottom-4 text-xl text-gray-400">
                  {showPass ? (
                    <FaRegEyeSlash onClick={handleShowPass} />
                  ) : (
                    <FaRegEye onClick={handleShowPass} />
                  )}
                </span>
              </div>
              <div className="form-control">
                <input
                  name="confirm"
                  placeholder="Confirm Password"
                  type={showPass ? "text" : "password"}
                  className="input border border-success "
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn bg-red text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
