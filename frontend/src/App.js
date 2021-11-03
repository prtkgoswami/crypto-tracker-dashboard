import './App.css';
import {React, useState, useEffect} from 'react'
import CoinBlock from './CoinBlock';
import DescriptionModal from './DescriptionModal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faRedo} from '@fortawesome/free-solid-svg-icons'
import Constants from './Constants'
import axios from 'axios'

function App() {
  // TEST DATA - Enable to avoid multiple API calls while testing/development
  // const [coins, setCoins] = useState(Constants.sample_data);

  const [coins, setCoins] = useState([]);
  const [modalInfo, setModalInfo] = useState(['', '']);
  const [modalVisible, setModalVisibility] = useState(false);
  const [lastUpdated, setLastUpdateTime] = useState("");
  const [serviceStatus, setServiceStatus] = useState(0); // 0=> No Reply, 1=> Success, 2=> Error
  var key = 1;

  const fetchData = async () => {
    axios.get('./api/').then(response => {
      console.log(response);
      setCoins(response.data.api_response.data);
      setLastUpdateTime(response.data.api_response.updated_time);
      setServiceStatus(1);
      return response;
    })
    .catch(err => {
      console.log(err);
      setServiceStatus(2);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDelete(index) {
    setCoins(coins.filter((_, i) => i !== index))
  }

  function showModal(coin) {
    setModalInfo([coin.name, coin.description, coin.link])
    setModalVisibility(true)
  }

  return (
    <div className="App px-2 md:px-5">
      <header className="mb-5 px-2 py-8 border-b-2 border-accent">
        <p className="text-2xl md:text-4xl font-semibold text-accent text-center md:text-left uppercase">Crypto Dashboard</p>
      </header>

      <div className="opsbar flex flex-row justify-end px-2 sm:px-10">
        <p className="text-gray-200 font-light p-2 italic mr-2">Last Updated: {lastUpdated}</p>
        <div className="refresh-btn text-gray-200 border border-accent rounded-lg py-2 px-3 cursor-pointer transition-all duration-120 hover:border-transparent hover:bg-gray-200 hover:text-gray-800" onClick={fetchData}>
          <FontAwesomeIcon icon={faRedo}/>
        </div>
      </div>

      <div className="content">
        <div id="coin-info" className="sm:px-20 flex flex-col md:flex-row justify-around flex-wrap">
          { serviceStatus === 0 && coins.length === 0 &&
            <div id="loader" className="relative flex justify-center items-center">
              <div id="outer-ring" className="w-40 h-40 border-4 border-accent rounded-full"></div>
              <div id="mover" className="w-40 h-40 rounded-full absolute top-0 overflow-hidden">
                <div className="w-20 h-20 bg-background absolute"></div>
                <div className="w-20 h-20 bg-background top-1/2 left-1/2 absolute"></div>
              </div>
              <p className="text-accent text-lg md:text-2xl uppercase absolute">Loading</p>
            </div>
          }
          { serviceStatus === 2 &&
            <div className="px-10 py-20 flex justify-center items-center md:w-1/2 xl:w-1/3 bg-trueGray-500 border border-accent rounded-2xl">
                <p className="text-gray-200 text-2xl font-semibold uppercase">No Crypto-Currencies Found</p>
            </div>
          }
          { serviceStatus === 1 && coins.map((coin, index) => (
            <CoinBlock key={key++} coin={coin} index={index} onDelete={handleDelete} showInfo={() => showModal(coin)}></CoinBlock>
          ))}
        </div>
      </div>

      <footer className="mt-10 px-4 md:px-20 py-5 border-t-2 border-accent">
        <p className="text-lg font-light text-gray-200 text-left uppercase">Disclaimer:</p>
        <p id="disclaimer" className="text-gray-200 text-left mt-2">
          This website was developed for educational purposes. It is not a commercial product. All data shown on this website are collected from {Constants.source1_link} &amp; {Constants.source2_link}. The recommendations provided in this website are not to be taken as financial advice. Any decision taken by the user is is their own responsibility.
        </p>
        <p id="credits" className="text-gray-200 text-left mt-5">
          <em className="text-accent not-italic">Data Credits:</em> {Constants.source1_link}, {Constants.source2_link}<br/>
          <em className="text-accent not-italic">Icons Credits:</em> {Constants.fontawesome_link}<br/>
          <em className="text-accent not-italic">Tech Stack:</em> {Constants.react_link}, {Constants.tailwind_link}, {Constants.django_link}<br/>
        </p>
        <p className="text-gray-200 mt-5">Made with <FontAwesomeIcon id="heart-icon" icon={faHeart} className="text-red-600"/> by {Constants.profile_link}</p>
      </footer>

      <DescriptionModal name={modalInfo[0]} description={modalInfo[1]} link={modalInfo[2]} handleClose={() => {setModalVisibility(false)}} show={modalVisible}></DescriptionModal>
    </div>
  );
}

export default App;
