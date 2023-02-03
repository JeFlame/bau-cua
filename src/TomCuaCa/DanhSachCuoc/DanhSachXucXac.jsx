import React from 'react'
import XucXac from './XucXac'
import { useDispatch, useSelector } from 'react-redux'

export default function DanhSachXucXac(props) {

  const dispatch = useDispatch();
  const mangXucXac = useSelector(state => state.BauCuaReducer.mangXucXac)

  return (
    <div className='text-center'>

      <div className='bg-white mt-2' style={{ width: '350px', height: '350px', borderRadius: '300px' }}>
        <div className='row'>
          <div className='col-8' style={{paddingLeft:'80px'}}> <XucXac XucXacItem={mangXucXac[0]}></XucXac> </div>
          <div className='col-12'/>
          <div className='col-6 text-center'> <XucXac XucXacItem={mangXucXac[1]}></XucXac> </div>
          <div className='col-6 text-center'> <XucXac XucXacItem={mangXucXac[2]}></XucXac> </div>
        </div>
      </div>
        <button id='xocBat' className='btn btn-success' style={{ display:'none', marginTop:'20px', borderRadius:'20%', marginLeft:'130px' }} onClick={() => { document.getElementById('moBat').style.display = 'none'; document.getElementById('xocBat').style.display = 'none'; document.getElementById('upBat').style.display = 'block'; dispatch({type: 'XOC_DIA'});}}>
          <h1>MỞ</h1>
        </button>

        <button id='upBat' className='btn btn-primary' style={{display:'block', marginTop:'20px', borderRadius:'20%', marginLeft:'130px'}} onClick={() => { document.getElementById('moBat').style.display = 'block'; document.getElementById('xocBat').style.display = 'none';}}>
          <h1>ÚP</h1>
        </button>

      <div id='moBat' style={{ width: '350px', height: '350px', borderRadius: '50%', background: 'red', position: 'absolute', top: '8px', display: 'none' }} className='image' onClick={()=>{ document.getElementById('xocBat').style.display = 'block'; document.getElementById('upBat').style.display = 'none';}} >
        <i className='text-center fa fa-hand-pointer-o' style={{fontSize:'100px', marginTop:'120px'}} aria-hidden='true'></i>
      </div>
    </div>
  )
}
