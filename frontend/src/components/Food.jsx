import React, { useState, useEffect } from "react";
import "../style/food.css";
import axios from "axios";
import { toast } from "react-toastify";

export const Food = () => {
  const [post, setPost] = useState([]);

  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  useEffect(() => {
    axios
      .get(`/api/v1/getProduct/Food`, config)
      .then((response) => {
        setPost(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`/api/v1/deleteProduct/${id}`, config)
      .then((response) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data.message, "blabla");
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="wrapper" id="food-wrapper">
      <h1> We provide better service with better opportunities</h1>
      <div className="input-wrapper">
        <a href="/homepage" className="food-back">
          &#8249; BACK
        </a>
        <div className="fa fa-search box-in"></div>
        <input type="text" placeholder="Search" className="head-box" />
        {/* <div className="fa fa-times"></div> */}

        <input type="search" placeholder="Post Here" className="head-box" />
        <button className="food-btn">
          <a className="fa fa-home food-btn" href="/homepage"></a>
        </button>
        <button className="food-btn">
          <a className="fa fa-comment food-btn" href="/post"></a>
        </button>
        <button className="food-btn">
          <a href="/settings" className="fa fa-bars food-btn"></a>
        </button>
      </div>

      <div className="food-content">
        <body>
          <h2> FOOD SERVICE AVAILABLE</h2>
          <div className="box">
            <div className="food-box">
              <img
                src="/foodvolunteer.jpg"
                width="300"
                height="263"
                alt="Food"
                className="food-img"
              />
              <div className="food-p">
                Foodbank provides food relief to more than a million people each
                month. We are the pantry to Australia charity sector, providing
                food and groceries to 2,950 frontline charities.We know one in
                three people struggling to get enough food for their household
                needs are new to the situation. There is no shame in asking for
                help. And now we are doing food distribution in HUNTSVILLE AREA.
                Life happens to us all and we’re here for everyone. If you want
                to register you can contact via below details provided. For more
                information let us know.
              </div>
            </div>

            <div className="food-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52942.57761808448!2d151.05587303018385!3d-33.969124376842714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b9962cbe4d7f%3A0xf017d68f9f23ca0!2sWoodville%20Park!5e0!3m2!1sen!2sau!4v1652884611039!5m2!1sen!2sau"
                width="300"
                height="200"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="food-map"
              ></iframe>

              <div className="food-list">
                <h3>Get in touch with us</h3>
                <ul>
                  <li>Foodbank NSW and ACT</li>
                  <li>50 Owen Street,Glendenning NSW 2761</li>
                  <li>02 9756 3099</li>
                  <li> office@foodbanknsw.org.au</li>
                  <li>Associated partner with Emergency Support Services</li>
                </ul>
              </div>
            </div>
          </div>
          <h2> POSTS</h2>

          {post.map((post) => (
            <div className="box">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{post.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{post.category}</h6>
                  <p class="card-text">{post.description}</p>
                  <button
                    class="btn btn-danger"
                    onClick={() => {
                      deleteHandler(post._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </body>
      </div>
    </div>
  );
};
