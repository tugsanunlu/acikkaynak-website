import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Label, List, Button } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Heading from '../shared/elements/heading';

import customNewsStyle from './style.less';

function NewsListView(props) {
    const history = useHistory();

    const tags = props.news.reduce(
        (acc, cur) => [ ...acc, ...cur.tags.filter(x => !acc.includes(x)) ],
        [],
    );

    // eslint-disable-next-line prefer-destructuring
    let news = props.news;

    if (props.tag) {
        const newsByTag = news.filter(item => item.tags.includes(props.tag));

        news = newsByTag;
    }

    function renderTags() {
        const currentTag = props.tag;
        const tagItems = tags.map((tag) => {
            const isActive = currentTag === tag;
            const tagColor = isActive ? 'teal' : 'blue';

            return (
                <Label className={customNewsStyle.tagItem} color={tagColor} key={tag.toLowerCase()}>
                    <Link to={`/news/tags/${encodeURIComponent(tag)}/`}>
                        {tag.toUpperCase()}
                    </Link>
                    <Link to="/news/">
                        {isActive && (
                            <FontAwesomeIcon
                                className={customNewsStyle.tagClear}
                                icon={faTimesCircle}
                            />
                        )}
                    </Link>
                </Label>

            );
        });

        return tagItems;
    }

    function newsClickHandler(newsItem) {
        const newsRoute = `/news/detail/${encodeURIComponent(newsItem.slug)}`;

        history.push(newsRoute);
    }

    function renderNewsList() {
        const newsItems = news.map(newsItem => (
            <List.Item key={newsItem.slug.toLowerCase()} onClick={() => newsClickHandler(newsItem)}>
                <List.Icon name="newspaper" verticalAlign="middle" />
                <List.Content>
                    <List.Header>{newsItem.title}</List.Header>
                </List.Content>
            </List.Item>
        ));

        return (
            <List className={customNewsStyle.newsList} divided relaxed>
                {newsItems}
            </List>
        );
    }

    return (
        <>
            <Heading icon={faCaretSquareRight} title="Haberler" subtitle="Açık Kaynak ile İlgili Haberler" />

            {renderTags()}
            {renderNewsList()}

            <div className={customNewsStyle.bottomLinks}>
                <Button as={Link} content="Haber Ekle" primary to="/news/add/" />
            </div>
        </>
    );
}

export {
    NewsListView as default,
};
