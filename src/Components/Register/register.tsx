import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { auth, db } from "../../Firebase/config";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  function handleSignOut(e: any) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
       
        
        const user = userCredential.user;

        console.log("userCredential ", userCredential);
        try {
          const docRef = await addDoc(collection(db, "user"), {
            first: "fernando",
            email: email,
          });
          console.log("Document written with ID: ", docRef.id);
          window.location.href = '/home'
        } catch (e) {
          
          console.error("Error adding document: ", e);
        }
        
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        
      });
  }

  
 
  
  return (
    <div className="container">
      <header className="header">
        <span>Digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignOut} className="button">
          Cadastrar
        </button>

        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
