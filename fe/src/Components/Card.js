import { faBookAtlas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Card({ name, value, color }) {
    return (
        <div className="col mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body student">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                                {name}
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {value}
                            </div>
                        </div>
                        <div className="col-auto">
                            <FontAwesomeIcon icon={faBookAtlas} size={"2x"} style={{ color: "#dddfeb" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card