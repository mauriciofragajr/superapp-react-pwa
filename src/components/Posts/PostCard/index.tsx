import React from 'react';
import { Post } from '..';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

interface Props {
  post: Post
}

const PostCard: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const createMarkup = (text: string) => {
    return {
      __html: text
    };
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.post.jetpack_featured_media_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.post.title.rendered}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={createMarkup(props.post.excerpt.rendered)}>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ler Mais
        </Button>
        <Button size="small" color="primary">
          Compartilhar
        </Button>
      </CardActions>
    </Card>
  )
}

export default PostCard;