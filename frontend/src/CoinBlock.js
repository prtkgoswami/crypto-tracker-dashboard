import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretUp, faCaretDown, faInfo, faTimes} from '@fortawesome/free-solid-svg-icons'
import {faBtc, faEthereum} from '@fortawesome/free-brands-svg-icons'
import Constants from './Constants'

function CoinBlock({coin, index, onDelete, showInfo}) {
    const shouldBuy = coin.change_percents[0] < 0 || coin.change_percents[1] < 0;
    const price1 = parseFloat(coin.prices[0]);
    const price2 = parseFloat(coin.prices[1]);

    function deleteItem() {
        onDelete(index);
    }

    return (
        <div className="px-3 py-5 sm:px-5 md:w-1/2 xl:w-1/3 bg-trueGray-500 shadow-2xl">
            <div id="titlebar" className="flex flex-row justify-between">
                <p className="text-gray-100 font-bold text-lg text-left uppercase border-b border-accent flex-grow">{coin.name} - {coin.code}</p>
                <p className="text-gray-100 text-4xl text-right uppercase pl-3">
                    {coin.code === "btc" && <FontAwesomeIcon icon={faBtc}/> }
                    {coin.code === "eth" && <FontAwesomeIcon icon={faEthereum}/> }
                </p>
            </div>

            <div id="prices" className="flex flex-row justify-around mt-10">
                <div className="src1 w-3/5 border-2 rounded-xl border-accent py-5 mx-4">
                    <p className="text-xs mb-2">{Constants.accent_source1_link}</p>
                    <p className={`text-xl lg:text-3xl
                                    ${parseFloat(coin.change_percents[0]) < 0 && "text-sell"}
                                    ${parseFloat(coin.change_percents[0]) >= 0 && "text-buy"}`}>
                        {"$" + price1.toLocaleString()}
                    </p>
                    <p className={`text-md mt-4
                                    ${parseFloat(coin.change_percents[0]) < 0 && "text-sell"}
                                    ${parseFloat(coin.change_percents[0]) >= 0 && "text-buy"}`}>
                        {coin.change_percents[0] + "% "}
                        {parseFloat(coin.change_percents[0]) < 0 && <FontAwesomeIcon icon={faCaretDown}/>}
                        {parseFloat(coin.change_percents[0]) >= 0 && <FontAwesomeIcon icon={faCaretUp}/>}
                    </p>
                </div>
                <div className="src2 w-3/5 border-2 rounded-xl border-accent py-5 mx-4">
                    <p className="text-xs mb-2">{Constants.accent_source2_link}</p>
                    <p className={`text-xl lg:text-3xl
                                    ${parseFloat(coin.change_percents[1]) < 0 && "text-sell"}
                                    ${parseFloat(coin.change_percents[1]) >= 0 && "text-buy"}`}>
                        {"$" + price2.toLocaleString()}
                    </p>
                    <p className={`text-md mt-4
                                    ${parseFloat(coin.change_percents[1]) < 0 && "text-sell"}
                                    ${parseFloat(coin.change_percents[1]) >= 0 && "text-buy"}`}>
                        {coin.change_percents[1] + "% "}
                        {parseFloat(coin.change_percents[1]) < 0 && <FontAwesomeIcon icon={faCaretDown}/>}
                        {parseFloat(coin.change_percents[1]) >= 0 && <FontAwesomeIcon icon={faCaretUp}/>}
                    </p>
               </div>
            </div>
            
            <div className="recommendation mt-5">
                <p className="text-gray-100 text-md font-light uppercase text-left">recommended</p>
                <p className="text-gray-100 text-lg font-medium text-left pl-5">
                    {shouldBuy && "Buy from "}{!shouldBuy && "Sell at "}
                    {shouldBuy && (price1 <= price2) && Constants.accent_source1_link}
                    {shouldBuy && (price1 > price2) && Constants.accent_source2_link}
                    {!shouldBuy && (price1 >= price2) && Constants.accent_source1_link}
                    {!shouldBuy && (price1 < price2) && Constants.accent_source2_link}
                </p>
            </div>

            <div className="block-buttons flex flex-row mt-5 justify-center">
                <div className="info-button cursor-pointer border border-accent rounded-xl transition-all 
                                duration-250 hover:border-transparent hover:bg-blue-500 w-1/2 p-2 mx-2 text-white"
                    onClick={showInfo}
                >
                    <p className="hidden md:block">Info</p>
                    <FontAwesomeIcon className="md:hidden" icon={faInfo}/>
                </div>
                <div className="delete-button cursor-pointer border border-accent rounded-xl transition-all 
                                duration-250 hover:border-transparent hover:bg-red-500 w-1/2 p-2 mx-2 text-white hidden"
                    onClick={deleteItem}
                >
                    <p className="hidden md:block">Delete</p>
                    <FontAwesomeIcon className="md:hidden" icon={faTimes}/>
                </div>
            </div>
        </div>
    )
}

export default CoinBlock
