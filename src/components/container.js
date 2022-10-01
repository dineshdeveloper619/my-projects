import React from "react";
import Card from "./card";
import '../App.css';
// images
import zain from "../images/zain.jpg"
import grid from "../images/assessment.jpg"
import netflix from "../images/netflix.jpg"
import iphone from "../images/iphone.jpg"
import loading from "../images/loading.jpg"
import dark from "../images/nightmode.jpg"
import wallpaper from "../images/wallpaperapi.jpg"
import productCard from "../images/bike.jpg"
import calc from "../images/calc.jpg"
import form from "../images/form.jpg"
import town from "../images/3dtown.png"

const Container=()=>{
    return(
        <div className="container">
            <h1 id="title">Projects</h1>
            <div className="freelance">
            <h1 id="title1">Freelance Projects</h1>
            <div className="card-container">
                <Card cardimg={zain} title="Zain Enterprises" link="https://www.zainenterprises.info/"/>
            </div>
            </div>
            <div className="demo">
                <h1 id="title1">Demo Projects</h1>
            <div className="card-container">
            <Card cardimg={town} title="3D Town" link="https://3d-town-css.netlify.app/" />
            <Card cardimg={grid} title="Grid Layout" link="https://gridlayout-assessment.netlify.app/" />
            <Card cardimg={netflix} title="Netflix Clone" link="https://netflix-clone-basicdemo.netlify.app/"/>
            <Card cardimg={iphone} title="Iphone 14" link="https://iphone14-demo.netlify.app/"/>
            <Card cardimg={loading} title="Loading animation" link="https://loading-anim.netlify.app/"/>
            <Card cardimg={dark} title="Light/Dark Mode" link="https://dark-light-mode02.netlify.app/"/>
            <Card cardimg={wallpaper} title="Wallpaper Api" link="https://wallpaper-search01.netlify.app/"/>
            <Card cardimg={productCard} title="3D Product card" link="https://product-3d-card.netlify.app/"/>
            <Card cardimg={calc} title="Mobile Calc" link="https://mobile-calc.netlify.app/"/>
            <Card cardimg={form} title="Form Validation" link="https://form-validation-submit.netlify.app/"/>
            </div>
            </div>
        </div>
    )
}

export default Container;