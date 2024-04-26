import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
// import apilist from "../apilist/apilist";
import './Trending.css';

const TrendingVideos = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const getTrendingVideos = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/trendingvideos`);
      setTrendingVideos(response.data.trendingVideos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingVideos();
  }, []);

  console.log(trendingVideos);

  return (
    <div>
      <section className='nav_bar_component'>
        <Navbar />
      </section>
      <section className=" container-fluid mt-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className='col-md-9 container'>
            <section className='banner_component text-center d-flex align-items-center justify-content-center'>
              <h3 className='text-white h1'>Synergy Watch</h3>
            </section>
            <section className='thumbnails_layout '>
              <div className='container '>
                <div className='row'>
                   {trendingVideos.map((video) => (
                    <div className="col-md-4 my-3">
                      <Link to={`/video/${video._id}`}>
                        <div className="thumbnail_image" class="img-fluid ">
                          <img src={video.thumbnail_url} className='img1' />
                        </div>

                        <div className="home_thumbnail_title">
                          <h6 className="my-3">{video.title}</h6>
                        </div>

                        <div className="home_channel_description d-flex ">
                          <div className="channel_logo">
                            <img src={video.channel_logo} className="w-35 " />
                          </div>

                          <div className="channel_description">
                            <p>{video.channel_name}</p>
                            <p>{video.channel_subscribers}</p>
                            <p>{video.video_published_date}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
               </div>
              </div>
            </section>
          </div>
        </div>

      </section>

    </div>
  );
};

export default TrendingVideos;