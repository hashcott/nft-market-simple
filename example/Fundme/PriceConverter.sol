// SPDX-License-Identifier: MIT
pragma solidity >= 0.8;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    /**
     * Returns the latest answer.
     */
    function getPrice() internal view returns (uint256) {
        AggregatorV3Interface dataFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
        
        (
            /* uint80 roundID */,
            int256 answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        return uint256(answer * 1e10); // 157523862029
    }

    function getConversionRate(uint256 _amount) internal view  returns (uint256)  {
        uint256 ethPrice = getPrice();
        // 1xxx_000000000000000000 ETH / USD  => Wei / USD 157523862029
        // 1   _000000000000000000 ETH
        uint256 ethAmountInUsd = (ethPrice * _amount) / 1e18;
        return ethAmountInUsd;
    }
}