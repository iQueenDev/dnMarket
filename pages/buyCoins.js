import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FaEthereum, FaUserAlt } from "react-icons/fa";

//INTERNAL IMPORT
import Style from "../styles/buyCoins.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img";
import { Button, Loader } from "../components/componentsindex";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const buyCoins = () => {
  const {
    currentAccount,
    accountBalance,
    transferEther,
    getAllTransactions,
    transaction,
    loading,
  } = useContext(NFTMarketplaceContext);
  const [transferAmount, setTransferAmount] = useState("");
  const [transferAccount, setTransferAccount] = useState("");
  const [message, setMessage] = useState("");
  const [readMessage, setReadMessage] = useState("");
  const [openBox, setOpenBox] = useState(false);

  useEffect(() => {
    getAllTransactions();
    // console.log(transaction);
  });
  return (
    <div className={Style.buy}>
      <div className={Style.buy_box}>
        <h1>Buy Yo Coins</h1>
        <p>
          Hey!!! U want to try something New & exciting here. U can now move your coins around.
        </p>
        <div className={Style.buy_box_box}>
          <div className={Style.buy_box_box_left}>
            <Image
              src={images.buy}
              alt="buy"
              width={400}
              height={400}
            />
          </div>
          <div className={Style.buy_box_box_right}>
            <h2>Now you can buy coins</h2>
            <div className={Style.buy_box_box_right_info}>
              <p className={Style.buy_box_box_right_info_desktop}>
                Account: {currentAccount}
              </p>
              <p className={Style.buy_box_box_right_info_mobile}>
                Account: {currentAccount.slice(1, 25)}...
              </p>
              <p>Ballance: {accountBalance} </p>
            </div>

            {/* //TRANSFER FIELDS */}
            <div className={Style.buy_box_box_right_box}>
              <div className={formStyle.Form_box_input}>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <FaUserAlt />
                  </div>
                  <input
                    type="text"
                    placeholder="address*"
                    onChange={(e) => setTransferAccount(e.target.value)}
                  />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <FaEthereum />
                  </div>
                  <input
                    type="number"
                    min={1}
                    placeholder="ETH*"
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className={formStyle.Form_box_input}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Any transfer message or note can go here (optional)"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {loading ? (
                <Loader />
              ) : (
                <Button
                  btnName="Buy Yo Coins"
                  handleClick={() =>
                    transferEther(transferAccount, transferAmount, message)
                  }
                  classStyle={Style.button}
                />
              )}
            </div>
          </div>
        </div>

        {/* //TRANSACTION HISTORY */}
        <h1 className={Style.buy_box_h1}>Transaction History</h1>
        <p>
          Okay this area shows that you were successful at the transfer.
        </p>
        <div className={Style.buy_box_history}>
          {transaction.map((el, i) => (
            <div className={Style.buy_box_history_item} key={i + 1}>
              <Image src={images.transferImage} width={200} height={200} />
              <div className={Style.buy_box_history_item_info}>
                <p>
                  {" "}
                  <span>Transfer ID:</span> #{i + 1}
                </p>
                <p>
                  <span>Amount:</span> {el.amount} ETH
                </p>
                <p>
                  <span>From:</span>
                  {el.addressFrom.slice(1, 20)}..
                </p>
                <p>
                  <span>To:</span> {el.addressTo.slice(1, 20)}..
                </p>
                <Button
                  btnName="Message"
                  handleClick={() => (
                    setReadMessage(el.message), setOpenBox(true)
                  )}
                  classStyle={Style.readButton}
                />
              </div>
            </div>
          ))}
        </div>
        {openBox == false ? (
          ""
        ) : (
          <div className={Style.messageBox} onClick={() => setOpenBox(false)}>
            <div className={Style.messageBox_box}>
              <h1>Transaction Message</h1>
              <p>{readMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default buyCoins;
