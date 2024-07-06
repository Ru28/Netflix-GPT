import React, {useEffect} from 'react'
import { signOut , onAuthStateChanged} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store =>store.gpt.showGptSearch)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              const {uid, email, displayName,photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName:displayName, photoURL: photoURL}));
              navigate("/browse")
          } else {
              dispatch(removeUser());
              navigate("/");
          }
      });

      // Unsubscribe when component unmounts
      return ()=> unsubscribe();

  },[]);

  const handleSignOut = () =>{
    signOut(auth).then(() => {}).catch((error) => {
      navigate("/error")
    });
  }

  const handleGptSearchClick = () => {
       dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e)=>{
     dispatch(changeLanguage(e.target.value))

  }

  return (
    <div className="absolute flex flex-col md:flex-row justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className='w-44 mx-auto md:mx-0'
        src= {LOGO}
        alt='logo'
      />
      {user && (
      <div className="flex justify-between p-2">
        {showGptSearch && (<select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>)}
        <button 
          className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg'
          onClick={handleGptSearchClick}
          >
            {showGptSearch? "HomePage": "GPT Search"}
          </button>
        <img className="hidden w-12 h-12" src={user?.photoURL || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"} alt='userIcon' />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>)}
    </div>
    
  )
}

export default Header;