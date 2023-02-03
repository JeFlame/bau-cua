import React from 'react'
import QuanCuoc from './QuanCuoc'
import { useSelector } from 'react-redux';

export default function DanhSachQuanCuoc() {

    const danhSachCuoc = useSelector(state => state.BauCuaReducer.danhSachCuoc)
    const renderDanhSachCuoc = ()=> {
        return danhSachCuoc.map((sp,index) =>{
            return  <div className='col-4 pb-3' key={index}>
                <QuanCuoc quanCuoc={sp}></QuanCuoc>
            </div>
        })
    }

    return (
        <div className='row'>
            {renderDanhSachCuoc()}
        </div>
    )
}
