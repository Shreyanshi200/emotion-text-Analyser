import "./header.css"
import {
    faFaceSadCry,
    faFaceGrinBeam,
    faFaceAngry,
    faFaceFrown,
    faFaceSurprise
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <>
    <div className="header">
        <div className="headerContainer">
        <h1>Emotion Text Analyzer</h1>
            <p>Use sentiment analysis to quickly detect emotions in text data.</p>
            <div className="headerIcons">
            <span className="icon"><FontAwesomeIcon  icon={faFaceSadCry} size="3x"/></span>
            <span className="icon"><FontAwesomeIcon icon={faFaceGrinBeam}size="3x" /></span>
            <span className="icon"><FontAwesomeIcon icon={faFaceAngry} size="3x"/></span>
            <span className="icon"><FontAwesomeIcon icon={faFaceFrown}size="3x" /></span>
            <span className="icon"><FontAwesomeIcon icon={faFaceSurprise}size="3x" /></span>
            </div>
        </div>
    </div>
    <div className="solution-block">
      <div className="container">
        <div className="content">
          <h2>What is Emotion Analysis?</h2>
          <div className="text-wrapper">
            <p className="content-text">
            In some cases the sentiment analysis might not enough understand what the customer actually feels.
            <br/>
            <br/>
Emotion analysis is the process of identifying and analyzing the underlying emotions expressed in textual data.
            <br/>
            <br/>
Emotion analytics can extract the text data from multiple sources to analyze the subjective information and understand the emotions behind it.
            <br/>
            <br/>
            </p>
            <p className="content-text">
            Our advanced machine learning techniques can help you analyze the emotions expressed by the author in a piece of text.
            <br/>
            <br/>
It can be easily done based on the types of feelings expressed in the text such as fear, anger, happiness, sadness, love, inspiring, or neutral.
<br/>
            <br/>
Gather and analyze large volumes of text data to analyze the emotions of your followers, customers, and more.
<br/>
            <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="analysis-benifit">
      <div className="container">
        <div className="ab-h">
          <h2>How can your Business Benefit From a <span className="orange-span">Emotion Analyzer</span>  tool?</h2>
        </div>
        <div className="ab-left">
          <div className="ab-row">
            <div className="ab-col">
              <div className="ab-header">
                <h4>Improve <span className="orange-span">customer</span>experience</h4>
              </div>
              <div className="ab-desc">
                <p>Analyze employee feedback data to examine their happiness. Emotion analysis helps to identify early problems and resolve them before they escalate any further. Avoid losing talented individuals.</p>
              </div>
            </div>
            <div className="ab-col">
              <div className="ab-img">
                <img src="https://www.bytesview.com/images/products/emotion/improve-customer-experience.png" alt="Improve Customer Experience" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="ab-right">
          <div className="ab-row">
            <div className="ab-col">
              <div className="ab-img">
                <img src="https://www.bytesview.com/images/products/emotion/monitor-brand-reputation.png" alt="Monitor brand Reputation" className="img-fluid" />
              </div>
            </div>
            <div className="ab-col">
              <div className="ab-header">
                <h4><span className="orange-span">Monitor</span>brand reputation</h4>
              </div>
              <div className="ab-desc">
                <p>Compile brand related data from multiple sources and analyze it to identify the emotions of the users. Emotion analysis will help you gauge your brand's reputation as conveyed by the users. Define alerts that can tarnish your brand's reputation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
