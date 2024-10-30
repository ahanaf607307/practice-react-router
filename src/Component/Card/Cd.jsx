import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Cd({user}) {
    const{id,name , phone , email , username} = user
    const navigate = useNavigate()
    const handleContact = () => {
navigate(`/contact/${id}`)
    }
  return (
    <div>
        <div>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <p className='text-gray-500 font-semibold'>UserName : {username}</p>
              <p className='text-gray-500 font-semibold'>Email : {email}</p>
              
              <div class="card-actions justify-end">
                <Link to={`/contact/${id}`} ><button class="btn text-white font-bold bg-teal-500">Contact Now</button></Link>
                <button onClick={handleContact} className="btn">Btn Contact</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cd