module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 6721975,
      gasPrice: 15000000

    },
    solc: {
      optimizer: {
          enabled: true,
          runs: 200
      }
  }
  }
};
