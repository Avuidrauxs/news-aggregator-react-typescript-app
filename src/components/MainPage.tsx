import * as React from 'react';
import  RecipeReviewCard  from './NewsItem';

export interface MainPageProps { name: string; }


export const MainPage = (props: MainPageProps) => <RecipeReviewCard></RecipeReviewCard>;