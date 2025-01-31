import React from 'react';

import { Container, Grid, Label, Card } from 'semantic-ui-react';

import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';

import globalStyles from '../../../layouts/shared/assets/global.less';

function Licenses() {
    return (
        <Container className="content">
            <Heading icon={faClosedCaptioning} title="Lisanslar" subtitle="Açık Kaynak Lisansları" />

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        MIT
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                A short and simple permissive license with
                                conditions only requiring preservation of
                                copyright and license notices. Licensed
                                works, modifications, and larger works
                                may be distributed under different terms
                                and without source code.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <Label color="green">Commercial use</Label>
                                <Label color="green">Distribution</Label>
                                <Label color="green">Modification</Label>
                                <Label color="green">Private use</Label>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <Label color="blue">License and copyright notice</Label>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <Label color="red">Liability</Label>
                                <Label color="red">Warranty</Label>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        </Container>
    );
}

export {
    Licenses as default,
};
