import React, { Fragment } from 'react'

export default function XucXac(props) {
    let {XucXacItem} = props
    return (
        <Fragment><img src={XucXacItem.hinhAnh} alt='' className='pt-5' style={{ width: '50%' }} /></Fragment>
    )
}
