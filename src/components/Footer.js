import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contents">
        <p>
          Questions?{' '}
          <span className="footer__call">
            <a href="tel:+7-800-100-9668">Call 8-800-100-9668</a>
          </span>
        </p>
        <div className="footer__links">
          <ul>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Account</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
        <h6> &copy; Netflix</h6>
      </div>
    </div>
  );
}

export default Footer;
