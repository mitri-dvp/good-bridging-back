import React, { memo, useEffect, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { Block, Container, ALink } from './components';
import PageTitle from '../../components/PageTitle';
import lottie from 'lottie-web';
import animationData from '../../assets/lottie/lottie.json'


const HomePage = ({ global: { plugins }, history: { push } }) => {
  const lottieRef = useRef()

  useEffect(() => {
    if(lottieRef.current != undefined) {
      lottie.loadAnimation({
        container: lottieRef.current, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [])

  return (
    <>
      <PageTitle title={'Homepage'} />
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              style={{
                width: "100%",
                position: "relative",
                marginBottom: "34px",
                background: "#ffffff",
                padding: "30px",
                boxShadow: "0 2px 4px 0 #e3e9f3",
                borderRadius: "3px",
                lineHeight: "18px",
                height: "60rem",
                position: "relative",
                background: "linear-gradient(110deg, rgba(1,21,47,0) 50%, rgb(1, 21, 47) 50.1%)",
              }}
            >
              <h1>Welcome to Strapi!</h1>
              <p
                style={{
                  marginTop: "30px",
                  lineHeight: "25px",
                  width: '50rem',
                }}
              >
                Feel free to get right into what matters, your content! <br/>
                We hope you'll enjoy this modern, powerful, and easy-to-use CMS!
              </p>
              <a
                href="https://www.goodbridging.net/"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  height: "30px",
                  padding: "0 15px",
                  fontWeight: 600,
                  fontSize: "1.3rem",
                  borderRadius: "2px",
                  cursor: "pointer",
                  outline: "0",
                  backgroundColor: "#007EFF",
                  border: "1px solid #007EFF",
                  color: "#ffffff",
                  display: "flex",
                  width: "max-content",
                  alignItems: "center",
                  marginTop: "30px",
                  textDecoration: "none",
                }}
              >
                Go To Website
              </a>
              <div
                ref={lottieRef}
                style={{
                  height: "45rem",
                  position: "absolute",
                  right: "0",
                  bottom: "0",
                }}
              ></div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
