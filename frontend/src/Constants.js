import React from 'react'

const constants = {
    source1_link: <a href="https://www.coingecko.com/en" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    className="text-gray-200 italic">CoinGecko</a>,
    source2_link: <a href="https://coinpaprika.com/" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    className="text-gray-200 italic">CoinPaprika</a>,
    accent_source1_link: <a href="https://www.coingecko.com/en" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    className="text-accent italic underline">CoinGecko</a>,
    accent_source2_link: <a href="https://coinpaprika.com/" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    className="text-accent italic underline">CoinPaprika</a>,
    fontawesome_link: <a href="https://fontawesome.com/" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    className="text-gray-200 italic">FontAwesome</a>,
    django_link: <a href="https://www.djangoproject.com/" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    className="text-gray-200 italic">Django</a>,
    react_link: <a href="https://reactjs.org/" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    className="text-gray-200 italic">React JS</a>,
    tailwind_link: <a href="https://tailwindcss.com/" 
                    target="_blank" 
                    rel="nooperner noreferrer" 
                    className="text-gray-200 italic">Tailwind CSS</a>,
    profile_link: <a href="http://prtkgoswami.github.io/" 
                    target="_blank" 
                    rel="nooperner noreferrer">Pratik Goswami</a>,
    sample_data: [
                    {
                        code: "btc",
                        name: "Bitcoin",
                        prices: ["26739", "27849"],
                        change_percents: ["0.09", "0.07"],
                        description: "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
                        link: "#",
                    },
                    {
                        code: "eth",
                        name: "Ethereum",
                        prices: ["48934", "48942"],
                        change_percents: ["-0.56", "-0.45"],
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lectus vulputate ex facilisis feugiat. Donec a egestas urna, in gravida dui. Phasellus sollicitudin a sapien ut placerat. Integer mauris erat, interdum nec mauris non, ultricies fringilla libero. Vestibulum scelerisque nibh in dui fermentum, sit amet vehicula purus sodales. Sed condimentum risus id ante dapibus, hendrerit auctor est interdum. Pellentesque ut pellentesque lorem. Donec aliquet tellus non odio scelerisque scelerisque ut sed sem. Donec vel urna eu ante sagittis euismod ac vitae libero. Vestibulum ut sapien pulvinar, tristique dui at, consequat erat. Quisque eleifend posuere ex eget consectetur. Nam vitae venenatis diam, convallis dictum lectus. Nunc scelerisque, turpis vel ultricies tempus, leo tortor iaculis nulla, et placerat diam tortor at lorem. Fusce hendrerit vel quam ut tristique. Cras nulla ligula, mollis sed nisl eget, porttitor rutrum ligula. ",
                        link: "#",
                    },
                ],
};

export default constants;
