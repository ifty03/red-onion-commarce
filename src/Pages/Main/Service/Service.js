import React from "react";
import service1 from "../../../images/chef-cook-food-33614.png";
import service2 from "../../../images/adult-blur-blurred-background-687824.png";
import service3 from "../../../images/architecture-building-city-2047397.png";
import icon1 from "../../../images/icons/Group 204.png";
import icon2 from "../../../images/icons/Group 1133.png";
import icon3 from "../../../images/icons/Group 245.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Service = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div className="my-10">
        <h2 className="text-3xl font-sans font-semibold">Whay You Chose Us</h2>
        <p className="font-sans font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsa
          voluptate velit iusto et debitis libero?
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        <div>
          <div>
            <img src={service2} alt="this is chef shef" />
          </div>

          <div className="flex my-8">
            <div className="mr-2">
              <img className="w-24" src={icon1} alt="" />
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="text-xl font-semibold mb-5">
                  this is service name
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                ipsum esse ipsa facilis soluta debitis nobis sequi tempore velit
                quis!
              </p>

              <div className="flex items-center my-6">
                <p className="mr-3 text-blue-500 font-semibold cursor-pointer">
                  See more
                </p>
                <BsFillArrowRightCircleFill className="text-rose-600 text-3xl"></BsFillArrowRightCircleFill>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={service1} alt="this is chef shef" />
          </div>

          <div className="flex my-8">
            <div className="mr-2">
              <img className="w-24" src={icon2} alt="" />
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="text-xl font-semibold mb-5">
                  this is service name
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                ipsum esse ipsa facilis soluta debitis nobis sequi tempore velit
                quis!
              </p>

              <div className="flex items-center my-6">
                <p className="mr-3 text-blue-500 font-semibold cursor-pointer">
                  See more
                </p>
                <BsFillArrowRightCircleFill className="text-rose-600 text-3xl"></BsFillArrowRightCircleFill>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={service3} alt="this is chef shef" />
          </div>

          <div className="flex my-8">
            <div className="mr-2">
              <img className="w-24" src={icon3} alt="" />
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="text-xl font-semibold mb-5">
                  this is service name
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                ipsum esse ipsa facilis soluta debitis nobis sequi tempore velit
                quis!
              </p>

              <div className="flex items-center my-6">
                <p className="mr-3 text-blue-500 font-semibold cursor-pointer">
                  See more
                </p>
                <BsFillArrowRightCircleFill className="text-rose-600 text-3xl"></BsFillArrowRightCircleFill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
