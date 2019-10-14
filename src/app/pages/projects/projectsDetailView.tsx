import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import customProjectsStyle from './projects.scss'

import { Container, Header, Message, Icon, Grid, Image, Progress } from 'semantic-ui-react';

const bulmaStyles = {};

function ProjectsDetailView(props) {
    function goBackButton(event) {
        history.back();
        event.preventDefault();
    }

    return (
        <>

            <Header as="h2" icon textAlign="center">
                <Icon name="code" circular />
                <Header.Content>{props.content.title} detayı</Header.Content><br />
                <Progress percent={44} progress />

            </Header>
            <Grid>
                <Grid.Column width={4}>
                    <Image src='https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2015/01/Blog_Learn-to-code.jpg' />
                </Grid.Column>
                <Grid.Column width={6}>
                    <p>Proje Açıklaması : {props.content.content}</p>
                    <p>Star Sayısı : {props.content.stars}</p>
                    <p>Proje Kategorisi : {props.content.category}</p>

                </Grid.Column>
                <Grid.Column width={6}>
                    <p className={props.content.participation ? `${customProjectsStyle.participationwanted}` : `${customProjectsStyle.participationunwanted}`}>
                        {props.content.participation ? "Katılım Bekliyor." : "Katılım Beklemiyor."}
                    </p>
                    <p className={props.content.sponsor ? `${customProjectsStyle.participationwanted}` : `${customProjectsStyle.participationunwanted}`}>
                        {props.content.sponsor ? "Sponsor Bekliyor." : "Sponsor Beklemiyor."}
                    </p>
                    <NavLink key="0" to={`/projects/`} onClick={goBackButton}>
                        <p>
                            Geri Dön
                        </p>
                    </NavLink>
                </Grid.Column>
            </Grid>
        </>
    );
}

export {
    ProjectsDetailView as default,
};
