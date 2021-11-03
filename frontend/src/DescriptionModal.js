import {React} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import parse from 'html-react-parser'
import './DescriptionModal.css'

function DescriptionModal({name, description, link,handleClose, show}) {   

    return (
        <div className={`modal-overlay inset-0 fixed bg-black bg-opacity-60 flex xl:items-center justify-center ${!show && "hidden"}`}>
            <div className="desc-modal md:w-2/3 p-5 pb-10 border-4 border-accent rounded-3xl bg-gray-200 overflow-y-auto">
                <div className="title-bar flex flex-row justify-between mb-5">
                    <div className="modal-name flex-grow border-b border-gray-800 py-1">
                        <a href={link} 
                          target="_blank" 
                          rel="nooperner noreferrer">
                            <p className="text-2xl text-left text-gray-800 font-semibold uppercase">{name}</p>  
                        </a> 
                    </div>
                    <div className="close-btn bg-red-600 transition-all duration-120 hover:bg-red-500 text-gray-50 text-xl rounded-3xl inline-block px-4 py-2 ml-5" onClick={handleClose}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </div>
                <div className="modal-content px-2 xl:px-5">
                    <p className="text-left text-gray-800 leading-relaxed md:leading-loose">{description !== "" && parse(description)}</p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionModal
