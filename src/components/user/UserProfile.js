import React , {useState , useEffect} from 'react'
import InnerHeader from '../common/InnerHeader'
import Footer from '../common/Footer'


const UserProfile = () => {
    const [user_name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch('http://127.0.0.1:9900/welcome', {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            })

                .then(response => response.json())

                .then(data => {

                    setUserName(data.data.user_name);
                    setEmail(data.data.email);
                    setIsLoggedIn(true);
                })

                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, []);
  return (
    <div>
      <InnerHeader/>
      <div style={{ textAlign: 'center', margin: '35px' }}>
      <h4>Name : <span>{user_name}</span></h4>
      <h4>Email : <span>{email}</span></h4>
    </div>

      <Footer/>
    </div>
  )
}

export default UserProfile
