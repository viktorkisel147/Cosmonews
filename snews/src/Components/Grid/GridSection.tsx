import './GridSection.css';
import News from '../News/News';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

interface INews {
    id: number,
    featured: boolean,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches: [
        {
        id: string,
        provider: string
        }
    ],
    events: [
        {
        id: string,
        provider: string
        }
    ]
}

type GridSectionProps = {
    skipNews: number,
    newsPerPage: number,
    inputValue: string
}

const GridSection = ({ skipNews, newsPerPage, inputValue}: GridSectionProps) => {
    const [data, setData] = useState<INews[] | null>(null);
    const [classname] = useState<string>('grid_section animation-1');

    useEffect(() => {
        let link = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${newsPerPage}&title_contains=${inputValue}&_start=${skipNews}`;
        fetch(link) 
        .then(resp => resp.json()) 
        .then(data => setData(data)) 
    }, [skipNews, inputValue]);

    return (
        <section className={classname}>
            <Grid container spacing={2}>
                {data && data.map((peace: INews) => 
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <News peaceOfNews={peace}></News> 
                </Grid>
                )}
            </Grid>
        </section>
    )
}

export default GridSection;