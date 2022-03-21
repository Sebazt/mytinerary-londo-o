import React from "react";
import activitiesAction from '../redux/actions/ActivitiesAction';
import { useEffect } from "react";
import { connect } from "react-redux";



function ActivityCard(props) {

  useEffect(() =>{
    props.fetchearUnaActivity(props.id);
  },[])

  return (
    <div className="accordion-hid">
      {console.log(props.activitiesByItinerary)}
      {props.activitiesByItinerary?.map((activity)=> (  
      <>
      <div className="card-accordion">
        <div id="items-card-accordion">
              <img src={activity.imageactivity1} alt="logo" className="image-activities" />
          <h2 id="titulo-accordion">{activity.tittle1}</h2>
        </div>
      </div>

      <div className="card-accordion">
        <div id="items-card-accordion">
              <img src={activity.imageactivity2} alt="logo" className="image-activities" />
              <h2 id="titulo-accordion">{activity.tittle2}</h2>
        </div>
      </div>

      <div className="card-accordion">
        <div id="items-card-accordion">
              <img src={activity.imageactivity3} alt="logo" className="image-activities" />
              <h2 id="titulo-accordion">{activity.tittle3}</h2>
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