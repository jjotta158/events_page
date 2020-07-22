import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import {FaFilter} from 'react-icons/fa'

import './style.css'

const DatePicker = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const dispatch = useDispatch();

    const setDateInitial = (startDate) => {
        dispatch({type: 'SET_START_DATE', start:startDate})
    }
    const setDateFinish = (endDate) => {
        dispatch({type:'SET_END_DATE', end:endDate})
    }
    const cleanFilters = () => {
        let startDate = document.getElementsByName("startDate")[0]
        let endDate = document.getElementsByName("endDate")[0]
        startDate.value = ""
        endDate.value = ""
        dispatch({type: 'CLEAN_DATES'})
    }

    return (
        <>
            <div id="datePickerButton">
                <button onClick={ () => setModalVisibility(true)}>
                    <FaFilter></FaFilter>
                </button>
            </div>
            <Modal show={modalVisibility} onHide={() => setModalVisibility(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Escolha Qual O Intervalo de Datas Você Desja</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-box">
                        <label for="startDate" className="dateInputLabel">Data Inicial </label>
                        <input type="date" onChange={(e) => setDateInitial(e.timeStamp)} name="startDate"></input>
                    </div>
                    <div className="input-box">
                        <label for="endDate" className="dateInputLabel">Data Final </label>
                        <input type="date" onChange ={(e) => setDateFinish(e.timeStamp)} name="endDate"></input>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => cleanFilters()}>
                        Limpar Filtro
                    </Button>
                    <Button variant="primary" onClick={() => setModalVisibility(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DatePicker;