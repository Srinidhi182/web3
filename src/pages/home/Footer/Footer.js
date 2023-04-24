// this page contains footer
// include contributors avatar pic, name, social media handles .
import React from "react";
import "./Footer.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>Explore</h4>
            <a href="/Explore">
              <p>Explore</p>
            </a>
            {/* <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
            </a> */}
          </div>
          <div className="sb_fotter-links_div">
            <h4>Liveauction</h4>
            <a href="/Liveauction">
              <p>Liveauction</p>
            </a>
            {/* <a href="/resource">
              <p>resource</p>
            </a>
            <a href="/resource">
              <p>resource</p>
            </a> */}
          </div>
          <div className="sb_footer-links_div">
            <h4>New Updates</h4>
            <a href="/Slides">
              <p>New Updates</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Core-Team</h4>
            <a href="/Team">
              <pre>
                <p>SRINIDHI</p>
                <p>SHIVKUMAR</p>
                <p>SHASHANK</p>
                <p>PALANIRAJ</p>
              </pre>
            </a>
            {/* <a href="/about">
              <p>about</p>
            </a>
            <a href="/about">
              <p>about</p>
            </a> */}
          </div>
          <div className="sb_footer-links_div">
            <h4>coming soon</h4>
            <div className="socialmedia">
              <p>
                <FaFacebookSquare></FaFacebookSquare>
              </p>
              <p>
                <FaInstagramSquare></FaInstagramSquare>
              </p>
              <p>
                <FaLinkedin></FaLinkedin>
              </p>
              <p>
                <FaTwitterSquare></FaTwitterSquare>
              </p>
              <p>
                <FaGithubSquare></FaGithubSquare>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
        </div>
        <div className="sb_footer-below-links">
          <a href="/terms">
            <div>
              <p>Terms and conditions</p>
            </div>
          </a>
          <a href="/privacy">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a href="/security">
            <div>
              <p>Security</p>
            </div>
          </a>
          <a href="/cookie">
            <div>
              <p>cookie declaration</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
