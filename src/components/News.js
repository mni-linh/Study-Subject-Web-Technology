import React from 'react';
import '../App.css';
const NewsDetail = (props) => {
    return (
        // <div className="mautin">
        <div className="mautin">
            <h3> {props.tieuDe} </h3>
            <div> {props.noiDung} </div>
        </div>
    )
};

export const News = () => {
    const danhSachTin = [
        {tieuDe: 'COVID19', noiDung: 'Ảnh hưởng của COVID-19 quá lớn'},
        {tieuDe: 'Chỉ thị 15', noiDung: 'Đi được Bà Rịa'},
    ];
    return(
        <>
            <h2> My Blogs </h2>
            <NewsDetail tieuDe="Mưa quá" noiDung="Quá xá mưa" />
            {danhSachTin.map((item) => {
                return <NewsDetail tieuDe={item.tieuDe} noiDung={item.noiDung} />

            })}
        </>
    )
};