import React from 'react'

export default function QuanCuoc(props) {
    const { quanCuoc } = props;

    return (
        <div className=''>
            <img src={quanCuoc.hinhAnh} alt='' srcset='' className='d-block' style={{ width: '100%'}} />
        </div>
    )
}
