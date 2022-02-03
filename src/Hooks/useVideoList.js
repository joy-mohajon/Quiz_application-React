import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      //database related works
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt(" " + page),
        limitToFirst(8)
      );

      try {
        setLoading(true);
        setError(false);

        //request firebase database
        const snapShot = await get(videoQuery);
        setLoading(false);

        if (snapShot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapShot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideo();
  }, [page]);

  return {
    videos,
    loading,
    error,
    hasMore,
  };
};

export default useVideoList;
