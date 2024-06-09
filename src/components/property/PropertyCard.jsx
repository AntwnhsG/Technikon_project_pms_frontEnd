import React, { useEffect } from "react";
import {retrievePropertyApi,deletePropertyApi} from "../../api/PropertyApiService";
import "./PropertyCard.css"
import { useState } from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import house from "../img/house.png";
import flat from "../img/flat.png";
import maisonette from "../img/maisonette.png"
import apartmentBuilding from "../img/apartment-building.png"
import AddProperty from "./AddProperty";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import AddRepair from "./AddRepair";
import moment from "moment/moment";
import EditProperty from "../editCards/EditPropertyCard";
import down from "../img/down.png";
import sort from "../img/sort.png";
import filter from "../img/filter.png";
import plus from "../img/+.png";
import downloadimg from "../img/download.png";
import { Link } from "react-router-dom";


const PropertyCard = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const tin = userData.tin;
  const [properties, setProperties] = useState([]);
  const [propertyId, setPropertyId] = useState(1);
  const [propertyE9,setPropertyE9] = useState(1)
  const [image,setImage] = useState(house)
  const [propertyType, setPropertyType] = useState();

  const [showModalProperty, setShowModalProperty] = useState(false);
  const [showModalRepair, setShowModalRepair] = useState(false);
  const [showModalEdit,setShowModalEdit] = useState(false)

  const toggleModalProperty = () => {
    setShowModalProperty((show1) => !show1);
  };

  const editProperty = (e9)=>{
    setPropertyE9(e9)
    console.log(propertyE9)
    toggleModalEdit()
  }

  const toggleModalEdit = () => {
    setShowModalEdit((show3) => !show3);
  };

  const toggleModalRepair = () => {
    setShowModalRepair((show2) => !show2);
  };

  const addRepair = (id) => {
    console.log("hi")
    console.log(id)
    setPropertyId(id)
    console.log(propertyId)
    toggleModalRepair();
    
  }

  const getProperty = () => {
    retrievePropertyApi(tin).then((response) => {
      setProperties(response.data.data);
      console.log(properties);
    });
  };

  const addProperty = () => {
    toggleModalProperty();
    getProperty();
  };

  const deleteProperty = (propertyId) => {
    deletePropertyApi(propertyId);
    setProperties(properties.filter((property) => property.id !== propertyId));
  };

  const getImage=(pt)=>{
    console.log(pt)
      if(pt === "FLAT"){
        return (<Card.Img variant="top" src={flat} />)
      }else if(pt === "APARTMENT_BUILDING"){
        return (<Card.Img variant="top" src={apartmentBuilding} />)
      }else if(pt === "MAISONETTE"){
        return (<Card.Img variant="top" src={maisonette} />)
      }else{
        return (<Card.Img variant="top" src={house} />)
      }
  }

  useEffect(() => {
    getProperty();
  }, [showModalEdit,showModalProperty]);

  return (
    <div>
      <div>
        <div style={{ columnCount: "1", marginTop: "20px",marginBottom:"40px" }}>
          <img src={down} alt="down" className="down" />
          <b className="all">ALL</b>
          <b className="filter">
            Filter:
            <img className="filterimg" src={filter} alt="filter"/>
          </b>
          <b className="az">
            <img className="azimg" src={down} />
            A-Z
          </b>
          <b className="sort">
            SORT:
            <img className="sortimg" src={sort} />
          </b>
          <Link onClick={addProperty}>
              <b className="plus">
              ADD PROPERTY
            
              <img className="plusimg" src={plus}></img>
            
          </b>
          </Link>
          <b className="download">
            DOWNLOAD
            <img className="downloadimg" src={downloadimg} />
          </b>
        </div>
      </div>
      <EditProperty showModal={showModalEdit} toggleModal={toggleModalEdit} e9={propertyE9}/>
      <AddProperty showModal={showModalProperty} toggleModal={toggleModalProperty} />
      <AddRepair showModal={showModalRepair} toggleModal={toggleModalRepair} id={propertyId} />
      <ListGroup horizontal style={{ marginLeft: "5%" }}>
        {properties.map((property) => {
          return (
            <ListGroup.Item style={{ margin: "8px" }} key={property.e9Number}>
              <Card style={{ width: "18rem" }}>
                {/* {() => {setPropertyType(property.propertyType)}} */}
                {getImage(property.propertyType)}
                
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>{property.propertyType}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Const. Date: {moment(property.yearOfConstruction).format("YYYY/MM/DD")}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Address: {property.address.street} {property.address.number}
                    , {property.address.pc}, {property.address.city}
                  </ListGroup.Item>
                  <ListGroup.Item>E9: {property.e9Number}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <ButtonGroup aria-label="Basic example" size='sm'>
                    <Button variant="success" className="cardButton" onClick={() => addRepair(property.id)}>Repair</Button>
                    <Button variant="warning" className="cardButton" onClick={() =>editProperty(property.e9Number)}>Edit</Button>
                    <Button variant="danger" className="cardButton" onClick={() => deleteProperty(property.id)}>Delete</Button>

                  </ButtonGroup>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          );
        })}
      </ListGroup>

    </div>
  );
};
export default PropertyCard;
