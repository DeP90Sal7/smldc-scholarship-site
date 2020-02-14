import React from 'react';
import Layout from '../components/layout'


const contact = () => {
    return (
        <Layout>
            <form>
                Name:
            <input
                    type='text'
                    placeholder='Name'
                ></input>
                Email:
            <input
                    type='text'
                    placeholder='Email'
                ></input>
                Phone:
            <input
                    type='text'
                    placeholder='Phone'
                ></input>
                Subject:
            <input
                    type='text'
                    placeholder='Subject'
                ></input>
                Message:
            <textarea
                    type='text'
                    placeholder='Write to us.'
                >

                </textarea>
            </form>
        </Layout>
    );
};

export default contact;