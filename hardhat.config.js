require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "mumbai",
    solidity: "0.8.17",
    networks: {
        hardhat: {            
        },
        mumbai: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/-7VjZKjfJCuaGOgyX3CQtQOsKuBtODTz", 
            url: process.env.ALCHEMY_URL,
            accounts: [`${process.env.PRIVATE_KEY}`],
        },
    },
};  