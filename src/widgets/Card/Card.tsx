import React from "react";
import "./Card.css";
import Tag from '../../shared/UIkit/Tag/Tag.tsx';
import Ready from '../../shared/UIkit/Status/Ready/Ready.tsx';

export default function Card() {
    return (
        <section className="card">
            <h3>Title</h3>
            <div><span>Description</span></div>
            <div className="card-status-div">
                <Ready />
            </div>
            <div className="card-tag-div">
                <div><Tag /></div>
                <div><Tag /></div>
            </div>
        </section>
    )
}