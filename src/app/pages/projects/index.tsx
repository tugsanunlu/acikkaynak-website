import React, { useState } from 'react';
import ProjectsListView from './projectsListView';
import ProjectsDetailView from './projectsDetailView';
import { Container, Header, Message, Icon } from 'semantic-ui-react';

const bulmaStyles = {};

function Projects(props) {
    const [projects, setProjects] = useState([
        {
            id: 1,
            slug: "acik-kaynak-icerik",
            title: "Açık kaynak içerik projesi",
            content: "Açık kaynak içeriklerinin listelendiği proje",
            category: "Web-Onyuz",
            stars: 55,
            participation: false,
            sponsor: true
        },
        {
            id: 2,
            slug: "bibisim",
            title: "İzmir bisiklet projesi",
            content: "İzmir bisiklet durakları ve sürelerini gösteren proje",
            category: "Web-arkayuz",
            stars: 15,
            participation: false,
            sponsor: true
        }
    ]);

    if (props.slug !== undefined) {
        const currentProjectsItem = projects.find(x => x.slug === props.slug);

        if (currentProjectsItem !== undefined) {
            return (
                <div>
                    <Container>
                       
                        <ProjectsDetailView content={currentProjectsItem} />
                        <br />
                    </Container>
                </div>
            );
        }
    }

    return (
        <div>
            <Container>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='clipboard list' circular />
                    <Header.Content>Projeler</Header.Content>
                </Header>
                <ProjectsListView projects={projects} {...props} />
                <br />
            </Container>
        </div>
    );
};

export {
    Projects as default,
};
