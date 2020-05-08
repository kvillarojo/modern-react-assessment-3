    import React from 'react'
    import { Field, reduxForm } from 'redux-form';


    const renderField = ({input,label,type,meta, name}) => {

        return (
            <div>
                <label>{label}</label>
                <div className={'ui field'}>
                    {type === 'text' ?
                        <input {...input} type={type} placeholder={label} name={'title'}/> :
                        <textarea {...input}  placeholder={label} name={'body'}> </textarea>
                    }
                    {renderError(meta)}
                </div>
            </div>
        )
    }

    const renderError = ({error, touched}) => {
        if(error && touched){
            return  <div className={"ui negative message"}><p> {error} </p></div>
        }
    }


    const PostForm = (props) => {
        const { handleSubmit, pristine, reset, submitting, formDetails } = props;

        const onFormSubmit = (data) => {
            formDetails(data);
        }

        return (
            <form onSubmit={handleSubmit(onFormSubmit)} className={'ui form'}>
                <div className={'field'}>
                    <label> Title </label>
                    <div>
                        <Field
                            name='title'
                            component={renderField}
                            type="text"
                            placeholder="Title"
                        />
                    </div>
                </div>
                <div className={'body'}>
                    <label> Content </label>
                    <div>
                        <Field name="body" component={renderField} type="textarea" />
                    </div>
                </div>
                <br/>
                <div >
                    <button type="submit" disabled={pristine || submitting} className={'ui button'}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset} className={'ui button'}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }

    const validate = values => {
        let errors = {};
        if(!values.title){
            errors.title = 'You must Enter title!'
        }
        if(!values.body){
            errors.body = 'You must enter content!'
        }

        return errors
    }

    export default reduxForm({
        form: 'postForm',
        validate
    })(PostForm);
