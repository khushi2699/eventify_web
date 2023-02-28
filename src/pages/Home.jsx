import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { Layout, Menu, Table, Button, Dropdown, Pagination } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../index.scss';
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder.js";
import Favorite from "@mui/icons-material/Favorite.js";
import ShareIcon from "@mui/icons-material/Share.js";
import SendIcon from "@mui/icons-material/Send.js";
import {toast, ToastContainer} from "react-toastify";

  const { Content } = Layout;
const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const notify1 = () => toast("You Like this event");
  const notify2 = () => toast("You Share this event");

  const TrendingEventBox = [
    {
      key: '1',
      icon: 'public/Images/Event1.png',
      hoverIcon: 'public/Images/Event1.png',
      title: `${t('Unicycling Race')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Unicycling race - March 23,2023',
      eventInfo: "Unicycling race age dependent, winners will get excited prizes. It's a fund raising event",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event1.1.jpg',
      image2: 'Images/Event1.2.jpg',
      image3: 'Images/Event1.3.png',
      image4: 'Images/Event1.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      key: '2',
      icon: 'public/Images/Event2.jpg',
      hoverIcon: 'public/Images/Event2.jpg',
      title: `${t('Night Party')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Bollywood Night Party',
      eventInfo: "Open for all age groups. Come and Enjoy yourself",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event2.1.jpg',
      image2: 'Images/Event2.2.jpg',
      image3: 'Images/Event2.3.jpg',
      image4: 'Images/Event2.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      key: '3',
      icon: 'public/Images/Event3.jpg',
      hoverIcon: 'public/Images/Event3.jpg',
      title: `${t('Twsift Party')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Dance part - T party',
      eventInfo: "Forget stress and dance on T-swift's song",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event2.1.jpg',
      image2: 'Images/Event2.2.jpg',
      image3: 'Images/Event2.3.jpg',
      image4: 'Images/Event2.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      key: '4',
      icon: 'public/Images/Event4.jpg',
      hoverIcon: 'public/Images/Event4.jpg',
      title: `${t('Kite Fight')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Kite Heist - 2023',
      eventInfo: "Fight for your kite and pride",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event4.1.jpg',
      image2: 'Images/Event4.2.jpg',
      image3: 'Images/Event4.3.jpg',
      image4: 'Images/Event4.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      key: '5',
      icon: 'public/Images/Event5.jpg',
      hoverIcon: 'public/Images/Event5.jpg',
      title: `${t('Colors hub')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Festival of Colors',
      eventInfo: "Come with your family and get painted with colors",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event5.1.jpg',
      image2: 'Images/Event5.2.jpg',
      image3: 'Images/Event5.3.jpg',
      image4: 'Images/Event5.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

  ];

    const OtherEventsBox = [
      {
      key: '1',
      icon: 'public/Images/Event1.png',
      hoverIcon: 'public/Images/Event1.png',
      title: `${t('Unicycling Race')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Unicycling race - March 23,2023',
      eventInfo: "Unicycling race age dependent, winners will get excited prizes. It's a fund raising event",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event1.1.jpg',
      image2: 'Images/Event1.2.jpg',
      image3: 'Images/Event1.3.png',
      image4: 'Images/Event1.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
      {
      key: '2',
      icon: 'public/Images/Event2.jpg',
      hoverIcon: 'public/Images/Event2.jpg',
      title: `${t('Night Party')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Bollywood Night Party',
      eventInfo: "Open for all age groups. Come and Enjoy yourself",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event2.1.jpg',
      image2: 'Images/Event2.2.jpg',
      image3: 'Images/Event2.3.jpg',
      image4: 'Images/Event2.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
      {
      key: '3',
      icon: 'public/Images/Event3.jpg',
      hoverIcon: 'public/Images/Event3.jpg',
      title: `${t('Twsift Party')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Dance part - T party',
      eventInfo: "Forget stress and dance on T-swift's song",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event2.1.jpg',
      image2: 'Images/Event2.2.jpg',
      image3: 'Images/Event2.3.jpg',
      image4: 'Images/Event2.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
      {
      key: '4',
      icon: 'public/Images/Event4.jpg',
      hoverIcon: 'public/Images/Event4.jpg',
      title: `${t('Kite Fight')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Kite Heist - 2023',
      eventInfo: "Fight for your kite and pride",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event4.1.jpg',
      image2: 'Images/Event4.2.jpg',
      image3: 'Images/Event4.3.jpg',
      image4: 'Images/Event4.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
      {
      key: '5',
      icon: 'public/Images/Event5.jpg',
      hoverIcon: 'public/Images/Event5.jpg',
      title: `${t('Colors hub')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Festival of Colors',
      eventInfo: "Come with your family and get painted with colors",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event5.1.jpg',
      image2: 'Images/Event5.2.jpg',
      image3: 'Images/Event5.3.jpg',
      image4: 'Images/Event5.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
      {
      key: '6',
      icon: 'public/Images/Event6.jpg',
      hoverIcon: 'public/Images/Event6.jpg',
      title: `${t('Concert')}`,
      price: '40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Citadel Hill Halifax',
      url: '/event',
      detailedTitle: 'Sound and Light show',
      eventInfo: "Come and get lost in the world of music and lights",
      organizer: 'Halifax Community Center',
      runtime: '3',
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event6.1.jpg',
      image2: 'Images/Event6.2.jpg',
      image3: 'Images/Event6.3.jpg',
      image4: 'Images/Event6.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    ];

    const OrganizationBox = [
      {
          key: '1',
          icon: 'Images/Organizer1.jpg',
          hoverIcon: 'Images/Organizer1.jpg',
          title: `${t('Halifax Community Center')}`,
          price: '40',
          url: '/organizerProfile',
          nav: 'true'
        },
        {
          key: '2',
          icon: 'Images/Organizer2.jpg',
          hoverIcon: 'Images/Organizer2.jpg',
          title: `${t('The comedy factory')}`,
          price: '30',
          url: '/organizerProfile',
          nav: 'false'
        },
      ];
  const TempList = [
    {
      key: '1',
      icon: 'public/Images/Event1.png',
      hoverIcon: 'public/Images/Event1.png',
      title: `${t('Unicycling Race')}`,
      price: 'Price: $40',
      date: 'March 23,2023',
      time: '4 PM Onwards',
      location: 'Location: Halifax',
      url: '/deleteEvent',
      detailedTitle: 'Unicycling race - March 23,2023',
      eventInfo: "Unicycling race age dependent, winners will get excited prizes. It's a fund raising event",
      organizer: 'Halifax Community Center',
      runtime: '3',
      likes: 100,
      ticket: 'Mobile e-ticket',
      image1: 'Images/Event1.1.jpg',
      image2: 'Images/Event1.2.jpg',
      image3: 'Images/Event1.3.png',
      image4: 'Images/Event1.4.jpg',
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      key: '2',
      icon: 'public/Images/Event2.jpg',
      hoverIcon: 'public/Images/Event2.jpg',
      title: `${t('Night party')}`,
      price: 'Price: $30',
      location: 'Location: Halifax',
      date: 'Feb 2,2023',
      likes: 200,
      url: '/deleteEvent',
    },
    {
      key: '3',
      icon: 'public/Images/Event3.jpg',
      hoverIcon: 'public/Images/Event3.jpg',
      title: `${t('Tswift Party')}`,
      price: 'Price: $20',
      date: 'Feb 1,2023',
      location: 'Location: Halifax',
      likes: 300,
      url: '/deleteEvent',
    },
    {
      key: '4',
      icon: 'public/Images/Event4.jpg',
      hoverIcon: 'public/Images/Event4.jpg',
      title: `${t('Kite fight')}`,
      price: 'Price: $10',
      date: 'Feb 1,2023',
      location: 'Location: Halifax',
      likes: 400,
      url: '/deleteEvent',
    },
    {
      key: '5',
      icon: 'public/Images/Event5.jpg',
      hoverIcon: 'public/Images/Event5.jpg',
      title: `${t('Colors hub')}`,
      price: 'Price: $40',
      date: 'Feb 1,2023',
      location: 'Location: Halifax',
      likes: 500,
      url: '/deleteEvent',
    },
    {
      key: '6',
      icon: 'public/Images/Event6.jpg',
      hoverIcon: 'public/Images/Event6.jpg',
      title: `${t('Concert')}`,
      price: 'Price: $40',
      date: 'Feb 1,2023',
      location: 'Location: Halifax',
      likes: 600,
      url: '/deleteEvent',
    }

  ];
      const contactNo = "+1 (902) 989-7898"
      const orgAbout = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      const email = "vs439755@dal.ca"
      const location = "Halifax"
      const organizer1 = {id:1,organizationName:"Halifax community center",managedBy:"Vaishwi Patel", occupation:"Club Owner", about:orgAbout ,contactNo:contactNo, email:email, location:location, subscribers:100,state:"Halifax, NS", isAuthenticated:true}
      const organizer2 = {id:2,organizationName:"The comedy factory",managedBy:"Arpitkumar Patel", occupation:"Dalhousie Event Manager", about:orgAbout ,contactNo:contactNo, email:email, location:location, subscribers:70,state:"Halifax, NS",isAuthenticated:true}

  const handleRedirection = (element) => {
    element.nav === "true" ? navigate(element.url, {state : {organizer:organizer1}}) : navigate(element.url, {state : {organizer:organizer2}});
  }

  const searchNavigation = (element) => {
    navigate(element);
  }

  useEffect(() =>{
    localStorage.setItem("events", JSON.stringify(TempList));
    console.log("home",JSON.parse(localStorage.getItem("events")))
  },[])

  return (
    <Layout>
        <React.Fragment>
          <Content>
            <div className="layout-padding">
                <div>
                    <Paper
                          sx={{
                            position: 'relative',
                            backgroundColor: 'grey.800',
                            color: '#fff',
                            mb: 4,
                            height: 330,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: 'url(Images/carousel.jpg)',
                          }}
                        >
                          {/* Increase the priority of the hero background image */}
                          {<img style={{ display: 'none' }} src={'Images/Image1.png'} alt={'Images/Image1.png'} />}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              bottom: 0,
                              right: 0,
                              left: 0,
                              backgroundColor: 'rgba(0,0,0,.4)',
                            }}
                          />
                          <Grid container>
                            <Grid item md={6}>
                              <Box
                                sx={{
                                  position: 'relative',
                                  p: { xs: 3, md: 6 },
                                  pr: { md: 0 },
                                }}
                              >
                                <Typography sx = {{ fontFamily: 'Raleway' }}component="h2" variant="h3" color="inherit" gutterBottom>
                                  FIND YOUR NEXT EVENT
                                </Typography>
                                <Button onClick={() => searchNavigation('/search')}  >EXPLORE</Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Paper>
                </div>
                <div>
                    <h1>Trending Events</h1>

                    <div className="top-boxes full-width horizontal-scroll">
                        {TrendingEventBox.map((element, index) => (
                            <div className="full-width single-box">
                                <div className="full-width" key={element.key} onClick={() => handleRedirection(element)}>
                                    <img className=" center-img" src={element.icon} alt="product" />
                                    <div className="earning-text full-width">{element.title}</div>
                                    <div className="earning-text full-width new-line" >
                                        {element.price}
                                    </div>
                                    <div className="earning-text full-width new-line">{element.date}</div>
                                    <div className="earning-text full-width">{element.location}</div>
                                </div>
                              <div>
                                <Checkbox style={{padding: "inherit"}} icon={<FavoriteBorder />}
                                          checkedIcon={<Favorite />}
                                          name="checkedH"
                                          onClick={notify1}

                                />
                                <Checkbox style={{padding: "inherit", borderSpacing: "2"}} icon={<ShareIcon />}
                                          checkedIcon={<ShareIcon />}
                                          name="checkedH"
                                          onClick={notify2}
                                />
                              </div>
                            </div>
                            ))}
                    </div>
              </div>

              <div className="section-wrapper">
                    <h3 >Other Events</h3>
                    <div className="top-boxes full-width horizontal-scroll">
                        {OtherEventsBox.map((element, index) => (
                            <div className="full-width single-box">
                                <div className="full-width" key={element.key} onClick={() => handleRedirection(element)}>
                                  <img className=" center-img" src={element.icon} alt="product" />
                                  <div className="earning-text full-width">{element.title}</div>
                                  <div className="earning-text full-width">{element.price}</div>
                                  <div className="earning-text full-width">{element.date}</div>
                                  <div className="earning-text full-width">{element.location}</div>
                                </div>
                              <div>
                                <Checkbox style={{padding: "inherit"}} icon={<FavoriteBorder />}
                                          checkedIcon={<Favorite />}
                                          name="checkedH"
                                          onClick={notify1}

                                />
                                <Checkbox style={{padding: "inherit", borderSpacing: "2"}} icon={<ShareIcon />}
                                          checkedIcon={<ShareIcon />}
                                          name="checkedH"
                                          onClick={notify2}
                                />
                              </div>
                            </div>
                        ))}
                    </div>
              </div>

              <div className="section-wrapper">
                    <h3>Organizations</h3>
                    <div className="top-boxes full-width horizontal-scroll">
                      {OrganizationBox.map((element, index) => (
                        <div className="full-width single-box">
                            <div className="full-width" key={element.key} onClick={() => handleRedirection(element, true)}>
                                <img className=" center-img" src={element.icon} alt="product" />
                                <div className="earning-text full-width">{element.title}</div>
                            </div>
                        </div>
                      ))}
                    </div>
              </div>
            </div>
            <ToastContainer />
          </Content>
        </React.Fragment>
    </Layout>
  );
};

export default Dashboard;
