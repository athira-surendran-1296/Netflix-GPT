import { DEFAULT_USER_LOGO, LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    console.log(user);

    const handleSignout = () => {
        signOut(auth).then(() => {
            /* Sign-out successful */
            navigate('/');
        }).catch((error) => {
            /* An error happened */
            navigate('/error');
        });
    };

    return(
        <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <div>
                <img className="w-44" src={LOGO} alt="logo" />
            </div>
            {user && <div className="flex gap-2 p-3">
                <img className="w-12 rounded-md" src={user?.photoURL ? user?.photoURL : DEFAULT_USER_LOGO} alt="logo" />
                <button className="border border-white bg-black text-white p-1 px-4 m-2 rounded-md" onClick={handleSignout}>
                    Sign Out
                </button>
            </div>}
        </div>
    )
}

export default Header;