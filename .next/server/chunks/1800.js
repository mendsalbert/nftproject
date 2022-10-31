"use strict";
exports.id = 1800;
exports.ids = [1800];
exports.modules = {

/***/ 1800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ AuthContext),
  "Z": () => (/* binding */ utils_AuthProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@walletconnect/web3-provider"
var web3_provider_ = __webpack_require__(4137);
var web3_provider_default = /*#__PURE__*/__webpack_require__.n(web3_provider_);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./config.js
// export const donationAddress = '0xaa25AC8362144090FE4Efed098946635CD80fecD';
//polygon
// export const donationAddress = '0xd1C14349664831a670cB5DCB030E012BB40cCd1f';
// export const donationAddress = '0xCa42c23f1E51631d8Cc56B646B3d2CD9781Ae826';
const donationAddress = "0x23ae37E07c6Fdb33143ffC479A4F39780F97ef0b";

// EXTERNAL MODULE: external "walletlink"
var external_walletlink_ = __webpack_require__(4866);
var external_walletlink_default = /*#__PURE__*/__webpack_require__.n(external_walletlink_);
;// CONCATENATED MODULE: ./artifacts/contracts/NFT.sol/NFT.json
const NFT_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_image","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchItemsListed","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"image","type":"string"}],"internalType":"struct NFT.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"image","type":"string"}],"internalType":"struct NFT.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"image","type":"string"}],"internalType":"struct NFT.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthUsd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"resellToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"updateListingPrice","outputs":[],"stateMutability":"payable","type":"function"}]}');
// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__(2840);
;// CONCATENATED MODULE: ./lib/chains.ts
const supportedChains = [
    {
        name: "Localhost Testnet",
        short_name: "eth",
        chain: "ETH",
        network: "localhost",
        chain_id: 1337,
        network_id: 1,
        rpc_url: "",
        native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "Ethereum Mainnet",
        short_name: "eth",
        chain: "ETH",
        network: "mainnet",
        chain_id: 1,
        network_id: 1,
        rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "Ethereum Ropsten",
        short_name: "rop",
        chain: "ETH",
        network: "ropsten",
        chain_id: 3,
        network_id: 3,
        rpc_url: "https://ropsten.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "Ethereum Rinkeby",
        short_name: "rin",
        chain: "ETH",
        network: "rinkeby",
        chain_id: 4,
        network_id: 4,
        rpc_url: "https://rinkeby.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "Ethereum G\xf6rli",
        short_name: "gor",
        chain: "ETH",
        network: "goerli",
        chain_id: 5,
        network_id: 5,
        rpc_url: "https://goerli.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "RSK Mainnet",
        short_name: "rsk",
        chain: "RSK",
        network: "mainnet",
        chain_id: 30,
        network_id: 30,
        rpc_url: "https://public-node.rsk.co",
        native_currency: {
            symbol: "RSK",
            name: "RSK",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "Ethereum Kovan",
        short_name: "kov",
        chain: "ETH",
        network: "kovan",
        chain_id: 42,
        network_id: 42,
        rpc_url: "https://kovan.infura.io/v3/%API_KEY%",
        native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "Ethereum Classic Mainnet",
        short_name: "etc",
        chain: "ETC",
        network: "mainnet",
        chain_id: 61,
        network_id: 1,
        rpc_url: "https://ethereumclassic.network",
        native_currency: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "POA Network Sokol",
        short_name: "poa",
        chain: "POA",
        network: "sokol",
        chain_id: 77,
        network_id: 77,
        rpc_url: "https://sokol.poa.network",
        native_currency: {
            symbol: "POA",
            name: "POA",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "POA Network Core",
        short_name: "skl",
        chain: "POA",
        network: "core",
        chain_id: 99,
        network_id: 99,
        rpc_url: "https://core.poa.network",
        native_currency: {
            symbol: "POA",
            name: "POA",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "xDAI Chain",
        short_name: "xdai",
        chain: "POA",
        network: "dai",
        chain_id: 100,
        network_id: 100,
        rpc_url: "https://dai.poa.network",
        native_currency: {
            symbol: "xDAI",
            name: "xDAI",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "Callisto Mainnet",
        short_name: "clo",
        chain: "callisto",
        network: "mainnet",
        chain_id: 820,
        network_id: 1,
        rpc_url: "https://clo-geth.0xinfra.com/",
        native_currency: {
            symbol: "CLO",
            name: "CLO",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "Binance Smart Chain",
        short_name: "bsc",
        chain: "smartchain",
        network: "mainnet",
        chain_id: 56,
        network_id: 56,
        rpc_url: "https://bsc-dataseed1.defibit.io/",
        native_currency: {
            symbol: "BNB",
            name: "BNB",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    },
    {
        name: "Matic",
        short_name: "MTC",
        chain: "smartchain",
        network: "mainnet",
        chain_id: 80001,
        network_id: 80001,
        rpc_url: "	https://rpc-mumbai.matic.today",
        native_currency: {
            symbol: "MATIC",
            name: "MATIC",
            decimals: "18",
            contractAddress: "",
            balance: ""
        }
    }, 
];
/* harmony default export */ const chains = (supportedChains);

;// CONCATENATED MODULE: ./lib/utilities.ts

function getChainData(chainId) {
    if (!chainId) {
        return null;
    }
    const chainData = chains.filter((chain)=>chain.chain_id === chainId
    )[0];
    if (!chainData) {
        throw new Error("ChainId missing or not supported");
    }
    const API_KEY = "460f40a260564ac4a4f4b3fffb032dad";
    if (chainData.rpc_url.includes("infura.io") && chainData.rpc_url.includes("%API_KEY%") && API_KEY) {
        const rpcUrl = chainData.rpc_url.replace("%API_KEY%", API_KEY);
        return {
            ...chainData,
            rpc_url: rpcUrl
        };
    }
    return chainData;
}
function ellipseAddress(address = "", width = 6) {
    if (!address) {
        return "";
    }
    return `${address.slice(0, width)}...${address.slice(-width)}`;
}
function numDaysBetween(d1, d2) {
    var diff = Math.abs(d1 - d2.getTime() / 1000);
    console.log("d1", d1);
    console.log("d2", d2);
    if (diff <= 0) {
        return 0;
    } else {
        return diff / (60 * 60 * 24);
    }
}
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec", 
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
}
function greeter() {
    var d = new Date();
    var hour = d.getHours();
    if (hour >= 6 && hour < 12) {
        return "Good Morning";
    } else if (hour > +12 && hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}
//truncate
function truncateString(str, length) {
    return str.length > length ? str.substring(0, length - 3) + "..." : str;
}

;// CONCATENATED MODULE: ./utils/AuthProvider.tsx










const authContextDefaultValues = {
    provider: null,
    signer: null,
    web3Provider: null,
    contract: null,
    address: null,
    chainId: null,
    ethprice: null,
    connect: null,
    disconnect: null,
    logout: ()=>{}
};
const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)(authContextDefaultValues);
const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";
const providerOptions = {
    walletconnect: {
        package: (web3_provider_default()),
        options: {
            infuraId: INFURA_ID
        }
    },
    "custom-walletlink": {
        display: {
            logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
            name: "Coinbase",
            description: "Connect to Coinbase Wallet (not Coinbase App)"
        },
        options: {
            appName: "Coinbase",
            networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
            chainId: 1
        },
        package: (external_walletlink_default()),
        connector: async (_, options)=>{
            const { appName , networkUrl , chainId  } = options;
            const walletLink = new (external_walletlink_default())({
                appName
            });
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
            await provider.enable();
            return provider;
        }
    }
};
let web3Modal;
if (false) {}
const initialState = {
    contract: null,
    signer: null,
    provider: null,
    web3Provider: null,
    address: null,
    chainId: null,
    ethprice: null
};
function reducer(state, action) {
    switch(action.type){
        case "SET_WEB3_PROVIDER":
            return {
                ...state,
                provider: action.provider,
                web3Provider: action.web3Provider,
                address: action.address,
                chainId: action.chainId
            };
        case "SET_CONTRACT":
            return {
                ...state,
                contract: action.contract
            };
        case "SET_SIGNER":
            return {
                ...state,
                signer: action.signer
            };
        case "SET_ADDRESS":
            return {
                ...state,
                address: action.address
            };
        case "SET_CHAIN_ID":
            return {
                ...state,
                chainId: action.chainId
            };
        case "SET_ETH_PRICE":
            return {
                ...state,
                ethprice: action.ethprice
            };
        case "RESET_WEB3_PROVIDER":
            return initialState;
        default:
            throw new Error();
    }
}
const AuthProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, initialState);
    const { provider: provider1 , web3Provider: web3Provider1 , contract: contract1 , signer: signer1 , address: address1 , chainId: chainId1 , ethprice ,  } = state;
    const router = (0,router_.useRouter)();
    async function loadContracts() {
        /* create a generic provider and query for unsold market items */ // const provider = new ethers.providers.JsonRpcProvider();
        const provider = new external_ethers_.ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/");
        // 'https://rpc-mumbai.matic.today'
        // https://polygon-mumbai.g.alchemy.com/v2/2bGIFu-iEnl9RvAOTe1ddZI2gBnuYQGS'
        // 'https://rpc-mumbai.matic.today'
        // ' https://rpc-mumbai.maticvigil.com/'
        // 'https://kovan.infura.io/v3/745fcbe1f649402c9063fa946fdbb84c'
        // 'https://rpc-mumbai.maticvigil.com'
        // 'https://kovan.infura.io/v3/745fcbe1f649402c9063fa946fdbb84c'
        // 'https://kovan.infura.io/v3/745fcbe1f649402c9063fa946fdbb84c'
        const contract = new external_ethers_.ethers.Contract(donationAddress, NFT_namespaceObject.Mt, provider);
        // const getUsd = await contract?.getEthUsd();
        // let number = Number(getUsd.toString());
        // let ethUSDPrice = ethers.utils.formatUnits(number, 8);
        let ethUSDPrice = "1721.00";
        dispatch({
            type: "SET_ETH_PRICE",
            ethprice: ethUSDPrice
        });
        const { chainId  } = await provider.getNetwork();
        if (chainId) {
            dispatch({
                type: "SET_CONTRACT",
                contract: contract
            });
        // const data = await contract.donationCount();
        } else {
            window.alert("Donation contract not deployed to detected network");
        }
    }
    const connect = (0,external_react_.useCallback)(async function() {
        // console.log('button of connect clicked');
        // This is the initial `provider` that is returned when
        // using web3Modal to connect. Can be MetaMask or WalletConnect.
        const provider = await web3Modal.connect();
        // We plug the initial `provider` into ethers.js and get back
        // a Web3Provider. This will add on methods from ethers.js and
        // event listeners such as `.on()` will be different.
        const web3Provider = new external_ethers_.providers.Web3Provider(provider);
        const signer = web3Provider.getSigner();
        const address = await signer.getAddress();
        const network = await web3Provider.getNetwork();
        // console.log(signer);
        dispatch({
            type: "SET_WEB3_PROVIDER",
            provider,
            web3Provider,
            address,
            chainId: network.chainId
        });
    }, []);
    const disconnect = (0,external_react_.useCallback)(async function() {
        await web3Modal.clearCachedProvider();
        if (provider1?.disconnect && typeof provider1.disconnect === "function") {
            await provider1.disconnect();
        }
        dispatch({
            type: "RESET_WEB3_PROVIDER"
        });
    }, [
        provider1
    ]);
    const logout = ()=>{
        alert("something");
    };
    (0,external_react_.useEffect)(()=>{
        loadContracts();
        if (web3Modal.cachedProvider) {
            connect();
        }
    }, [
        connect
    ]);
    (0,external_react_.useEffect)(()=>{
        if (provider1?.on) {
            const handleAccountsChanged = (accounts)=>{
                // console.log('accountsChanged', accounts);
                dispatch({
                    type: "SET_ADDRESS",
                    address: accounts[0]
                });
            };
            const signer_ = web3Provider1.getSigner();
            const signer = new external_ethers_.ethers.Contract(donationAddress, NFT_namespaceObject.Mt, signer_);
            dispatch({
                type: "SET_SIGNER",
                signer: signer
            });
            const handleChainChanged = (_hexChainId)=>{
                window.location.reload();
            };
            const handleDisconnect = (error)=>{
                console.log("disconnect", error);
                disconnect();
            };
            provider1.on("accountsChanged", handleAccountsChanged);
            provider1.on("chainChanged", handleChainChanged);
            provider1.on("disconnect", handleDisconnect);
            // Subscription Cleanup
            return ()=>{
                if (provider1.removeListener) {
                    provider1.removeListener("accountsChanged", handleAccountsChanged);
                    provider1.removeListener("chainChanged", handleChainChanged);
                    provider1.removeListener("disconnect", handleDisconnect);
                }
            };
        }
    }, [
        provider1,
        disconnect
    ]);
    const chainData = getChainData(chainId1);
    const contextValue = {
        provider: provider1,
        web3Provider: web3Provider1,
        contract: contract1,
        signer: signer1,
        address: address1,
        chainId: chainId1,
        ethprice,
        connect,
        disconnect,
        logout
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: contextValue,
        children: children
    });
};
/* harmony default export */ const utils_AuthProvider = (AuthProvider);


/***/ })

};
;