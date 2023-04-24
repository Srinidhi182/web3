import React from "react";
import "./Wallet.css";

import { Dataproducts } from "../../../data.js";

const Wallet = ({ myid, open, handleOpen, handleClose }) => {
  if (!open) return null;
  return (
    <div onClick={handleClose} className="overlay">
      {Dataproducts.map((item, i) =>
        myid === item.id ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="modalContainer"
          >
            <img src={item.image} alt={item.title} />
            <div className="modalRight">
              <p onClick={handleClose} className="closeBtn">
                X
              </p>
              <div className="content">
                <p>Your transaction is credited from your wallet !</p>
                <h5>{item.price}</h5>
                <p>want to explore more ?</p>
              </div>
              <div className="btnContainer">
                <button className="btnPrimary">
                  <span className="bold">YES</span>, I Love to
                </button>
                <button className="btnPrimary">
                  <span className="bold">NO</span>, I dont
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Wallet;
