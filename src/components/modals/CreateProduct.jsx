import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {createProduct, fetchTypes} from "../../http/productAPI";
import {observer} from "mobx-react-lite";

const CreateProduct = observer(() => {
  const {product} = useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [article, setArticle] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}]);
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number));
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addProduct = () => {
    const formData = new FormData()
    formData.append('name', name);
    formData.append('article', article);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('typeId', product.selectedType.id);
    formData.append('info', JSON.stringify(info))
    createProduct(formData);
  }

  return (
    <div>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropProduct">
        Добавить товар
      </button>


      <div className="modal fade" id="staticBackdropProduct" data-bs-backdrop="static" data-bs-keyboard="false"
           tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Добавить новый товар</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                  {product.selectedType.name || "Выберите типа товара"}
                </button>
                <ul className="dropdown-menu">
                  {product.types.map(type =>
                    <li onClick={() => product.setSelectedType(type)} key={type.id}><span className="dropdown-item">{type.name}</span></li>
                  )}
                </ul>
              </div>

              <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Введите название продукта"/>
              <input onChange={e => setArticle(e.target.value)} value={article} type="text" placeholder="Артикул"/>
              <input onChange={e => setPrice(Number(e.target.value))} value={price} type="number" placeholder="Введите стоимость"/>
              <input onChange={selectFile} type="file"/>

              <hr/>

              <button onClick={addInfo} className="btn btn-outline-secondary">Добавить характеристики</button>
              {info.map(i => {
                return <div key={i.number} className="row">
                  <div className="col-4">
                    <input value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} type="text" placeholder="Введите название свойства"/>
                  </div>
                  <div className="col-4">
                    <input value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} type="text" placeholder="Введите описание свойства"/>
                  </div>
                  <div className="col-4">
                    <button onClick={() => removeInfo(i.number)} className="btn btn-outline-danger">Удалить</button>
                  </div>
                </div>
              })}

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={addProduct} type="button" className="btn btn-outline-success" data-bs-dismiss="modal">Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CreateProduct;
