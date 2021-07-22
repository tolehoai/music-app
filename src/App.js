import React, { useEffect, useState } from "react";
import Music from "./components/Music";
import axios from "axios";
import Loading from "./components/Loading";
function App() {
  const [musicList, setMusicList] = useState([]);

  const [loading, setLoading] = useState(true);

  const apiURL =
    "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR2j_Pu66FTXAI0xd5F0eah-kXq-BDxV-d24JKK0uNCDcTiUT-Pj3fMKZFQ";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(apiURL);
        const { data } = await res;
        setMusicList(data);
        setLoading(false);
        return data;
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    const musics = getData();
    // console.log("List: ", musics);
    // setMusicList(musics);
  }, []);
  console.log("Music List: ", musicList.songs);
  return (
    <div className="App">
      <h1>Music App Of HuynhThaoDuyen</h1>
      {loading ? <Loading /> : <Music musics={musicList.songs} />}
    </div>
  );
}

export default App;
