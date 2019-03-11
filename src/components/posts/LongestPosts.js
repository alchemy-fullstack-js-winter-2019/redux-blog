import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import image from '../../../assets/annie-spratt-413815-unsplash.jpg';
import image2 from '../../../assets/j-zamora-267753-unsplash.jpg';

export const style = {
  fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  }
};

export const right = {
  fadeInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  }
};


export const HomePostContainer = styles.ul`
 @media (min-width: 374px) {
  padding: 0;
 }
 @media (min-width: 700px) {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(450px, 1fr) );
  padding: 0;
 }
`;

export const HomePosts = styles.li`
  @media (min-width: 374px) {
    list-style: none;
    font-family: 'Lato', san-serif;
    margin: 10px 5px 10px 5px;
    h3 {
      font-family: 'Roboto', san-serif;
      text-align: center;
      letter-spacing: .02em;
      text-decoration: underline;
      margin-top: 2em;
      color: rgb(93, 95, 96);
    }
    p {
      text-align: left;
      margin: 10px;
      font-size: 15px;
      color: rgb(93, 95, 96);
    }
  }
  @media (min-width: 700px) {
    list-style: none;
    font-family: 'Lato', san-serif;
    margin: 10px 5px 10px 5px;
    h3 {
      font-family: 'Roboto', san-serif;
      text-align: center;
      letter-spacing: .02em;
      text-decoration: underline;
      margin-top: 2em;
      color: rgb(93, 95, 96);
      font-size: 45px;
    }
    p {
      text-align: left;
      margin: 10px;
      font-size: 25px;
      color: rgb(93, 95, 96);
    }
  }
`;

const Image = styles.div`
@media (min-width: 374px) and (max-width: 600px) {
  img {
    display: none;
    }
    p {
    display: none;
    }
  }
@media (min-width: 700px) {
  img {
    margin-top: 2%;
    height: 50vh;
    width: 48vw;
    }
    ul {
      display: grid;
      grid-template-columns: 50% 50%;
      padding: 0;
    }
    p {
      font-family: 'Roboto', san-serif;
      line-height: 20px;  
      color: rgb(93, 95, 96);
    }
  }
`;

const LongestPosts = ({ posts }) => {
  const longestPostList = posts
    .map((post, i) => {
      return (
        <HomePosts key={i}>
          <h3>Post length: {post.length} characters</h3>
          <p>{post}</p>
        </HomePosts>
      );
    });

  return (
    <>
    <StyleRoot>
      <Image>
        <ul>
          <div style={style.fadeInLeft}>
            <img src={image}></img>
          </div>
          <div style={right.fadeInRight}>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus metus, iaculis ut suscipit sit amet, ultrices id orci. Cras nibh ipsum, accumsan in facilisis eu, molestie in ipsum. Integer eget mi sit amet neque lacinia vulputate. Sed in neque vitae ipsum imperdiet suscipit in a orci. Proin varius tellus auctor augue viverra aliquam. Vestibulum vitae semper ipsum, eu tristique nisl. Proin vel lectus eget tellus faucibus tempor. Nam non odio nisl. Maecenas auctor lacinia ligula id suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt leo et sapien pellentesque mollis. Cras cursus nunc a odio faucibus, eu ultrices arcu ultricies.
             Nam sodales in urna ac rhoncus. In eu risus nec augue vehicula finibus quis sit amet nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec euismod leo porttitor, consequat purus quis, varius eros. Cras ut nibh odio. Ut ante purus, ultrices eget leo vitae, luctus convallis massa. Nunc pharetra metus et vestibulum porta. Duis urna ante, congue ut porttitor in, aliquet commodo dolor. Vivamus vestibulum bibendum auctor. Suspendisse tortor ex, consectetur vestibulum facilisis sed, faucibus id orci. Aliquam non malesuada eros. Sed sed accumsan augue. In consectetur dui vel leo tincidunt, nec consectetur risus pellentesque. Nulla sed leo feugiat neque blandit pellentesque.</p>
          </div>
        </ul>
        <ul>
          <div style={right.fadeInRight}>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus metus, iaculis ut suscipit sit amet, ultrices id orci. Cras nibh ipsum, accumsan in facilisis eu, molestie in ipsum. Integer eget mi sit amet neque lacinia vulputate. Sed in neque vitae ipsum imperdiet suscipit in a orci. Proin varius tellus auctor augue viverra aliquam. Vestibulum vitae semper ipsum, eu tristique nisl. Proin vel lectus eget tellus faucibus tempor. Nam non odio nisl. Maecenas auctor lacinia ligula id suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt leo et sapien pellentesque mollis. Cras cursus nunc a odio faucibus, eu ultrices arcu ultricies.
             Nam sodales in urna ac rhoncus. In eu risus nec augue vehicula finibus quis sit amet nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec euismod leo porttitor, consequat purus quis, varius eros. Cras ut nibh odio. Ut ante purus, ultrices eget leo vitae, luctus convallis massa. Nunc pharetra metus et vestibulum porta. Duis urna ante, congue ut porttitor in, aliquet commodo dolor. Vivamus vestibulum bibendum auctor. Suspendisse tortor ex, consectetur vestibulum facilisis sed, faucibus id orci. Aliquam non malesuada eros. Sed sed accumsan augue. In consectetur dui vel leo tincidunt, nec consectetur risus pellentesque. Nulla sed leo feugiat neque blandit pellentesque.</p>
          </div>
          <div style={style.fadeInLeft}>
            <img src={image2}></img>
          </div>
        </ul>
      </Image> 
      <HomePostContainer>
        {longestPostList}
      </HomePostContainer>
    </StyleRoot>
    </>
  );
};

LongestPosts.propTypes =  {
  posts: PropTypes.array.isRequired
};

export default LongestPosts;
