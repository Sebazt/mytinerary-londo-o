import React from "react";
import activitiesAction from '../redux/actions/ActivitiesAction';
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../css/itineraryCard.css";


function ActivityCard(props) {
  const[data, setData] = useState()
  useEffect(() => {
    props.fetchearUnaActivity(props.id).then(res=>setData(res))
  }, []);

  return (
    <div className="accordion-hid">
      {console.log(props.activitiesByItinerary)}
      {data?.map((activity) => (
        <>
          <div className="card-accordion">
            <div className="items-card-accordion">
              <div className="containerimg-card">
                <img src={activity.imageactivity1} alt="logo" className="image-activities" />
              </div>
              <div className="containertittle-card">
                <h3 className="titulo-accordion">{activity.tittle1}</h3>
              </div>
            </div>
          </div>

          <div className="card-accordion">
            <div className="items-card-accordion">
              <div className="containerimg-card">
                <img src={activity.imageactivity2} alt="logo" className="image-activities" />
              </div>
              <div className="containertittle-card">
                <h3 className="titulo-accordion">{activity.tittle2}</h3>
              </div>
            </div>
          </div>

          <div className="card-accordion">
            <div className="items-card-accordion">
              <div className="containerimg-card">
                <img src={activity.imageactivity3} alt="logo" className="image-activities" />
              </div>
              <div className="containertittle-card">
                <h3 className="titulo-accordion">{activity.tittle3}</h3>
              </div>
            </div>
          </div>
        </>
      ))}

    </div>
  );
}

const mapDispatchToProps = {

  fetchearUnaActivity: activitiesAction.fetchearUnaActivity,
}

const mapStateToProps = (state) => {
  return {

    activitiesByItinerary: state.activitiesReducer.activitiesByItinerary
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCard)