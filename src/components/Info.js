import React, { useState } from 'react';
import video from '../video/video1.mp4';
// Accordion MUI
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//Icons MUI
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import './Info.css';

function Info() {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="info__cards">
      {/* first card */}
      <div className="info__card">
        <div className="info__cardContainer">
          <div className="info__cardText">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and
              more.
            </h2>
          </div>
          <div className="info__cardAnimation--tv">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="monitor"
            />
            <div className="info__video--1">
              <video autoPlay muted loop playsInline>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* second card */}
      <div className="info__card">
        <div className="info__cardContainer reverse">
          <div className="info__cardText">
            <h1>Download your shows to watch offline.</h1>
            <h2>Save your favorites easily and always have something to watch.</h2>
          </div>
          <div className="info__cardAnimation--iphone">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="phone"
            />
            <div className="info__animation">
              <div className="info__downloadImg">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt=""
                />
              </div>
              <div className="info__downloadText">
                <p className="info__downloadText--p1">Stranger Things</p>
                <p className="info__downloadText--p2">Downloading...</p>
              </div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="download-gif"
                className="info__downloadGif"
              />
            </div>
          </div>
        </div>
      </div>

      {/* third card */}
      <div className="info__card">
        <div className="info__cardContainer">
          <div className="info__cardText">
            <h1>Watch everywhere.</h1>
            <h2>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without
              paying more.
            </h2>
          </div>
          <div className="info__cardAnimation--devices">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="monitor"
            />
            <div className="info__video--2">
              <video autoPlay muted loop playsInline>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* fourth card */}
      <div className="info__card">
        <div className="info__cardContainer reverse">
          <div className="info__cardText">
            <h1>Create profiles for kids.</h1>
            <h2>
              Send kids on adventures with their favorite characters in a space made just for
              them—free with your membership.
            </h2>
          </div>
          <div className="info__cardAnimation--kids">
            <img
              src="https://occ-0-38-769.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
              alt="kids"
            />
          </div>
        </div>
      </div>

      {/* fifth card */}
      <div className="info__accordion">
        <h1>Frequently Asked Questions</h1>
        {/* 1 */}
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={
              expanded === 'panel1' ? <CloseIcon fontSize="large" /> : <AddIcon fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion__text">What is Netflix?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion__text">
              Netflix is a streaming service that offers a wide variety of award-winning TV shows,
              movies, anime, documentaries, and more on thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want without a single commercial – all
              for one low monthly price. There's always something new to discover and new TV shows
              and movies are added every week!
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 2 */}
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={
              expanded === 'panel2' ? <CloseIcon fontSize="large" /> : <AddIcon fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion__text">How much does Netflix cost?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion__text">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all
              for one fixed monthly fee. Plans range from USD5.99 to USD13.99 a month. No extra
              costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 3 */}
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={
              expanded === 'panel3' ? <CloseIcon fontSize="large" /> : <AddIcon fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion__text">Where can I watch?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion__text">
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the
              web at netflix.com from your personal computer or on any internet-connected device
              that offers the Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
              <br />
              <br />
              You can also download your favorite shows with the iOS, Android, or Windows 10 app.
              Use downloads to watch while you're on the go and without an internet connection. Take
              Netflix with you anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 4 */}
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={
              expanded === 'panel4' ? <CloseIcon fontSize="large" /> : <AddIcon fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion__text">How do I cancel?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion__text">
              Netflix is flexible. There are no pesky contracts and no commitments. You can easily
              cancel your account online in two clicks. There are no cancellation fees – start or
              stop your account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 5 */}
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={
              expanded === 'panel5' ? <CloseIcon fontSize="large" /> : <AddIcon fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion__text">What can I watch on Netflix?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion__text">
              Netflix has an extensive library of feature films, documentaries, TV shows, anime,
              award-winning Netflix originals, and more. Watch as much as you want, anytime you
              want.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 6 */}
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={
              expanded === 'panel6' ? <CloseIcon fontSize="large" /> : <AddIcon fontSize="large" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion__text">Is Netflix good for kids?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion__text">
              The Netflix Kids experience is included in your membership to give parents control
              while kids enjoy family-friendly TV shows and movies in their own space.
              <br />
              <br />
              Kids profiles come with PIN-protected parental controls that let you restrict the
              maturity rating of content kids can watch and block specific titles you don’t want
              kids to see.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Info;
