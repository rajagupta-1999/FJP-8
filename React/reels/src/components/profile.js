import Navbar from './Navbar'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { database } from '../firebase'
import { Avatar } from '@mui/material'
import './profile.css'
import Video from './Video'

function ProfileComp() {

    const { user } = useContext(AuthContext)

    const [userData, setUserData] = useState('')
    const [posts, setPosts] = useState(null);
    const [videos, setVideos] = useState(null);

    const handleVideos = () => {
        return (
        <video style={{ backgroundColor: 'black' }} controls>
            <source src="https://firebasestorage.googleapis.com/v0/b/reel-de971.appspot.com/o/posts%2F05f7f2aa-45bd-4711-855b-e21b4ed4804a%2FVID_20230505_100755.mp4?alt=media&token=ec35cbbe-1044-491a-9c21-ee6eee297fe8" />
        </video>
        )
    }


    useEffect(() => {
        const unsub = database.users.doc(user.uid).onSnapshot((snapshot) => {
            setUserData(snapshot.data())
        })
        return () => { unsub() }
    }, [user])


    useEffect(() => {
        let parr = [];
        const unsub = database.posts
            .orderBy("createdAt", "desc")
            .onSnapshot((querySnapshot) => {
                parr = [];
                querySnapshot.forEach((doc) => {
                    let data = { ...doc.data(), postId: doc.id };
                    parr.push(data);
                });
                setPosts(parr);
            });
        return unsub;
    }, []);

    // async function fetchVideos() {
    //     for (let i = 0; i < posts.length; i++) {
    //         if (userData.userId === posts[i].userId) {
    //             return posts[i].pUrl;
    //         }
    //     }
    // }
    // console.log(userData.postIds.length)


    return (
        <div>
            <Navbar />
            <div>
                <div className='profile_upper'>
                    <Avatar src={userData.profileUrl}
                        style={{ height: '8rem', width: '8rem', borderRadius: '50%' }}
                    />
                    <div style={{ flexBasis: '40%' }}>
                        <h1>{userData.fullname}</h1>
                        <h3>Posts : 1</h3>
                    </div>
                </div>
                <div className='profile_videos'>
                    {handleVideos()}
                </div>
                {/* <div>
                    <Video src={await fetchVideos()} />
                {console.log(fetchVideos())}
                </div> */}
            </div>
        </div>
    )
}
export default ProfileComp;