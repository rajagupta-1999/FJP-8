import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";
import Video from "./Video";
import Avatar from "@mui/material/Avatar";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Dialog from "@mui/material/Dialog";
import "./Post.css";
import Like from "./Like";
import Comment from "./Comment";
import Card from "@mui/material/Card";
import AddComment from "./AddComment";

import Typography from '@mui/material/Typography';
import { Navbar } from "react-bootstrap";

function Posts({ userData }) {
  const [posts, setPosts] = useState(null);

  const [open, setOpen] = useState(null);

  const handleClickOpen = (id) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(null);
  };

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

  return (
    <div>
      {posts == null || userData == null ? (
        <CircularProgress />
      ) : (
        <div className="video-container" >
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              {console.log(post)}
              <div className="videos">
                <Video src={post.pUrl} id={post.pId} />
                <div className="fa" style={{ display: "flex" }}>
                  <Avatar src={post.uProfile} style={{ position: 'relative' }} />
                  <h4 style={{ position: 'relative', color: 'black' }}>{post.uName}</h4>
                  <div style={{ marginLeft: '8rem' }}>
                    <ChatBubbleIcon
                    style={{backgroundColor:'black'}}
                      className="chat-styling"
                      onClick={() => handleClickOpen(post.pId)}
                    />
                    <Like  userData={userData} postData={post}/>
                  </div>
                </div>


                <Dialog
                  open={open == post.pId}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  maxWidth="sm"
                >
                  {/* <div className="video-modal">
                      <video autoPlay={true} muted="muted" >
                        <source src={post.pUrl} />
                      </video>
                    </div> */}
                  <div className="comment-modal">
                    <Card className="card1" style={{ padding: "1rem" }}>
                      <Comment postData={post} />
                    </Card>

                    <Card className="card2">
                      <Typography style={{ padding: '0.4rem' }}>{post.likes.length == 0 ? 'Liked by nobody' : `Liked by ${post.likes.length} users`}</Typography>
                      <div style={{ display: "flex" }}>
                        <AddComment
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          userData={userData}
                          postData={post}
                        />
                      </div>
                    </Card>
                  </div>
                </Dialog>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
