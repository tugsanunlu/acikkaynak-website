import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { List } from 'semantic-ui-react'

const bulmaStyles = {};

function ProjectsListView(props) {
    let projects = props.projects;

    const categories = props.projects
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            <List divided relaxed>
                {categories.map((category, number) => {
                    return (
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>{category}</List.Header>
                            </List.Content>
                            <List divided relaxed>
                                {projects.filter((x) => x.category === category).map((projectItem, number) => {
                                    return (
                                        <div key={number}>
                                            <Link key={number} to={`/projects/detail/${encodeURIComponent(projectItem.slug)}/`}>
                                                <List.Item >
                                                    
                                                    <List.Content>
                                                        <List.Header as='a'>
                                                        <List.Icon name='angle right' size='large'/>
                                                        {projectItem.title} -> {projectItem.content} -> {projectItem.stars} -> {projectItem.participation ? "Katılım Bekliyor" : "Katılım Beklemiyor"} -> {projectItem.sponsor ? "Sponsor Bekliyor" : "Sponsor Beklemiyor"}
                                                        </List.Header>
                                                        <List.Description as='a'>10 Dakika Önce Eklendi.</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </List>
                        </List.Item>
                    )
                })}
            </List>
        </>
    );
}

export {
    ProjectsListView as default,
};
