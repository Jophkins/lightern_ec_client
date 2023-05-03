import React, {useState} from 'react';
import {createType} from "../../http/productAPI";

const CreateType = () => {

  const [value, setValue] = useState('');

  const addType = () => {
    createType({name: value}).then(data =>
      setValue('')
    )}

  return (
    <div>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropType">
        Добавить тип товара
      </button>


      <div className="modal fade" id="staticBackdropType" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Добавить новый тип</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="введите название типа"/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={addType} className="btn btn-outline-success" data-bs-dismiss="modal">Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateType;
