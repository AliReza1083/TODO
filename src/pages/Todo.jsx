// Packages
import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  collection, // colRef
  onSnapshot,
  addDoc, // Adding - function
  updateDoc, // Completed - function
  doc, // Completed & Deleting - function
  deleteDoc, // Deleting - function
  serverTimestamp,
  orderBy,
  query, // q
} from "firebase/firestore";

// Context
import { UserContext } from "../context/User";

// Firebase
import { db } from "../utils/Firebase";

// Components
import Add from "../components/Add";
import EachTodo from "../components/EachTodo";
import User from "../components/User";

const Books = () => {
  const { currentUser } = useContext(UserContext);

  const [todo, setTodo] = useState([]); // User/eachUser/TODOs will be stored here
  const colRef = collection(db, `User/${currentUser.uid}/TODOs`);
  const q = query(colRef, orderBy("createdAt")); // For classifying based on the time

  // Getting the data and store it in todo
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodo(snapshot.docs.map((todo) => ({ ...todo.data(), id: todo.id })));
    });
  }, []);

  // Adding data
  const Adding = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      todo: e.target.job.value,
      duration: e.target.duration.value,
      completed: false,
      id: currentUser.uid,
      createdAt: serverTimestamp(),
    }).then(() => {
      e.target.job.value = "";
      e.target.duration.value = "";
    });
  };

  // Updating Data - Completed
  const Completed = (e) => {
    const docRef = doc(db, `User/${currentUser.uid}/TODOs/${e.target.value}`);
    e.target.checked == true
      ? updateDoc(docRef, {
          completed: true,
        })
      : updateDoc(docRef, {
          completed: false,
        });
  };

  // Deleting Data
  const Deleting = (e) => {
    const docRef = doc(db, `User/${currentUser.uid}/TODOs/${e.target.value}`);
    deleteDoc(docRef);
  };

  return (
    <div className="flex justify-center">
      {/* Container */}
      <div className="w-full max-w-[1500px] mt-24 grid grid-cols-5 gap-12 px-4 lg:px-8 pb-8">
        {/* User */}
        <User currentUser={currentUser} />
        <div className="col-span-5 lg:col-span-4">
          {/* Form for adding Work */}
          <Add Adding={Adding} />

          {/* Each todo List */}
          <motion.div layout="position" className="relative">
            <AnimatePresence>
              {todo.map((todos) => {
                return (
                  <EachTodo
                    key={todos.id}
                    tasks={todos}
                    Completed={Completed} // For the checkbox
                    Delete={Deleting} // For the button when the checkbox is true
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Books;
