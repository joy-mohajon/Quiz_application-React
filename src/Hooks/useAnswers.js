import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useAnswers = (videoId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      //database related works
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoId + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        //request firebase database
        const snapShot = await get(answerQuery);
        setLoading(false);
        if (snapShot.exists()) {
          setAnswers((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapShot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchAnswers();
  }, [videoId]);
  return {
    loading,
    error,
    answers,
  };
};

export default useAnswers;
