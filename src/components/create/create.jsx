import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';

import MyContext from '../../appContext/context';

import './create.scss';
class Create extends React.Component {
    static  contextType = MyContext;
    state = { 
        preview: ''
    }
     imgRef = React.createRef();
     initialState = {
        title: '',
        description: '',
        photo: undefined
    };
     SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png"
      ];
     convertTobase64 = (file) => {
         console.log(file);
        let reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader.result, 'result');
            this.setState({preview: reader.result});
        };
        if (file)
            reader.readAsDataURL(file);
    }
     handleAdd = (place) => {
        console.log(place);
        place.photo = this.state.preview;
        place['id'] = `${place.title}-${Math.floor((Math.random()* 100))}`
        this.context.addPlace(place);
        localStorage.setItem("gallery", JSON.stringify(this.context.gallery));
        // empty fields
        this.setState({preview: ''});
        this.imgRef.current.value = null;
        setTimeout(() => {
            this.props.history.push('/gallery');
        }, 1000);
        alert('Place added successful!')
        
    }
     validation = Yup.object({
        title: Yup.string()
        .min(3,'Must be 3 characters or more')
        .required('Required'),
        description: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(250,'Must be 250 characters or less')
        .required('Required'),
        photo: Yup.mixed() 
        .test('fileformat', "Unsupported File Format", value => value && this.SUPPORTED_FORMATS.includes(value.type))
        .required('Required')
    });
    render() {
        return (
            <Formik
                autocomplete="off"
                initialValues={this.initialState}
                validationSchema={this.validation}
                onSubmit={ (values, {setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    this.handleAdd(values);
                    resetForm(this.initialState);
                    setSubmitting(false);
                }}
                >
                {
                    ({isSubmitting, setFieldValue}) => (
                        <Form className="form-container" autoComplete="off">
                            <div className="fields-container">
                                <div>
                                    <h1>Add a new place</h1>
                                </div>
    
                                <div className="in-container">
                                    <label htmlFor="title">Title</label>
                                    <Field className="ip-text" type="text" name="title" placeholder="Write a amazing title!" />
                                    <ErrorMessage className="error" name="title" component="small"/>
                                </div>
    
                                <div className="in-container">
                                    <label htmlFor="description">Description</label>
                                    <Field className="ip-text" type="text" name="description" placeholder="Describe how do you feel..." />
                                    <ErrorMessage className="error" name="description" component="small"/>
                                </div>
    
                                <div className="in-container">
                                    <label htmlFor="photo">Select image</label>
                                    {/* <Field type="file" name="photo" render /> */}
                                    <input id="file" name="photo" type="file" accept="image/*" ref={this.imgRef}
                                        onChange={(event) => {
                                            this.convertTobase64(event.target.files[0]);
                                            setFieldValue('photo', event.target.files[0]);
                                            }} />
                                    <ErrorMessage className="error" name="photo" component="small"/>
                                </div>
    
                                <div className="btn-container">
                                    <button type="submit" disabled={isSubmitting} className="btn">
                                        Add place
                                    </button>
                                </div>
                            </div>
                            <div className="img-container" >
                                {this.state.preview ? <img src={this.state.preview} alt="preview"/> : null}
                            </div>
                        </Form>
                    )
                }
            </Formik>
        )
    }
}

export default withRouter(Create);