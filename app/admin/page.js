'use client'
import { useEffect, useState } from 'react';
import { insFood } from '@/_actions/postActions';
import firebaseCon from '@/config/firebase';
import firebase from 'firebase/compat/app';
import "firebase/compat/storage"

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [img, setImg] = useState("/images/biriyani.jpeg");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [fileUrl, setFileUrl] = useState(img);


    useEffect(() => {
    // Run only in the client
    if (typeof window !== 'undefined') {
      const name = prompt("What is your name?");
      if (name === "Abin2005") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setImg(file); // Save the file to state for later upload
    }
  };

  useEffect(() => {
    if (img !== "/images/biriyani.jpeg") {
      console.log("Image set:", img);
    }
  }, [img]);

  const handleSubmit = async (e) => {
    e.preventDefault();
   firebaseCon()

   
   if(img){
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(img.name);

    fileRef.put(img)
    .then((snapshot)=>{
        snapshot.ref.getDownloadURL()
        .then(async (downloadURL)=>{
            const data = {
                name:name,
                disc:description,
                image:downloadURL,
                price:price
            }
           const resp = await insFood(data)
           setDescription(resp)
        })
    })
   }

  }

  if (isAdmin === null) {
    return null; // Optionally, you can return a loading indicator here
  }

  return (
    <>
      {isAdmin ? (
        <div className="flex justify-center items-center h-screen text-black">
          <div>
            {fileUrl && (
              <img src={fileUrl} alt="food" height={200} width={150} />
            )}
            <br />
            <form onSubmit={handleSubmit}>
              <input 
                type='file'
                name="file"
                onChange={handleFileChange}
              />
              <br />
              <input 
                type='text' 
                placeholder='Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
              <br />
              <textarea 
                placeholder='Description' 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
              />
              <br />
              <input 
                type='number' 
                placeholder='Price' 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
              />
              <br />
              <button type="submit" >Submit</button>
            </form>
           
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="flex justify-center items-center">
            <h1 className="font-extrabold text-9xl">wrong turn!!</h1>
          </div>
        </div>
      )}
    </>
  );
}
