import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useQuestions = (videoId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      //database related works
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        //request firebase database
        const snapShot = await get(quizQuery);
        setLoading(false);
        if (snapShot.exists()) {
          setQuestions((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapShot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchQuestions();
  }, [videoId]);
  return {
    loading,
    error,
    questions,
  };
};

export default useQuestions;
