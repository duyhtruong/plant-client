import React from 'react';

import PlantForm from './PlantForm';

import { connect } from 'react-redux';
import { editPlant, getPlant } from '../../actions';

import _ from 'lodash';


class EditPlant extends React.Component{
    componentDidMount(){
        this.props.getPlant(this.props.match.params.id)
    }
    onSubmit=(formValues)=>{
        this.props.editPlant(this.props.match.params.id,formValues)
    }
    
    render(){
        return(
            <div>
                <PlantForm 
                    initialValues={_.pick(this.props.plant, 'name', 'water')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return{
        plant: state.plants[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{ editPlant, getPlant})(EditPlant);