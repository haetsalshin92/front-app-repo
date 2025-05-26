import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Typography, Button, GridList } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  cardRoot: {
    maxWidth: 275,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
}));

const data = {
  outcome: [
    {
      name: "AWS",
      url: "/images/demo-image-0.png",
      value: "Amazon Web Services(AWS)",
      link: "https://aws.amazon.com/ko/?nc2=h_lg"
    },
    {
      name: "Amazon ECR",
      url: "/images/demo-image-1.png",
      value: "Amazon Elastic Container Registry",
      link: "https://aws.amazon.com/ko/ecr/"
    },
    {
      name: "Amazon EKS",
      url: "/images/demo-image-2.png",
      value: "Amazon Elastic Kubernetes Service",
      link: "https://aws.amazon.com/ko/eks/"
    },
    {
      name: "Amazon ECS",
      url: "/images/demo-image-3.png",
      value: "Amazon Elastic Container Service",
      link: "https://aws.amazon.com/ko/ecs/"
    },
    {
      name: "AWS Fargate",
      url: "/images/demo-image-4.png",
      value: "Serverless compute for containers",
      link: "https://aws.amazon.com/ko/fargate/"
    },
    {
      name: "Amazon Cloud9",
      url: "/images/demo-image-5.png",
      value: "A cloud IDE for writing, running, and debugging code",
      link: "https://aws.amazon.com/ko/cloud9/"
    },
    {
      name: "AWS CloudFormation",
      url: "/images/demo-image-6.png",
      value: "Speed up cloud provisioning with infrastructure as code",
      link: "https://aws.amazon.com/ko/cloudformation/"
    }
  ]
};

function UpperPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={2}>
        {data.outcome.map((item, index) => (
          <div key={index}>
            <Card className={classes.cardRoot}>        
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {item.name} 
                </Typography>
                <Typography variant="body2" component="p">
                  <img 
                    style={{ display: 'block', margin: '0px auto' }}
                    src={item.url}
                    height='120'
                    alt={item.name}
                  />
                  <br/>
                  {item.value}
                </Typography>
              </CardContent>
              <CardActions>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button size="small">See More</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        ))}
      </GridList>
    </div>
  );
}

export default UpperPage;
