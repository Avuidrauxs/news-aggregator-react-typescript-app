import * as React from 'react';

export interface MainPageProps { name: string; }


export const MainPage = (props: MainPageProps) => <h1>Hello {props.name}</h1>;