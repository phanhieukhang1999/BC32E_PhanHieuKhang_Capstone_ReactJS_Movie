import { Fragment } from "react";
import { Route } from "react-router-dom"
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => { // path, exact, Component

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => { //props.location, props.history, props.match

        return <Fragment>
            <Header/>
            <Component {...propsRoute} />
            <footer className='bg-black h-10 text-white'>
                Đây là footer homepage
            </footer>
        </Fragment>
    }} />
}